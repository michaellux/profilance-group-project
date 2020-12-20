import React from 'react';

import { useSelector } from 'react-redux';

import './pages.css';

const HomePage = () => {
  const { isLoggedIn } = useSelector((state) => state.app.logInStatus);

  if (!isLoggedIn) {
    return (
      <main>
        <h1 className="title main__home-title">Home Page</h1>
        <p>Привет, гость</p>
      </main>
    );
  }
  return (
    <main>
      <h1 className="title main__home-title">Home Page</h1>
      <p>Привет, или ты админ или одно из двух. Скоро идентифицируем</p>
    </main>
  );
};

export default HomePage;
