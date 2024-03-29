import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import ErrorWindow from "./components/errorwindow.jsx";
import SuccesLogin from "./components/succeslogin.jsx";

const Register = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const [hasError, setHasError] = useState(false);
  const [hasSucces, setHasSucces] = useState(false);
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/signup', { name, email, pass });
      if (response.status === 201) {
        setHasSucces(true);
        setTimeout(() => {

          navigate("/login");
        }, 2000);
      }




    } catch (error) {
      setHasError(true);
    }
  };

  return (
      <>

    <div className={'auto-form-box'}>
      <div className={'auto-form-container'}>
        <h2 className={'h2-form'}>Register</h2>
        <form className={'register-form'} onSubmit={handleSubmit}>
          <label className={'label-form'} htmlFor={'name'}>
            Nickname
          </label>
          {hasSucces && <SuccesLogin> Konto </SuccesLogin>}
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            name={'name'}
            id={'name'}
            placeholder={'Samy42'}
          />

          <label className={'label-form'} htmlFor={'email'}>
            email
          </label>

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type={'email'}
            placeholder={'youremail@gmail.com'}
            id={'email'}
            name={'email'}
          />
          <label className={'label-form'} htmlFor={'password'}>
            password
          </label>

          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type={'password'}
            placeholder={'******'}
            id={'password'}
            name={'password'}
          />
          {hasError && <ErrorWindow> Cos nie działa </ErrorWindow>}
          <button className={'link-btn-3'} type={'submit'}>
            Register
          </button>
        </form>
        <a href={'/login'}>
          <button className={'link-btn'}>
            Already have an account? Login here.
          </button>
        </a>
        <a href={'/'}>
          <button className={'link-btn-2'}>Main Page</button>
        </a>
      </div>
    </div>

      </>
  );
};

export default Register;
