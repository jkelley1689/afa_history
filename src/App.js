import Home from "./Screens/Home/Home";
//import Navbar from "./Components/Nav/Navbar";
import Navbar2 from "./Components/Nav/Navbar2";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Amplify } from 'aws-amplify';
import config from './amplifyconfiguration.json';
import UploadStatSheet from "./Screens/Upload/UploadStatSheet";
import Teams from "./Screens/Teams/Teams";
import TeamCard from "./Screens/TeamCard/TeamCard";
import Seasons from "./Screens/Seasons/Seasons";
import SeasonCard from "./Screens/SeasonCard/SeasonCard";
import Stats from "./Screens/Stats/Stats";
import 'bootstrap/dist/css/bootstrap.min.css';
import AllTimeLeaders from "./Screens/AllTimeLeaders/AllTimeLeaders";
Amplify.configure(config);

function App() {
  return (
    <Router>
      <div>
        <Navbar2 />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/uploadStats" Component={UploadStatSheet} />
          <Route path="/Teams" Component={Teams} />
          <Route path="/Teams/:team" Component={TeamCard} />
          <Route path="/Seasons" Component={Seasons} />
          <Route path="/Seasons/:year" Component={SeasonCard} />
          <Route path="/Seasons/:year/:statType" Component={Stats} />
          <Route path="/All-Time-Leaders/:statType" Component={AllTimeLeaders} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
