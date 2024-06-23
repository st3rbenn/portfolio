import React from "react"
import ReactDOM from "react-dom/client"
import "./index.scss"
import App from "./App"
// import "@mantine/core/styles.css"
import { MantineProvider } from "@mantine/core"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
	<React.StrictMode>
		<MantineProvider>
			<App />
		</MantineProvider>
	</React.StrictMode>
)
