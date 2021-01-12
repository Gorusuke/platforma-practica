import React from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';

const Register = () => {

	const registro = (e) => {
		e.preventDefault();
		const data = {
			"email": e.target.email.value,
			"name": e.target.nombre.value,
			"password" : e.target.password.value
		}
		
		Axios.post('https://api-edteam.alejogs4.now.sh/signup', data)
		.then(() =>	window.location = '/login')
		.catch((err) => console.info(err))
	}


	return (
		<div className="ed-grid">
			<div className="l-block"></div>
			<div className="m-to-center m-60 lg-40 s-border s-pxy-3">
				<h1 className="center color dark-color">Crear cuenta</h1>
				<form onSubmit={registro}>
					<div className="form__item">
						<label htmlFor="name"><b className="color third-color">Nombre Completo</b></label>
						<input 
							type="text" 
							id="name" 
							placeholder="Ingresa tu nombre completo" 
							name="nombre"
							required />
					</div>
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
						<input type="submit" className="button third-color full" value="registrarse"/>
					</div>
					<div className="center">
						<p>¿Ya tienes una cuenta de usuario? <Link to={'/login'}>Iniciar sesión</Link></p>
					</div>
					<div className="cancel-l-block"></div>
				</form>
			</div>
    </div>
	);
}
 
export default Register;
