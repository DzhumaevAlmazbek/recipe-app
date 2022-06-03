import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Searched = () => {

	const [searched, setSearched] = useState([]);
	let params = useParams();

	useEffect(() => {
		getSearched(params.search);
	}, [params.search])

	const getSearched = async (name) => {
		const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
		const recipes = await data.json();
		setSearched(recipes.results);
	}

	return(
		<Grid>
			{searched.map((item) => {
				return(
					<Card key={item.id}>
						<Link to={'/recipe/' + item.id}>
							<img src={item.image} alt="" />
							<h4>{item.title}</h4>
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

export default Searched;