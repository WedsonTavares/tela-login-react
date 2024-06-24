import { FaUser, FaLock } from 'react-icons/fa';

import { useState } from 'react';

import './login.css';


const login = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Enviando os dados " + userName + " - " + password)
    };


    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <h1>Acesse o sistema</h1>
                <div className='input-field'>
                    <input
                        type="email"
                        placeholder='Email'
                        required
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <FaUser className='icon' />
                </div>

                <div className='input-field'>
                    <input
                        type="password"
                        placeholder='Senha'
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FaLock className='icon' />
                </div>

                <div className='recall-forget'>
                    <label>
                        <input type="checkbox" />
                        Lembre de mim
                    </label>
                    <a href="#">Esqueceu a Senha?</a>
                </div>

                <button type='submit'>Entrar</button>

                <div className="signup-link">
                    <p>Não tem uma conta? <a href="#">Registrar</a></p>
                </div>
            </form>

        </div>
    )
}

export default login;
