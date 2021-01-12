import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Clases from './components/pages/Clases';
import Course from './components/pages/Course';
import Courses from './components/pages/Courses';
import Error404 from './components/pages/Error404';
import Home from './components/pages/Home';
import Specialities from './components/pages/Specialities';
import Speciality from './components/pages/Speciality';
import Teachers from './components/pages/Teachers';
// import Terminos from './components/pages/Terminos';

import {Protected} from './components/routes/Protected';
import { Public } from './components/routes/Public';


function App() {
	return(
		<Router>
			<Header/>
			<Switch>
				<Public exact path='/login' component={Login} />
				<Public exact path='/registro' component={Register} />

				<Protected exact path='/' component={Home} />
				<Protected exact path='/cursos/:id' component={Course} />
				<Protected exact path='/cursos' component={Courses} />
				<Protected exact path='/especialidades/:id' component={Speciality} />
				<Protected exact path='/especialidades' component={Specialities} />
				<Protected exact path='/profesores' component={Teachers} />
				<Protected exact path='/clase/:id' component={Clases} />

				<Route component={Error404} />
				{/* <Route exact path='/terminos' component={Terminos} /> */}
			</Switch>
			{/* <Footer/> */}
		</Router>
	
	) 
}

export default App;
