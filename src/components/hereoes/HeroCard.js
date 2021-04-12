import React from "react";
import { Link } from "react-router-dom";
import { heroImages } from "../../helpers/heroImages";

export const HeroCard = ({
	id,
	superhero,
	alter_ego,
	first_appearance,
	characters,
}) => {
	return (
		<div>
			<div className="card" style={{ maxWidth: 540 }}>
				<div className="row no-gutters">
					<div className="col">
						<img
							src={heroImages(`./${id}.jpg`).default}
							alt={superhero}
							className="card-img"
						/>
						<div className="col-md-8">
							<h2 className="card-tittle">{superhero}</h2>
							<p className="card-text">{alter_ego}</p>
							{alter_ego !== characters && <p>{characters}</p>}
							<p className="card-text">
								<small className="text-muted">
									{first_appearance}
								</small>
							</p>
							<Link to={`./hero/${id}`}>Más...</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
