import styled from "styled-components";
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from "react";

const Cuisine = () => {

	const [cuisine, setCuisine] = useState([]);
	let params = useParams();

	useEffect(() => {
		getCuisine(params.type);
	}, [params.type])

	const getCuisine = async (name) => {
		const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
		const recipes = await data.json();
		setCuisine(recipes.results);
	}

  return (
	 <Grid>
		{cuisine.map((item) => {
			return (
				<Card key={item.id}>
					<Link to={'/recipe/' + item.id}>
						<img src={item.image} alt="" />
						<p>{item.title}</p>
					</Link>
				</Card>
			)
		})}
	 </Grid>
  )
}

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(30px, 1fr));
	grid-gap: 10px;
`;

const Card = styled.div`
	img {
		width: 100%;
		border-radius: 15px;
	}

	a {
		text-decoration: none;
		color: #222;
	}

	h1 {
		text-align: center;
		padding: 5px;
	}
`;

export default Cuisine;