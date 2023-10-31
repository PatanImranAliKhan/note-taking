import Notes from "./components/Notes";
import { Provider } from "react-redux";
import { store } from "./pages/redux/store";

function App() {
  return (
    <Provider store={store}>
      <Notes />
    </Provider>
  );
}

export default App;
