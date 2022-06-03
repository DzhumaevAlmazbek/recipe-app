import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Category = () => {
  return (
	 <List>
		<SLink to={'/cuisine/Italian'}>
			<FaPizzaSlice />
			<h4>Italian</h4>
		</SLink>
		<SLink to={'/cuisine/American'}>
			<FaHamburger />
			<h4>American</h4>
		</SLink>
		<SLink to={'/cuisine/Thai'}>
			<GiNoodles />
			<h4>Thai</h4>
		</SLink>
		<SLink to={'/cuisine/Japanese'}>
			<GiChopsticks />
			<h4>Japanese</h4>
		</SLink>
	 </List>
  )
}

const List = styled.div`
	margin: 20px 0;
	display: flex;
	justify-content: center;
`;

const SLink = styled(NavLink)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	margin-right: 30px;
	text-decoration: none;
	background: linear-gradient(35deg, #494949, #313131);
	width: 70px;
	height: 70px;
	cursor: pointer;
	transform: scale(0.8);

	h4 {
		margin-top: 5px;
		color: #fff;
		font-size: 14px;
	}

	svg {
		color: #fff;
	}

	&.active {
		background: linear-gradient(to right, #f272a1, #f381a1)
	}
` 

export default Category;