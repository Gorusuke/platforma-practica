import React, {useEffect} from 'react';
import Banner from './Banner';
import {useSelector, useDispatch} from 'react-redux'; 


import {getAllCourses} from '../../Redux/Actions/courseAction'
import Card from './Card';

const Courses = () => {

	const dispatch = useDispatch();
	const contentCourses = () => dispatch(getAllCourses())

	const courses = useSelector(state => state.course.courses)

	useEffect(() => {
		contentCourses();
		// eslint-disable-next-line
	}, [])

	// console.info(courses)

	return (
		<>
			<Banner
				title="Nuestros Cursos"
				parragraph="Comienza desde cero y sé un master en tecnologia"
				color="dark-color"
				image={{
					src: "https://static9.depositphotos.com/1011643/1138/i/600/depositphotos_11389072-stock-photo-group-of-young-teachers.jpg",
					alt: "Banner Profesores"
				}}
			/>
			<main className="ed-grid m-grid-3 lg-grid-4">
						{courses.map(course => (
						<Card
							key={course.id}
							id={course.id}
							picture={course.picture}
							name={course.name}
							ruta='cursos'
						/>
					))}
				</main>
			</>
	);
}
 
export default Courses;
