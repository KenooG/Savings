const port = 8000;
const express = require('express');
const { MongoClient } = require('mongodb');
const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bcrypt = require('bcrypt');
const uri =
  'mongodb+srv://seba:Admin@cluster0.1pnfxw9.mongodb.net/?retryWrites=true&w=majority';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json('test');
});

app.get('/users', async (req, res) => {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const database = client.db('app-data');
    const users = database.collection('users');

    const returnedUsers = await users.find().toArray();
    res.json(returnedUsers);
  } finally {
    await client.close();
  }
});

app.post('/signup', async (req, res) => {
  const client = new MongoClient(uri);
  const { name, email, pass } = req.body;

  const generatedUserId = uuidv4();
  const hashedPassword = await bcrypt.hash(pass, 10);

  try {
    await client.connect();
    const database = client.db('app-data');
    const users = database.collection('users');
    const existingUser = await users.findOne({ email });
    if (existingUser) {
      return res.status(409).send('user already exists');
    }

    const sanitizedEmail = email.toLowerCase();
    const data = {
      user_id: generatedUserId,
      name: name,
      email: sanitizedEmail,
      hashed_password: hashedPassword,
    };

    const insertedUser = await users.insertOne(data);
    const token = jwt.sign(insertedUser, sanitizedEmail, {
      expiresIn: 60 * 24,
    });
    res.status(201).json({ token, userId: generatedUserId });
  } catch (err) {
    console.log(err);
  }
});

app.post('/login', async (req, res) => {
  const client = new MongoClient(uri);
  const { email, pass } = req.body;

  try {
    await client.connect();
    const database = client.db('app-data');
    const users = database.collection('users');
    const user = await users.findOne({ email });

    if (!user) {
      return res.status(400).json('Email not found');
    }

    const correctPass = await bcrypt.compare(pass, user.hashed_password);

    if (correctPass) {
      const token = jwt.sign(user, email, {
        expiresIn: 60 * 24,
      });
      return res.status(201).json({ token });
    }
    return res.status(400).json('Invalid password');
  } catch (err) {
    console.log(err);
    return res.status(500).json('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log('server is running on port ' + port);
});
