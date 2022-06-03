import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const Recipe = () => {

	const [details, setDetails] = useState({});
	const [activeTab, setActiveTab] = useState("instructions");
	let params = useParams();

	useEffect(() => {
		getDetails();
	}, [params.name])

	const getDetails = async () => {
		const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
		const detailsData = await data.json();
		setDetails(detailsData);
	}

	return(
		<DetailWrapper>
			<div>
				<h2>{details.title}</h2>
				<img src={details.image} alt="" />
			</div>
			<Info>
				<Button 
				onClick={() => setActiveTab("instructions")}
				className={activeTab === "instructions" ? 'active' : ''}>Instructions</Button>
				<Button 
				onClick={() => setActiveTab("ingredients")}
				className={activeTab === "ingredients" ? 'active' : ''}>Ingredients</Button>
				{activeTab === 'instructions' && (
					<div>
						<h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
						<h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
					</div>
				)}
				{activeTab === 'ingredients' && (
				<ul>
					{details.extendedIngredients.map((ingredient) => (
						<li key={ingredient.id}>{ingredient.original}</li>
					))}
				</ul>
				)}
			</Info>
		</DetailWrapper>
	)
}

const DetailWrapper = styled.div`
	margin: 80px;
	display: flex;

	h2{
		margin-bottom: 30px;
		color: #000;
	}

	ul{
		margin-top: 15px;
		margin-left: 30px;
	}

	li{
		font-size: 18px;
		line-height: 25px;
	}

	h3{
		margin-top: 15px;
	}

	&.active{
		background: linear-gradient(35deg, #393939, #313131);
		color: white;
	}
`

const Button = styled.button`
	padding: 15px 30px;
	margin-right: 10px;
	font-weight: 600;
	border: 1px solid #;
	border-radius: 5px;
	background: linear-gradient(35deg, #f272a1, #f381a1)
	color: #fff;

	&.active{
		background: linear-gradient(35deg, #393939, #313131);
		color: #fff;
	}
`

const Info = styled.div`
	margin-left: 30px;

	a{
		text-decoration: none;
		color: #f272a1;
		font-weight: 600;
	}
`

export default Recipe;