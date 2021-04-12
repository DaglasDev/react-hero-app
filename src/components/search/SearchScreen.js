import React, { useMemo } from "react";
import queryString from "query-string";
import { useLocation } from "react-router";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../hereoes/HeroCard";
import { getHeroesByName } from "../../selectors/getHeroesByName";

export const SearchScreen = ({ history }) => {
	const location = useLocation();
	const { q = "" } = useMemo(() => queryString.parse(location.search), [
		location.search,
	]);
	const [formValues, handleInputChange] = useForm({
		searchText: q,
	});
	const { searchText } = formValues;
	const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);
	const handleSearch = (e) => {
		e.preventDefault();
		history.push(`?q=${searchText}`);
	};
	return (
		<div>
			<h1>Search Screen</h1>
			<hr />
			<div className="row">
				<div className="col-5">
					<h4>Search Form</h4>
					<hr />
					<form onSubmit={handleSearch}>
						<input
							type="text"
							name="searchText"
							className="form-crontrol"
							placeholder="Find your hero"
							autoComplete="off"
							value={searchText}
							onChange={handleInputChange}
						/>
						<button className="btn m-1 w-100 btn-outline-primary">
							Search...
						</button>
					</form>
				</div>
				<div className="col-7">
					<h4>Results</h4>
					<hr />
					{q === "" && (
						<div className="alert alert-info">Search a hero</div>
					)}
					{q !== "" && heroesFiltered.length === 0 && (
						<div className="alert alert-danger">
							Theres no hero with '{q}'
						</div>
					)}
					{heroesFiltered.map((hero) => (
						<HeroCard key={hero.id} {...hero} />
					))}
				</div>
			</div>
		</div>
	);
};
