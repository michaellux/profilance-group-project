import React from 'react';

import { useSelector } from 'react-redux';

import './pages.css';

const AdminPage = () => {
  const { isLoggedIn } = useSelector(state => state.app.logInStatus);
  console.log(isLoggedIn);

  if (isLoggedIn) {
    return (
      <main>
        <h1 className="title main__home-title">Admin Page</h1>
        <p>Привет, админ</p>
      </main>
    );
  }

  return (
    <main>
      <h1 className="title main__home-title">Admin Page</h1>
      <p>Кто ты? Сюда можно только админу!</p>
    </main>
  )
}

export default AdminPage;