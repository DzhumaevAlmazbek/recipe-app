import { useEffect, useState } from "react";
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from "react-router-dom";
import '@splidejs/splide/dist/css/splide.min.css';

const Popular = () => {

	const [popular, setPopular] = useState([]);

	useEffect(() => {
		getPopular();
	}, [])

	const getPopular = async () => {

		const check = localStorage.getItem('popular');

		if (check !== null) {
			setPopular(JSON.parse(check));
		} else {
			const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
			const data = await api.json();
			
			localStorage.setItem('popular', JSON.stringify(data.recipes));
			setPopular(data.recipes);
		}
	}

	

	return (
		<Wrapper>
			<h1>Popular</h1>
			<Splide options={{
				perPage: 4,
				arrows: false,
				pagination: false,
				drag: 'free',
				gap: '10px',
			}}>
				{popular.map((recipe) => {
					return (
						<SplideSlide key={recipe.id}>
							<Card>
								<Link to={'/recipe/' + recipe.id}>
									<p>{recipe.title}</p>
									<img src={recipe.image} alt={recipe.title} />
									<Gradient />
								</Link>
							</Card>
						</SplideSlide>
					);
				})}
			</Splide>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	margin: 30px 0;
`

const Card = styled.div`
	min-height: 25rem;
	border-radius: 10px;
	overflow: hidden;
	position: relative;

	img{
		border-radius: 15px;
		position: absolute;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	p{
		position: absolute;
		left: 50%;
		bottom: 0%;
		z-index: 10;
		transform: translate(-50%, 0%);
		width: 100%;
		color: #fff;
		text-align: center;
		font-weight: 600;
		font-size: 14px;
		height: 40%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`

const Gradient = styled.div`
	background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
	z-index: 3;
	position: absolute;
	width: 100%;
	height: 100%;
`

export default Popular;
