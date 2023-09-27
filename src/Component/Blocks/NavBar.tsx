import styled from "@emotion/styled";
import React, { useContext } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BiMicrophone } from "react-icons/bi";
import { GlobalContext } from "../../services/GlobalContext";

const Container = styled.div`
	height: 70px;
	width: 100%;
	position: fixed;
	top: 0%;
	bottom: 0;
	left: 0;
	z-index: 10;
	right: 0;
	background-color: #1f1f1f;
`;
const NavHold = styled.div`
	display: flex;
	/* gap:15px; */
	margin-left: 20px;
`;
const Holder = styled.div`
	display: flex;
	gap: 5px;
	margin-left: 20px;
`;
const Icon = styled.div`
	margin-top: 20px;
	font-size: 30px;
`;
const LogoHold = styled.div`
	font-size: 40px;
	color: red;
	margin-top: 20px;
`;
const Text = styled.div`
	margin-top: 20px;
	font-size: 25px;
	font-weight: bold;
	color: white;
`;
const InputHold = styled.div`
	display: flex;
	margin-top: 20px;
	position: relative;
	left: 200px;
`;
const Input = styled.input`
	width: 700px;
	height: 30px;
	background-color: #1f1f1f;
	border-radius: 40px;
	padding: 10px;
	border: 1px solid gray;
	color: white;
`;
const SearchHold = styled.div`
	position: absolute;
	right: 40px;
	top: 10px;
	font-size: 25px;
`;
const MicHold = styled.div`
	background-color: #3d3d3d;
	border-radius: 50px;
	margin-left: 220px;
	padding: 10px;
	margin-top: 20px;
`;
const Speaker = styled.div`
	font-size: 25px;
`;

const NavBar: React.FC = () => {
	const { ToggleSideBar } = useContext(GlobalContext);

	return (
		<Container>
			<NavHold>
				<Icon onClick={ToggleSideBar}> {<AiOutlineMenu />}</Icon>
				<Holder>
					<LogoHold>{<BsYoutube />}</LogoHold>
					<Text>YOUTUBE </Text>
				</Holder>

				<InputHold>
					<Input placeholder='search' />
					<SearchHold>{<BsSearch />}</SearchHold>
				</InputHold>
				<MicHold>
					<Speaker>{<BiMicrophone />}</Speaker>
				</MicHold>
			</NavHold>
		</Container>
	);
};

export default NavBar;
