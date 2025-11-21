import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { Toaster } from "react-hot-toast";
import { ProjectProvider } from "./context/ProjectContext.tsx";
import { ClientProvider } from "./context/ClientContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ProjectProvider>
        <ClientProvider>
          <App />
        </ClientProvider>
      </ProjectProvider>
      <Toaster position="bottom-right" />
    </BrowserRouter>
  </StrictMode>
);
