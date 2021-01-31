import React from 'react'
import { Link } from 'react-router-dom'


const Banner = ({title, parragraph, color, image, home, poster, boton, especialidades, info}) => {
	return (
		<div className={`main-banner img-container l-block ${color}`}>
			<div className="ed-grid">
				<div>
					<img src={image.src} alt={image.alt} className="main-banner__img"/>
					{home
					? <div className="ed-grid m-grid-2">
							<div className="main-banner__data s-center">
								<h1 className="main-banner__title">{title}</h1>
								{info && <p className="t6 s-opacity-6 s-mt-3">{info}</p>}
								<p>{parragraph}</p>
								{especialidades && <p>Este curso hace parte de la especialidad <Link to="/especialidades">{especialidades}</Link></p>}
								{boton &&
									<Link to="/cursos" className="button ghost accent-color">
										Ver Cursos
									</Link>
								}								
							</div>
							<div className="img-container s-ratio-16-9">
								<img src={poster} alt="curso actual" />
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
