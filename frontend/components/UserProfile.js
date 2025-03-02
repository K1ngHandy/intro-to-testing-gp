import React from 'react';
import profile from '../images/gabe.png';

// Helper function to format a full name
export const getFullName = (firstName, lastName) => {
	if (firstName && lastName) return `${firstName} ${lastName}`;
	else if (lastName || firstName) return lastName || firstName;
	else return 'Anonymous';
};

const UserProfile = ({ fname, lname, email, location }) => {
	const fullName = getFullName(fname, lname);

	return (
		<div data-testid="user-profile">
			<h2>{fullName}</h2>
			<img
				src={profile}
				alt="Profile picture"
			/>
			<button role="button">Follow</button>
			<ul>
				<li>
					Location: <span data-testid="location">{location}</span>
				</li>
				<li>
					Email: <a href={`mailto:${email}`}>{email}</a>
				</li>
			</ul>
			<label htmlFor="search">Search posts: </label>
			<input
				type="text"
				id="search"
				value="Search..."
				readOnly
			/>
		</div>
	);
};

export default UserProfile;
