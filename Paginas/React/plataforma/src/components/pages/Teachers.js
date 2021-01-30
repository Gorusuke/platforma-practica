import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Banner from './Banner';


import {getAllTeachers} from '../../Redux/Actions/teacherAction';

const Teachers = ({match}) => {

	const dispatch = useDispatch();
	const contentTeachers = () => dispatch(getAllTeachers())

	const teachers = useSelector(state => state.teacher.teachers)

	useEffect(() => {
		contentTeachers();
		// eslint-disable-next-line
	}, [match])


	const allTeachers = () => {
		return (
			<main className="ed-grid m-grid-3 lg-grid-4 row-gap s-mb-2">
				{teachers.map(teacher => (
					<article key={teacher.id}>
						<div className="s-px-4">
							<div className="img-container circle s-mb-2">
								<img src={teacher.picture} alt={teacher.name}/>
							</div>
						</div>
						<div className="s-center">
							<p className="t3 s-mb-1">{teacher.name}</p>
							<p className="s-mb-0">{teacher.country}</p>
						</div>
					</article>
				))}
			</main>
		)
	}
	

	return (
		<>
			<Banner
				title="Nuestros Profesores"
				parragraph="Este panel de docente esta altamente calificado para guiarte en tu educacion"
				color="third-color"
				image={{
					src: "https://static9.depositphotos.com/1011643/1138/i/600/depositphotos_11389072-stock-photo-group-of-young-teachers.jpg",
					alt: "Banner Profesores"
				}}
			/>
			{/* <main className="ed-grid m-grid-3 lg-grid-4">
					{teachers.map(teacher => (
						<article className="s-center">
							<div>
								<div className="img-container circle">
									<img src={teacher.picture} alt={teacher.name}/>
								</div>
							</div>
							<div>
								<p className="t3">{teacher.name}</p>
								<p>{teacher.country}</p>
							</div>
						</article>
				))}
			</main> */}

			<div>{allTeachers()}</div>
		
		</>
	);
}
 
export default Teachers;
