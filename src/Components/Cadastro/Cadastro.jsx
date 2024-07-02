import {FaUser, Falock, FaEnvelope} from 'react-icons/fa';

import { useState } from 'react';

import './Cadastro.css';

const Cadastro = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubit = (event) => {
        event.prevenDefault();

        alert('Enviando os dados:' + username + ' - ' + email + ' - ' + password)
    };

    return (
        <div className='container'>
            <form onSubmit={handleSubit}>
                <h1>Cadastro no Sistema</h1>
                <div className='input-field'>
                    <input type="text" placeholder='Nome' onChange={(e) => setUsername(e.target.value)} required />
                    <FaUser className='icon'/>
                </div>
                <div className='input-field'>
                    <input type="email" placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} required/>
                    <FaEnvelope className='icon'/>
                </div>
                <div className='input-field'>
                    <input type="password" placeholder='Senha' onChange={(e) => setPassword(e.target.value)} required/>
                    <Falock className='icon'/>
                </div>

                <button>Criar Conta</button>

            </form>
        </div>
    );
};

export default Cadastro;