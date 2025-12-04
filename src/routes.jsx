import { Navigate, Route, Routes } from "react-router-dom";

import { Principal } from "../src/paginas/App";
import { isAuthenticated } from "./utils/is-authenticated";

// eslint-disable-next-line react/prop-types
export function PrivateRoute({ children }) {
	if (!isAuthenticated()) {
		return <Navigate to="/" replace />;
	}
	return children;
}

export function App() {
	return (
		<Routes>
			<Route path="/" element={<Principal />} />
			<Route path="*" element={<Navigate to="/" replace />} />
		</Routes>
	);
}
