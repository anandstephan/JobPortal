import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppliedJob from "./components/AppliedJob.tsx";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/applied-job",
    Component: AppliedJob,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
