import ReactDOM from "react-dom/client";
import { App } from "./App";
import { MoviesContextProvider } from "./context";
import { BrowserRouter } from "react-router-dom";
import "@styles/index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <MoviesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MoviesContextProvider>
);
