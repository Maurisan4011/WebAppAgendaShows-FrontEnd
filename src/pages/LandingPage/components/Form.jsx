import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {loginUserApi} from '../../../services/userService';

function Form() {

    const [userCredentials, setState] = useState({
        email: '',
        password: ''
    });

    const [isLogged, setIsLogged] = useState(false);

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setState(prevState => ({
            ...prevState,
            [name] : value
        }));
    }

    const handleClick = async (e) => {
        e.preventDefault();

        await loginUserApi(userCredentials);
        setIsLogged(true);
    }

    return (
        <>
            {isLogged && <Redirect to="/inicio" />}
            <form id="form"> 
                <div className="form-group">
                    <label htmlFor="email" className="etiqueta">E-Mail</label>
                    <input type="emai" 
                        name="email" 
                        className="form-control" 
                        aria-describedby="emailHelp" 
                        placeholder="Ingresa tu Email"
                        value={userCredentials.email}
                        onChange={handleInputChange} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="etiqueta">Contraseña</label>
                    <input type="password" 
                        name="password" 
                        className="form-control" 
                        placeholder="Contraseña"
                        value={userCredentials.password}
                        onChange={handleInputChange} required/>
                </div>
                <br/>
                <Link to=""
                    type="submit" 
                    className="btn btn-primary"
                    onClick={handleClick}>Inicia Sesion</Link>
                <Link to="/invitado" 
                    type="submit"
                    className="btn btn-success no-login-btn">Iniciar como Invitado</Link>
            </form>
        </>
    )
};

export default Form;