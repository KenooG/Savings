import React, { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
      <div className={"auto-form-box"}>
    <div className={"auto-form-container"} >
      <h2 className={"h2-form"}>Register</h2>
      <form className={"register-form"} onSubmit={handleSubmit}>
        <label className={"label-form"} htmlFor={'name'}>Full Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          name={'name'}
          id={'name'}
          placeholder={'John Smith'}
        />

        <label className={"label-form"} htmlFor={'email'}>email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type={'email'}
          placeholder={'youremail@gmail.com'}
          id={'email'}
          name={'email'}
        />
        <label className={"label-form"} htmlFor={'password'}>password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type={'password'}
          placeholder={'******'}
          id={'password'}
          name={'password'}
        />
        <button className={"link-btn-3"} type={'submit'}>Register</button>
      </form>
      <a href={'/login'}>
        <button className={"link-btn"}>Already have an account? Login here.</button>
      </a>
      <a href={'/'}>
        <button className={"link-btn-2"}>Main Page</button>
      </a>



    </div>
      </div>
  );
};

export default Register;
