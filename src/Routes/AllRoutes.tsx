import { createBrowserRouter } from "react-router-dom";
import WebLayout from "../Component/Layouts/WebLayout";
import HomeScreen from "../Pages/HomeScreen";
import Shorts from "../Pages/Shorts";
import Subscription from "../Pages/Subscription";
import Library from "../Pages/Library";
import HistoryCard from "../Pages/HistoryCard";
import Watch from "../Pages/Watch";
import LikedVideos from "../Pages/LikedVideos";
import Trending from "../Pages/Trending";
import DetailedVideo from "../Pages/DetailedVideo";

const Index = createBrowserRouter([
	{
		path: "/",
		element: <WebLayout />,
		children: [
			{
				index: true,
				element: <HomeScreen />,
			},

			{
				path: "shorts",
				element: <Shorts />,
			},

			{
				path: "watch/:id",
				element: <DetailedVideo />,
			},

			{
				path: "subscription",
				element: <Subscription />,
			},

			{
				path: "library",
				element: <Library />,
			},
			{
				path: "history",
				element: <HistoryCard />,
			},
			{
				path: "watch",
				element: <Watch />,
			},

			{
				path: "likedvideos",
				element: <LikedVideos />,
			},

			{
				path: "trending",
				element: <Trending />,
			},
		],
	},
]);

export default Index;
