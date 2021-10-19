import React, { useState, useEffect } from 'react';

const RegistrationScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');

  const register = () => {
if (password === cpassword) {
      const user = {
        name,
        email,
        password,
        cpassword,
      };
      console.log(user);
} else {
  alert('Password not matched')
}
  };

  return (
    <>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5">
          <div className="bs">
            <h2>Register</h2>
            <input
              type="text"
              className="form-control"
              placeholder="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
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
            <input
              type="text"
              className="form-control"
              placeholder="confirm password"
              value={cpassword}
              onChange={(e) => {
                setCpassword(e.target.value);
              }}
            />
            <button
              className="btn btn-primary show-more-btn mt-3"
              onClick={register}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationScreen;
