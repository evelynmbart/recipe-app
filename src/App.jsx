import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Category } from "./components/Category";
import { Pages } from "./pages/Pages";
import { Search } from "./pages/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}
export default App;
