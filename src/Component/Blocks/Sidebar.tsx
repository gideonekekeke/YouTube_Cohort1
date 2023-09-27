import React, { useContext } from "react";
import styled from "@emotion/styled";
import NavReuse from "../Commons/NavReuse";
import { AiFillHome } from "react-icons/ai";
import { SiShortcut } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { GoHistory } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { FiTrendingUp } from "react-icons/fi";
import { PiMusicNoteLight } from "react-icons/pi";
import { SiYoutubegaming } from "react-icons/si";
import { ImNewspaper } from "react-icons/im";
import { GoTrophy } from "react-icons/go";
import { AiFillYoutube } from "react-icons/ai";
import { SiYoutubemusic } from "react-icons/si";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { AiOutlineSetting } from "react-icons/ai";
import { BsFlag } from "react-icons/bs";
import { FiHelpCircle } from "react-icons/fi";
import { RiFeedbackLine } from "react-icons/ri";
import { GlobalContext } from "../../services/GlobalContext";

const Container = styled.div`
	width: 200px;
	position: fixed;
	top: 100px;
	left: 0;
	bottom: 0;
	background-color: black;
	color: white;
	overflow-y: scroll;
`;
const Wrapper = styled.div``;
const Line = styled.div`
	color: gray;
`;

const H1 = styled.h3`
	margin-left: 20px;
`;
const P = styled.p``;

const SmallContainer = styled.div`
	width: 100px;
	position: fixed;
	top: 100px;
	left: 0;
	bottom: 0;
	background-color: black;
	color: white;
	overflow-y: scroll;
`;
const Sidebar: React.FC = () => {
	const { toggle } = useContext(GlobalContext);
	return (
		<>
			{toggle ? (
				<SmallContainer></SmallContainer>
			) : (
				<Container>
					<Wrapper>
						<NavReuse text='Home' icon={<AiFillHome />} linkto='/' />
						<NavReuse text='Shorts' icon={<SiShortcut />} linkto='/shorts' />
						<NavReuse
							text='Subscription'
							icon={<MdOutlineSubscriptions />}
							linkto='/subscription'
						/>
						<Line>________________________</Line>
						<NavReuse
							text='Library'
							icon={<MdOutlineVideoLibrary />}
							linkto='/library'
						/>
						<NavReuse text='History' icon={<GoHistory />} linkto='/history' />
						<NavReuse
							text='Watch Later'
							icon={<MdOutlineWatchLater />}
							linkto='/watch'
						/>
						<NavReuse
							text='Liked Videos'
							icon={<BiLike />}
							linkto='/likedvideos'
						/>
						<Line>________________________</Line>
						<H1>Explore</H1>
						<NavReuse
							text='Trending'
							icon={<FiTrendingUp />}
							linkto='/trending'
						/>
						<NavReuse text='Music' icon={<PiMusicNoteLight />} linkto='' />
						<NavReuse text='Gaming' icon={<SiYoutubegaming />} linkto='' />
						<NavReuse text='News' icon={<ImNewspaper />} linkto='' />
						<NavReuse text='Sports' icon={<GoTrophy />} linkto='' />
						<Line>________________________</Line>
						<H1>More from YouTube</H1>
						<NavReuse
							text='YouTube Premium'
							icon={<AiFillYoutube />}
							linkto=''
						/>
						<NavReuse
							text='YouTube Music'
							icon={<SiYoutubemusic />}
							linkto=''
						/>
						<NavReuse
							text='YouTube Kids'
							icon={<TbBrandYoutubeKids />}
							linkto=''
						/>
						<Line>________________________</Line>
						<NavReuse text='Settings' icon={<AiOutlineSetting />} linkto='' />
						<NavReuse text='Report history' icon={<BsFlag />} linkto='' />
						<NavReuse text='Help' icon={<FiHelpCircle />} linkto='' />
						<NavReuse
							text='Send feedback'
							icon={<RiFeedbackLine />}
							linkto=''
						/>
						<Line>________________________</Line>
						<P>
							About press copyright
							<br /> contact us Creator Advertise
							<br />
							Developers
							<br />
							<br />
							<br />
							Terms Privacy Policy & Safety
							<br />
							How Youtube works
							<br />
							Test New Features
						</P>
					</Wrapper>
				</Container>
			)}
		</>
	);
};

export default Sidebar;
