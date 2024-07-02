import { FaLock, FaUser } from 'react-icons/fa';

import {useState} from 'react';

import './Login.css';

const Login = () => {
 const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubit = (event) => {
    event.preventDefault();

    alert("Enviando os dados:" + username + ' - ' + password)
  };

  return (
    <div className='container'>
        <form onSubmit={handleSubit}>
        <h1>Acesse o sistema</h1>
        <div className='input-field'>
            <input type="email" placeholder='E-mail' onChange={(e) => setUsername(e.target.value)} required />
            <FaUser className='icon'/>
        </div>
        <div className='input-field'>
            <input type="password" placeholder='Senha' onChange={(e) => setPassword(e.target.value)}  required/>
            <FaLock className='icon'/>
        </div>

      <div className='recall-forget'>
        <label>
          <input type="checkbox" />
          Lembre de mim
        </label>
        <a href="#">Esqueceu a senha?</a>
      </div>

        <button>Entrar</button>

        <div className='signup-link'>
          <p>
            Não tem uma conta? <a href='./Components/Cadastro/Cadastro'>Registrar</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
