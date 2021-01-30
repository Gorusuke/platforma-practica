import React, {useEffect} from 'react';
import Banner from './Banner';
import {useSelector, useDispatch} from 'react-redux'; 


import {getAllPost} from '../../Redux/Actions/postAction'
import Publications from './Publications';


const Home = () => {

	const dispatch = useDispatch();
	const contentPost = () => dispatch(getAllPost())

	const posts = useSelector(state => state.post.posts)

	useEffect(() => {
		contentPost();
		// eslint-disable-next-line
	}, [])



	return (
		<>
		<Banner
			title="Bienvenidos a nuestra plataforma de educacion online"
			parragraph="Hemos desarrollado los mejores cursos para que seas un experto en la tecnologia. Comienza hoy mismo a aprender. El futuro esta en tus manos"
			color="dark-color"
			image={{
				src: "https://www.pngfind.com/pngs/m/627-6271384_bienvenidos-png-imagenes-de-bienvenidos-en-png-transparent.png",
				alt: "Banner Home"
			}}
			home
		/>
		<main className="ed-grid m-grid-2">
			<div className="l-block s-center">
				<h3 className="t1">Ultimas Publicaciones</h3>
				{posts 
					? posts.map(post => 
							<Publications
								key={post.id}
								title={post.title}
								fecha={post.fecha} 
								author={post.author} 
								content={post.content}
							/>				
						)
					: <p>No existen publicaciones en la base de datos</p>
				}		
			</div>
			<div>
				<h3>Lista de categorias</h3>
				<ul className="feature-list">
					<li><span>React.js</span></li>
					<li><span>Vue.js</span></li>
					<li><span>Angular</span></li>
					<li><span>Html</span></li>
					<li><span>Css</span></li>
					<li><span>Git</span></li>
					<li><span>Github</span></li>
				</ul>
			</div>
		</main>
		</>
	);
}
 
export default Home;
