import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';


const Login = () => {

	const [error, setError] = useState(false)

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
		.catch((err) => setError(err))
	}


	return (
		<>
			{error 
				? <p className="center color third-color">Hubo un error al intentar iniciar sesión</p>
				: null}
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
						<div className="center">
							<p>¿No tienes una cuenta de usuario? <Link to={'/registro'}>Crear cuenta</Link></p>
						</div>
						<div className="cancel-l-block"></div>
					</form>
				</div>
			</div>
		</>
	);
}
 
export default Login;
