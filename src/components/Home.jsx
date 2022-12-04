import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ socket }) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userName', userName);
    //sends the username and socket ID to the Node.js server
    socket.emit('newUser', { userName, socketID: socket.id });
    navigate('/chat');
  };

  return (
    <form className="home__container" onSubmit={handleSubmit}>
      <h2 className="home__header">Inicia Sesion Para Entrar En El Chat</h2>
      <label htmlFor="username">Nombre de Usuario</label>
      <input
        type="text"
        minLength={6}
        name="username"
        id="username"
        className="username__input"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button className="home__cta">Inicar Sesion</button>
    </form>
  );
};

export default Home;