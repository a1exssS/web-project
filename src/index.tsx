import { render } from "react-dom";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import 'app/styles/index.scss';
import { StoreProvider } from "app/providers/storeProvider/ui/StoreProvider";


render(
   <BrowserRouter>
      <StoreProvider>
         <App />
      </StoreProvider>
   </BrowserRouter>,
   document.getElementById('root')
)
