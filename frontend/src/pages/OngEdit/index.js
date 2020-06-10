import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api.js';
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function OngEdit() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');
    const [ong, setOng] = useState('');
    const history = useHistory();

    const id = localStorage.getItem('OngId');
    
    useEffect(() => {
        function loadData() {
            api.get(`ongs/${id}`).then(response =>{
                console.log(response);
            });
        }
        loadData();
    }, [id]);

    async function handleUpdate(e, id) {
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
        };

        try {
            await api.put(`/ongs/${id}`, {
                headers:{
                    Authorization: id,
                }
            }, data);

            alert('Cadastro Alterado');
            
            history.push('/profile');
        }catch(err){
            alert('Erro na atualização, tente novamente.');
        }
    }

    async function handleDeleteOng(id) {

    }
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Altere seus dados</h1>
                    <p>Caso queria excluir seus dados, basta clicar em Remover Cadastro.</p>
                    <hr />
                    <p>Caso necessite mudar seus dados, basta altera-los e clicar em Alterar Cadastro.</p>
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft  size={16} color="#E02041"/>
                        Voltar
                    </Link>
                </section>

                <form >
                    <button 
                        className="button" 
                        type="button" 
                        onSubmit={() => handleDeleteOng(id)}
                    >
                        Remover Cadastro
                    </button>
                    <input 
                        placeholder="Nome da ONG"
                        value={ong.name}
                        onChange={e => setName(e.target.value)} 
                    />
                    <input 
                        type="email" 
                        placeholder="E-mail"
                        value={ong.email}
                        onChange={e => setEmail(e.target.value)}  
                    />
                    <input 
                        placeholder="Whatsapp"
                        value={ong.whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}  
                    />
                    <div className="input-group">
                        <input 
                            placeholder="Cidade"
                            value={ong.city}
                            onChange={e => setCity(e.target.value)}  
                        />
                        <input 
                            placeholder="UF" style={{width:80}}
                            value={ong.uf}
                            onChange={e => setUf(e.target.value)}  
                        />
                    </div>
                    <button 
                        className="button" 
                        type="button" 
                        onClick={() => handleUpdate(id)}
                    >
                        Alterar Cadastro
                    </button>
                </form>
            </div>
        </div>
    );
}