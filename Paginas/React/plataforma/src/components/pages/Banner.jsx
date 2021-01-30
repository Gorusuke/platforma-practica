import React from 'react'
import { Link } from 'react-router-dom'


const Banner = ({title, parragraph, color, image, home}) => {
	return (
		<div className={`main-banner img-container l-block ${color}`}>
			<div className="ed-grid">
				<div>
					<img src={image.src} alt={image.alt} className="main-banner__img"/>
					{home
					? <div className="ed-grid m-grid-2">
						<div className="main-banner__data s-center">
							<h1 className="main-banner__title">{title}</h1>
							<p>{parragraph}</p>
							<Link to="/cursos" className="button ghost accent-color">
								Ver Cursos
							</Link>
						</div>
						<div className="img-container s-ratio-16-9">
							<img src="https://edteam-media.s3.amazonaws.com/blogs/original/05ebfada-ca24-4d09-94e2-8a77aa63ee13.jpg" alt="curso actual" />
						</div>
					</div>
					: <div className="main-banner__data s-center">
							<h1 className="main-banner__title">{title}</h1>
							<p>{parragraph}</p>
						</div>
					}
				</div>
			</div>
		</div>
	);
}
 
export default Banner;
