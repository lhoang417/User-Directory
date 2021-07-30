import React, { useState } from "react";
import data from "./data";
import "./App.css";

function ProfileBox() {
	const [count, setCount] = useState(data);
	const [number, setNumber] = useState(0); //create a base variable to use to adjust the data array
	function incrementCount() {
		//function to increase base variable above
		setNumber(number + 1); //using destructured function to set the variable to increment by one
	}
	function decrementCount() {
		//function to decrease base variable above
		setNumber(number - 1); //destructured function to set variable to decrement by one
	}
	function deleteProfile(target) {
		const newState = [...count];

		newState.splice(target, 1);
		setCount(newState);
	}

	return (
		<div id="profile">
			<header>
				<h2 id="home">Home</h2>
			</header>
			<div id="profile-content">
				<div id="idDiv">
					{count[number].id}/{data.length}
				</div>
				<div id="nameDiv">
					{count[number].name.first} {count[number].name.last}
				</div>
				<div id="cityDiv">
					<h4>From:&nbsp; </h4>
					<br /> {count[number].city}, {count[number].country}
				</div>
				<div id="titleDiv">
					<h4>Job Title:&nbsp;</h4>
					<br /> {count[number].title}
				</div>
				<div id="employerDiv">
					<h4>Employer:&nbsp; </h4>
					<br /> {count[number].employer}
				</div>
				<h4 id="favH4">Favorite Movies:</h4>
				<div id="favoriteDiv">
					<ol id="movieList">
						{count[number].favoriteMovies.map((item, index) => (
							<li id="movieItem" key={index}>
								{item}
							</li>
						))}
					</ol>
				</div>
			</div>
			<div id="buttonDiv">
				<button
					id="back"
					onClick={() => decrementCount()}
					style={
						count[number].id === 1 ? { display: "none" } : { display: "inline" }
					} //using ternary to decide whether button should show up if viewing first item
				>
					{"<"} Previous
				</button>
				<button id="deleteBtn" onClick={() => deleteProfile(count[number].id)}>
					Delete
				</button>
				<button
					id="next"
					onClick={() => incrementCount()}
					style={
						count[number].id === data.length
							? { display: "none" }
							: { display: "inline" }
					} //using ternary to decide whether button should show up if viewing last item
				>
					Next {">"}
				</button>
			</div>
		</div>
	);
}

export default ProfileBox;
