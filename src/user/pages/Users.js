import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
	const USERS = [
		// {
		// 	id: "u1",
		// 	name: "Jared Brown",
		// 	image: "https://m.media-amazon.com/images/I/61klqNb05nL._AC_SX679_.jpg",
		// 	places: 3,
		// },
	];

	return <UsersList items={USERS} />;
};

export default Users;
