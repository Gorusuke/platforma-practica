import React, {useEffect} from 'react';

import {useSelector, useDispatch} from 'react-redux';
import {getCourse} from '../../Redux/Actions/courseAction'
import Banner from './Banner';

const Course = () => {

	const dispatch = useDispatch();
	const contentCourse = () => dispatch(getCourse())

	const courses = useSelector(state => state.course.course)

	useEffect(() => {
		contentCourse();
		// eslint-disable-next-line
	}, [])

	// console.info(courses)


	return (
		courses.map((course, i) => (
			<div key={i}>
				<Banner
					title={course.name}
					parragraph={course.information}
					color="dark-color"
					image={{
						src: "https://static9.depositphotos.com/1011643/1138/i/600/depositphotos_11389072-stock-photo-group-of-young-teachers.jpg",
						alt: course.name
					}}
					poster={course.picture}	
					home
					especialidades={course.data.specialities[0].name}
					info={course.subtitle}
				/>
				<main className="ed-grid lg-grid-10">
					<div className="lg-cols-7">
						<div className="s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white l-block s-shadow-bottom course-fectures ed-grid lg-grid-3 ">
							<div>
								<h3>¿Que Aprenderas?</h3>
								<ul dangerouslySetInnerHTML={{__html: course.you_learn}}/>
							</div>
							<div>
								<h3>Conocimientos Previos</h3>
								<ul dangerouslySetInnerHTML={{__html: course.requirements}}/>
							</div>
							<div>
								<h3>Nivel del curso</h3>
								<li>{course.level}</li>
							</div>
						</div>
						<h2>Temario del curso</h2>
						<div className="s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white l-block l-section s-shadow-bottom">
							{course.data.classes.map((clase, i) => (
								<div key={i} className="course-class l-section">
									<h3>{clase.class.title}</h3>
									<p>{clase.class.description}</p>
									<ul>
										{clase.subjects.map((subject, i) => (
											<li key={i}>{subject.subject.title}</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>

					<div className="lg-cols-3 ">
						<div className="s-border s-pt-4 lg-px-4 s-radius s-bg-white s-shadow-bottom">
							<h2 className="t3 " >Profesor</h2>
							<p>Jose Garcia</p>
						</div>
					</div>
				</main>

			</div>
		))
	);
}
 
export default Course;
