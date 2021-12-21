import React, { useState} from 'react';
import Error from '../components/Error';
import Loader from '../components/Loader';
import Success from '../components/Success';

const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');

  const [loading] = useState(false);
  const [error] = useState();
  const [success, setSuccess] = useState();

  // блок запроса в базу axios
  // setLoading(true);
  // после post запроса
  // setLoading(false);
  // setSuccess(true);
  // setName('');
  // setEmail('');
  // setPassword('');
  // setCpassword('');
  // в catch setLoading(false) setError(true)

  // конец блока

  const register = () => {
    if (password === cpassword) {
      const user = {
        name,
        email,
        password,
        cpassword,
      };
      console.log(user);
      localStorage.setItem('currentUserEmail', user.email);
      localStorage.setItem("currentUserPassword", user.password);
      localStorage.setItem("currentUserName", user.name);

      setName(''); // временно
      setEmail(''); // временно
      setPassword(''); // временно
      setCpassword(''); // временно
      setSuccess(true); // временно
      // window.location.href = '/login';
    } else {
      alert('Password not matched');
    }
  };

  return (
    <>
      {loading && <Loader />}
      {error && <Error />}

      <div className='row justify-content-center mt-5'>
        <div className='col-md-5 mt-5'>
          {success && <Success message='Registration success' />}
          <div className='bs'>
            <h2>Register</h2>
            <input
              type='text'
              className='form-control mb-2'
              placeholder='name'
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
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
              className='form-control mb-2 '
              placeholder='password'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              type='text'
              className='form-control mb-2'
              placeholder='confirm password'
              value={cpassword}
              onChange={(e) => {
                setCpassword(e.target.value);
              }}
            />
            <button
              className='btn btn-primary show-more-btn mt-3'
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

export default RegistrationPage;
