import Pages from "./pages/pages";
import Category from "./components/category";
import { BrowserRouter } from 'react-router-dom';
import Search from "./components/search";
import styled from "styled-components";
import { GiKnifeFork } from 'react-icons/gi';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
		<BrowserRouter>
		<Nav>
			<GiKnifeFork />
			<Logo to={'/'}>Delicious</Logo>
		</Nav>
			<Search />
			<Category />
			<Pages />
		</BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
	font-size: 16px;
	font-weight: 400;
	text-decoration: none;
	color: #111;
`;

const Nav = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin: 0 630px;
	padding: 35px 0;

	svg{
		font-size: 14px;
	}
`

export default App;
