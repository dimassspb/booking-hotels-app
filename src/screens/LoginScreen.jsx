import React, { useState, useEffect } from 'react';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    const user = {
      email,
      password,
    };
    console.log(user);
  };

  return (
    <>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5">
          <div className="bs">
            <h2>Login</h2>
            <input
              type="text"
              className="form-control"
              placeholder="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="text"
              className="form-control"
              placeholder="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button
              className="btn btn-primary show-more-btn mt-3"
              onClick={login}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
