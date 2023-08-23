const port = 8000;
const express = require('express');
const { MongoClient } = require('mongodb');
const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bcrypt = require('bcrypt');
const uri = 'mongodb+srv://seba:Admin@cluster0.1pnfxw9.mongodb.net/?retryWrites=true&w=majority';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json('test');
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
      value: 0,
      target_value: 0,
      total_value: 0,
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

    const sanitizedEmail = email.toLowerCase();
    const user = await users.findOne({ email: sanitizedEmail });

    if (!user) {
      return res.status(404).send('user not found');
    }

    const isPasswordCorrect = await bcrypt.compare(pass, user.hashed_password);
    if (!isPasswordCorrect) {
      return res.status(401).send('invalid password');
    }

    const token = jwt.sign({ id: user.user_id }, sanitizedEmail, {
      expiresIn: 60 * 24,
    });

    res.status(200).json({ token, userId: user.user_id, name: user.name });

  } catch (err) {
    console.log(err);
    res.status(500).send('internal server error');
  }
});


app.post('/value', async (req, res) => {

  const client = new MongoClient(uri);
  const { userId, value } = req.body;

  if (!userId || value === undefined) {
    return res.status(400).send('userId and value are required');
  }

  try {
    await client.connect();
    const database = client.db('app-data');
    const users = database.collection('users');

    // Znajdź użytkownika o podanym userId i zaktualizuj pole value
    const result = await users.updateOne({ user_id: userId }, { $set: { value: value } });

    if (result.matchedCount === 0) {
      return res.status(404).send('User not found');
    }

    res.status(200).send('Value updated successfully');
  } catch (err) {
    console.log(err);
    res.status(500).send('internal server error');
  } finally {
    // Zawsze zamknij połączenie z klientem, gdy skończysz
    await client.close();
  }
});


app.get('/value/:userId', async (req, res) => {
  const client = new MongoClient(uri);
  const { userId } = req.params;

  try {
    await client.connect();
    const database = client.db('app-data');
    const users = database.collection('users');
    const user = await users.findOne({ user_id: userId });

    if (!user) {
      return res.status(404).send('User not found');
    }

    res.status(200).json({ value: user.value, total_value: user.total_value });
  } catch (err) {
    console.log(err);
    res.status(500).send('internal server error');
  } finally {
    await client.close();
  }
});

app.post('/total_value', async (req, res) => {
  const client = new MongoClient(uri);
  const { userId, total_value } = req.body;

  if (!userId || total_value === undefined) {
    return res.status(400).send('userId and total_value are required');
  }

  try {
    await client.connect();
    const database = client.db('app-data');
    const users = database.collection('users');

    // Znajdź użytkownika o podanym userId i zaktualizuj pole total_value
    const result = await users.updateOne({ user_id: userId }, { $set: { total_value: total_value } });

    if (result.matchedCount === 0) {
      return res.status(404).send('User not found');
    }

    res.status(200).send('Total value updated successfully');
  } catch (err) {
    console.log(err);
    res.status(500).send('internal server error');
  } finally {
    // Zawsze zamknij połączenie z klientem, gdy skończysz
    await client.close();
  }
});









app.listen(port, () => {
  console.log('server is running on port ' + port);
});
