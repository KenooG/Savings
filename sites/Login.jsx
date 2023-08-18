import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault()
      console.log(email)


  }


  return (
      <div className={"auto-form-box"}>
      <div className={"auto-form-container"}>
          <h2 className={"h2-form"}>Login</h2>
    <form className={"login-form"} onSubmit={handleSubmit}>
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
      <button className={"link-btn-3"} type={"submit"}>Log In</button>
    </form>
          <a href={"/register"}>
<button className={"link-btn"}>Dont have an account? Register here.</button>
          </a>
          <a href={'/'}>
              <button className={"link-btn-2"}>Main Page</button>
          </a>
      </div>
      </div>
  );
};

export default Login;
