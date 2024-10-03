import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './store';
import { updateName, updateEmail } from './action';

const App = () => {
  const dispatch = useDispatch();
  const { name, email } = useSelector((state) => state);

  const handleNameChange = (e) => {
    dispatch(updateName(e.target.value));
  };

  const handleEmailChange = (e) => {
    dispatch(updateEmail(e.target.value));
  };

  return (
    <div>
      <h1>User Information</h1>
      <div>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} placeholder="Enter name" />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} placeholder="Enter email" />
        </label>
      </div>
      <div>
        <h2>Current values in store:</h2>
        <p className="output">Name - {name}</p>
        <p className="output">Email - {email}</p>
      </div>
    </div>
  );
};

const AppWithProvider = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWithProvider;
