import "./app.css";
import Gallery from "./components/gallery/gallery";
import LeftBar from "./components/leftBar/leftBar";
import TopBar from "./components/topBar/topBar";

const App = () => {
  return (
    <div className="app">
      <LeftBar></LeftBar>

      <div className="content">
        <TopBar></TopBar>
        <Gallery></Gallery>
      </div>
    </div>
  );
};

export default App;
