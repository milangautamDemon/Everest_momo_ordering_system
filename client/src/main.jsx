import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ErrorBoundary from "./error/ErrorBoundary.jsx";
import MenuProvider from "./providers/MenuProvider.jsx";
import FormProvider from "./providers/FormProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <MenuProvider>
        <FormProvider>
          <App />
        </FormProvider>
      </MenuProvider>
    </ErrorBoundary>
  </React.StrictMode>,
);
