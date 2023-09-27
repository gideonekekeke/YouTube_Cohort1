import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom"
import Index from './Routes/AllRoutes.tsx'
import GlobalStyle from './assets/GlobalStyle.tsx'
import { GlobalProvider } from './services/GlobalContext.tsx'

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<GlobalProvider>
			<GlobalStyle />
			<RouterProvider router={Index} />
		</GlobalProvider>
	</React.StrictMode>,
);
