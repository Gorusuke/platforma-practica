import React from 'react';
import Banner from './Banner';

const Courses = () => {
	return (
		<Banner
			title="Nuestros Cursos"
			parragraph="Comienza desde cero y sé un master en tecnologia"
			color="dark-color"
			image={{
				src: "https://static9.depositphotos.com/1011643/1138/i/600/depositphotos_11389072-stock-photo-group-of-young-teachers.jpg",
				alt: "Banner Profesores"
			}}
		/>
	);
}
 
export default Courses;
