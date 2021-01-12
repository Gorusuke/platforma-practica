import React from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';


const Login = () => {

	const authentication = (e) => {
		e.preventDefault();
		const data = {
			"email": e.target.email.value,
			"password" : e.target.password.value
		}

		Axios.post('https://api-edteam.alejogs4.now.sh/login', data)
		.then((result) => {
			localStorage.setItem('token', result.data.token)
			window.location = '/'
		})
		.catch((err) => console.info(err))
	}


	return (
		<div className="ed-grid">
			<div className="l-block"></div>
			<div className="m-to-center m-60 lg-40 s-border s-pxy-3">
				<h1 className="center color dark-color">Iniciar Sesión</h1>
				<form onSubmit={authentication}>
					<div className="form__item">
						<label htmlFor="email"><b className="color third-color">Correo Electrónico</b></label>
						<input 
							type="email" 
							id="email" 
							placeholder="Ingresa tu email" 
							name="email"
							required 
							autoComplete="username"/>
					</div>
					<div className="form__item">
						<label htmlFor="password"><b className="color third-color">Contraseña</b></label>
						<input 
							type="password" 
							id="password" 
							placeholder="Ingresa tu contraseña" 
							name="password"
							required 
							autoComplete="current-password"/>
					</div>
					<div className="form__item">
						<input type="submit" className="button third-color full" value="Iniciar Sesión"/>
					</div>
					<div className="ed-container">
						<div className="ed-item s-60 s-px-0 s-pr-1"><p className="s-right">¿No tienes una cuenta?</p></div>
						<div className="ed-item s-40 s-px-0"><Link to={'/registro'} className="s-left">Crear cuenta</Link></div>
					</div>
					<div className="cancel-l-block"></div>
				</form>
			</div>
    </div>
	);
}
 
export default Login;
