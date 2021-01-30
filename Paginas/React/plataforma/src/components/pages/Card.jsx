import React from 'react';
import {Link} from 'react-router-dom'


const Card = ({name, picture, id, ruta}) => {
	return (
		<article className="card s-border">
			<div className="img-container s-ratio-16-9 s-mb-2">
				<Link to={`/${ruta}/${id}`}>
					<img src={picture} alt={name}/>
				</Link>
			</div>
			
			<div className="card__data s-center">
				<h3 className="t4">{name}</h3>
			</div>
		</article>
	);
}
 
export default Card;
