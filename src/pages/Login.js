import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username.trim() === '') {
      setError('El usuario no puede estar vacío');
      return;
    }

    if (password.length < 5 || password.length > 8) {
      setError('La contraseña debe tener entre 5 y 8 caracteres');
      return;
    }

    setError('');
    alert(`¡Inicio de sesión exitoso!\nUsuario: ${username}`);
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>

      {/* Campo de Usuario */}
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {/* Campo de Contraseña */}
      <input
        type="password"
        className="form-control mb-2"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* Mensaje de error */}
      {error && <p className="text-danger">{error}</p>}

      {/* Botón de Ingreso */}
      <button className="btn btn-primary" onClick={handleLogin}>Ingresar</button>
    </div>
  );
}

export default Login;
