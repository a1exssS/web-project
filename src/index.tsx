import { render } from "react-dom";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import 'app/styles/index.scss';
import { StoreProvider } from "app/providers/storeProvider/ui/StoreProvider";
import { ErrorBoundary } from "app/providers/ErrorBoundary";

render(
   <BrowserRouter>
      <ErrorBoundary>
         <StoreProvider>
            <App />
         </StoreProvider>
      </ErrorBoundary>
   </BrowserRouter>,
   document.getElementById('root')
)
