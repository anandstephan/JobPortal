import "bootstrap/dist/css/bootstrap.min.css";
import JobList from "./components/JobList";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <JobList />
      </div>
    </Provider>
  );
}

export default App;
