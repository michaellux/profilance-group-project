import React from 'react';

import './pages.css';

const AdminPage = ({isLoggedIn}) => {
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