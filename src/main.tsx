import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { Toaster } from "react-hot-toast";
import { ProjectProvider } from "./context/ProjectContext.tsx";
import { ClientProvider } from "./context/ClientContext.tsx";
import { createBrowserRouter } from "react-router";
import Landing from "./pages/Landing.tsx";
import Projects from "./pages/Projects.tsx";
import Clients from "./pages/Clients.tsx";
import AppLayout from "./App.tsx";
import NotFound from "./pages/NotFound.tsx";
import Dashboard from "./pages/Dashboard/Dashboard.tsx";
import Signin from "./pages/Auth/Signin.tsx";
import Signup from "./pages/Auth/Signup.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />, // GLOBAL 404
    children: [
      {
        path: "",
        element: <Landing />,
      },
      {
        path: "login",
        element: <Signin />,
      },
      {
        path: "register",
        element: <Signup />,
      },
      {
        path: "app",
        element: <AppLayout />,
        children: [
          { path: "projects", element: <Projects /> },
          { path: "dashboard", element: <Dashboard /> },
          { path: "clients", element: <Clients /> },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
    <ProjectProvider>
      <ClientProvider>
        <RouterProvider router={router} />
      </ClientProvider>
      <Toaster position="bottom-right" />
    </ProjectProvider>
);
