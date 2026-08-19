import { useState } from 'react';
import logo from '../../imagens/sgp_logo_vertical.png';
import './login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [marcado, setMarcado] = useState(true);
    const [erro, setErro] = useState("");

    const navigate = useNavigate();

    const executarLogin = (e) => {
        e.preventDefault();

        if (email === "" || senha === "") {
            setErro("Preencha todos os campos!");
            return;
        }

        console.log({ email, senha, marcado });
        setErro("");

        navigate("/usuarios");
    }

    return (
        <div className="bg-container">
            <div className='container'>
                <div className='row justify-content-center'>
                    <form className='col-md-5 col-10 login-container'>
                        <div className='row justify-content-center my-4'>
                            <div className='col-8'>
                                <div className='d-flex justify-content-center'>
                                    <img src={logo} alt="Sistema de Gerenciamento de Projetos" width="200px" />
                                </div>

                                <div className='d-flex justify-content-center'>
                                    <span className='text-danger mb-2'>{erro}</span>
                                </div>

                                <input
                                    type='email'
                                    className='form-control border border-primary mb-2'
                                    placeholder='E-mail'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                                <input
                                    type='password'
                                    className='form-control border border-primary mb-2'
                                    placeholder='Senha'
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                />

                                <div className='form-check text-start my-3'>
                                    <input 
                                        className='form-check-input' 
                                        type='checkbox'
                                        defaultChecked={marcado}
                                        onChange={() => setMarcado(!marcado)}
                                    />
                                    <label className='form-check-label text-dark'>Mantenha-me conectado</label>
                                </div>

                                <div className='d-flex justify-content-center'>
                                    <button 
                                        type='submit' 
                                        className='btn btn-primary mt-2 px-4'
                                        onClick={executarLogin}
                                    >
                                        Acessar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;