import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { useForm } from "../../hooks/useForm";
import { types } from "../../types/types";

export const LoginScreen = ({ history }) => {
	const [formValues, handleInputChange] = useForm({
		name: "",
	});
	const { name } = formValues;
	const lastPath = localStorage.getItem("lastPath") || "/";
	const { dispatch } = useContext(AuthContext);
	const handlesubmit = () => {
		dispatch({ type: types.login, payload: { name } });
		history.replace(lastPath);
	};
	return (
		<div className="container mt-5">
			<h1>loginScreen</h1>
			<form onSubmit={handlesubmit}>
				<input
					className="form-control mb-2"
					type="text"
					autoComplete="off"
					placeholder="Name"
					required
					name="name"
					value={name}
					onChange={handleInputChange}
				/>
				<button className="btn btn-primary">Login</button>
			</form>
		</div>
	);
};
