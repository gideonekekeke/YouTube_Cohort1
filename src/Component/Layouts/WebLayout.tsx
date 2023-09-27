import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import Sidebar from "../Blocks/Sidebar";
import NavBar from "../Blocks/NavBar";
import { GlobalContext } from "../../services/GlobalContext";

const LayoutContainer = styled.div<{ ml: string }>`
	margin-top: 70px;
	margin-left: ${(props) => props.ml};
`;

const OutletContainer = styled.div`
	padding: 20px;
`;

const WebLayout: React.FC = () => {
	const { toggle } = useContext(GlobalContext);

	return (
		<LayoutContainer ml={toggle ? "100px" : "200px"}>
			<Sidebar />
			<NavBar />
			<OutletContainer>
				<Outlet />
			</OutletContainer>
		</LayoutContainer>
	);
};

export default WebLayout;
