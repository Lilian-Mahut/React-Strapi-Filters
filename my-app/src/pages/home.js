import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import "./home.scss"

import searchComponent from '../components/searchComponent'
import eventComponent from '../components/eventComponent'

const Home = () => {

	useEffect(() => {
	})

	return (
		<div class="container">
			<searchComponent />
			<eventComponent />
		</div>
	);
};

export default Home
