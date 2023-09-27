import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Buttons from "../Component/Commons/Buttons";
import Card from "../Component/Commons/Card";
import { SearchYoutubeVideo } from "../Utils/ApiCalls";

const Container = styled.div`
	margin-left: 30px;
	overflow-x: hidden;
`;
const Hold = styled.div`
	width: 100%;
	display: flex;
	gap: 20px;
	padding: 30px;
`;
const Holder = styled.div`
	padding: 30px;
	display: flex;
	flex-wrap: wrap;
	gap: 30px;
`;
const Box = styled.div`
	background-color: red;
	height: 50px;
	width: 50px;
	margin-top: 20px;
	border-radius: 50px;
`;

const HomeScreen: React.FC = () => {
	const [SearchData, setSearchData] = useState([]);
	const FetchSearchData = async () => {
		await SearchYoutubeVideo().then((res) => {
			console.log(res.contents);
			setSearchData(res?.contents);
		});
	};

	useEffect(() => {
		FetchSearchData();
	}, []);

	return (
		<Container>
			<Hold>
				<Buttons text='All' />
				<Buttons text='Music' />
				<Buttons text='Gaming' />
				<Buttons text='Sketch Comedy' />
				<Buttons text='Trailers' />
				<Buttons text='History' />
				<Buttons text='Jenifa' />
				<Buttons text='Podcasts' />
			</Hold>

			<Holder>
				{SearchData?.map((props) => (
					<Card props={props} bdd='' />
				))}
			</Holder>

			<h1>homepage</h1>
		</Container>
	);
};

export default HomeScreen;
