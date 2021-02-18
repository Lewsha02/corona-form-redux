import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import { createRenderer } from "fela";
import { RendererProvider } from "react-fela";

import { App } from "./App";

const renderer = createRenderer();

ReactDOM.render(
	<Provider store={store}>
		<RendererProvider renderer={renderer}>
			<App />
		</RendererProvider>
	</Provider>,
	document.getElementById("root")
);
