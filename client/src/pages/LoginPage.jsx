import React, { useState } from "react";
import Error from "../components/Error";
import Loader from "../components/Loader";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading] = useState(false);
  const [error] = useState();

  const login = () => {
    const user = {
      email,
      password,
    };

    // блок запроса в базу axios
    // setLoading(true);
    // после post запроса
    // setLoading(false);

    const localEmail = localStorage.getItem("currentUserEmail");
    const localPassword = localStorage.getItem("currentUserPassword");
    if (localEmail === user.email && localPassword === user.password) {
      console.log("super");
      window.location.href = "/";
    } else {
      console.log("not super");
    }
    // window.location.href = '/'; // to home page

    // setSuccess(true);
    // setName('');
    // setEmail('');
    // setPassword('');
    // setCpassword('');
    // в catch setLoading(false) setError(true)

    // конец блока
  };

  return (
    <>
      {loading && <Loader />}
      <div className='row justify-content-center mt-5'>
        <div className='col-md-5 mt-5'>
          {error && <Error message='Invalid Credentionals' />}
          <div className='bs'>
            <h2>Login</h2>
            <input
              type='text'
              className='form-control mb-2'
              placeholder='email'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type='text'
              className='form-control mb-2'
              placeholder='password'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button
              className='btn btn-primary show-more-btn mt-3'
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

export default LoginPage;
