import React, {useEffect} from 'react';
import Banner from './Banner';
import {useSelector, useDispatch} from 'react-redux'; 


import {getAllSpecialities} from '../../Redux/Actions/specialiteAction'
import Card from './Card';

const Specialities = () => {

	const dispatch = useDispatch();
	const contentSpecialities = () => dispatch(getAllSpecialities())

	const specialities = useSelector(state => state.speciality.specialities)

	useEffect(() => {
		contentSpecialities();
		// eslint-disable-next-line
	}, [])


	return (

		<>
			<Banner
				title="Especialidades"
				parragraph="Domina una tecnologia con las rutas de aprendizajes que tenemos"
				color="first-color"
				image={{
					src: "https://static9.depositphotos.com/1011643/1138/i/600/depositphotos_11389072-stock-photo-group-of-young-teachers.jpg",
					alt: "Banner especialidades"
				}}
			/>

			<main className="ed-grid m-grid-3">
				{specialities.map(speciality => (
					<Card
						key={speciality.id}
						id={speciality.id}
						picture={speciality.picture}
						name={speciality.name}
						ruta='especialidades'
					/>					
			))}
		</main>
		</>
	);
}
 
export default Specialities;
