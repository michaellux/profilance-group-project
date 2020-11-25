import React from 'react';

import './pages.css';

const SimpleUserPage = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return (
      <main>
        <h1 className="title main__home-title">SimpleUser Page</h1>
        <p>Привет, обычный пользователь</p>
      </main>
    );
  }

  return (
    <main>
      <h1 className="title main__home-title">SimpleUser Page</h1>
      <p>Кто ты? Сюда заходят только обычные пользователи!</p>
    </main>
  )
  
}

export default SimpleUserPage;