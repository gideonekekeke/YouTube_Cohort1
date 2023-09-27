import React, { useState } from "react";
import styled from "@emotion/styled";
import { abbreviateNumber } from "js-abbreviation-number";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

const Hold = styled.div``;
const CardHold = styled.div<{ bdd: string }>`
	/* background-color: white; */
	border: ${(props) => props.bdd};
	/* height: 200px; */
	width: 300px;
	border-radius: 10px;
	position: relative;
	/* background-color: white; */
`;
const Image = styled.img`
	height: 200px;
	background-color: white;
	margin-bottom: 20px;
	width: 100%;
	object-fit: cover;
`;

const UserHold = styled.div`
	display: flex;
`;
const User = styled.div`
	height: 50px;
	width: 50px;
	background-color: red;
	border-radius: 50%;
	margin-right: 10px;
`;
const UName = styled.div`
	width: 220px;
	height: 40px;
	overflow: hidden;
`;

const VideoLength = styled.div`
	position: absolute;
	/* top: 0; */
	bottom: 80px;
	right: 10px;
	background-color: rgba(0, 0, 0, 0.8);
	height: 30px;
	width: 70px;
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

interface Iprops {
	bdd: string;
	props: any;
}

const Card: React.FC<Iprops> = ({ bdd, props }) => {
	const [show, setShow] = useState(false);
	const [indexed, setIndexed] = useState("-547");

	console.log(indexed);
	return (
		<Hold>
			<CardHold
				onMouseOver={() => {
					setShow(true);
					setIndexed(props?.video?.videoId);
				}}
				onMouseLeave={() => {
					setShow(false);
				}}
				bdd={bdd}>
				{show && indexed === props?.video?.videoId ? (
					<ReactPlayer
						playing={true}
						width={300}
						height={200}
						style={{
							height: "150px",
							width: "100%",
						}}
						url={`https://www.youtube.com/watch?v=${props?.video?.videoId}`}
					/>
				) : (
					<Image className='img' src={props?.video?.thumbnails[0]?.url} />
				)}

				<VideoLength>{props?.video?.lengthText}</VideoLength>

				<UserHold>
					<User />
					<Link
						style={{ textDecoration: "none", color: "white" }}
						to={`/watch/${props?.video?.videoId}`}>
						<UName>{props?.video?.title}</UName>
					</Link>
					<div>
						{abbreviateNumber(
							Number(
								props?.video?.viewCountText
									?.split(" ")[0]
									?.split(",")
									?.join(""),
							),
						)}
					</div>
					<div></div>
				</UserHold>
			</CardHold>
		</Hold>
	);
};

export default Card;
