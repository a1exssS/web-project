import { render } from "react-dom";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import 'app/styles/index.scss';

render(
   <BrowserRouter>
      <App />
   </BrowserRouter>,
   document.getElementById('root')
)
