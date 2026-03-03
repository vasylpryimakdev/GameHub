import { Provider } from "./components/ui/provider";
import { Button } from "@chakra-ui/react";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <Button />
      <App />
    </Provider>
  </StrictMode>,
);
