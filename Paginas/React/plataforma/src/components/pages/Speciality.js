import React, {useEffect} from 'react';

import Banner from './Banner';
import {useSelector, useDispatch} from 'react-redux';
import {getSpeciality} from '../../Redux/Actions/specialiteAction'

const Speciality = () => {

	const dispatch = useDispatch();
	const contentSpeciality = () => dispatch(getSpeciality())

	const specialities = useSelector(state => state.speciality.speciality)

	useEffect(() => {
		contentSpeciality();
		// eslint-disable-next-line
	}, [])

	console.info(specialities[0])

	return (
		specialities.map((speciality, i) => (
			<div key={i}>
				<Banner
					title={speciality.data.name}
					parragraph={speciality.data.information}
					color="dark-color"
					image={{
						src: "https://static9.depositphotos.com/1011643/1138/i/600/depositphotos_11389072-stock-photo-group-of-young-teachers.jpg",
						alt: speciality.data.name
					}}
					poster={speciality.data.picture}	
					info={speciality.data.subtitle}
					home
				/>
				<main className="ed-grid lg-grid-10">
					<div className="lg-cols-7">
						<div className="s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white l-block s-shadow-bottom course-fectures ed-grid lg-grid-3 ">
							<div>
								<h3>¿Que Aprenderas?</h3>
								<ul>
									{speciality.data.abilities.map(abi => 
										<li key={abi.id}>{abi.description}</li>
									)}
								</ul>
							</div>
							<div>
								<h3>Conocimientos Previos</h3>
								<ul>
									{speciality.data.knowledge.map(des => 
										<li key={des.id}>{des.description}</li>
									)}
								</ul>				
							</div>
							<div>
								<h3>Nivel del curso</h3>
								<li>{speciality.data.level}</li>
							</div>
						</div>
						<h2>Temario de la especialid</h2>
						<div className="s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white l-block l-section s-shadow-bottom">
							{speciality.data.courses.map((clase, i) => (
								<div key={i} className="course-class l-section">
									<div className="ed-grid m-grid-3">
										<img src="https://edteam-media.s3.amazonaws.com/courses/big/8b7ef439-b9bc-485f-9608-d82d0d1a7a2b.png" alt={clase.name}/>
										<div className="m-cols-2">
											<h3>{clase.name}</h3>
											<p>{clase.information}</p>
									</div>
									</div>
								</div>
							))}
						</div>
					</div>
					
					<div className="lg-cols-3">
						<div className="s-border s-pxy-4 s-radius s-bg-white s-shadow-bottom">
							<h2 className="t3">Profesor</h2>
							<li>{speciality.data.professors[0].firstname} {speciality.data.professors[0].lastname}</li>
							<li>{speciality.data.professors[0].city} - {speciality.data.professors[0].country_name}</li>
							<li>{speciality.data.professors[0].email}</li>
							<li>{speciality.data.professors[0].biography}</li>
						</div>
					</div>
				</main>

			</div>
		))
	);
}
 
export default Speciality;
