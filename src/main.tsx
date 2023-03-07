import ReactDOM from "react-dom/client";
import { App } from "./App";
import { MoviesContextProvider } from './context';
import "@styles/index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <MoviesContextProvider>
    <App />
  </MoviesContextProvider>
);
