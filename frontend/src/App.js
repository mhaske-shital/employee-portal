import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Admin from "./pages/Admin";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import LogOut from "./pages/LogOut";
import RequestDetails from "./pages/RequestDetails";
import RequestView from "./pages/RequestView";
import StatusViewPending from "./pages/StatusViewPending";
import StatusViewGranted from "./pages/StatusViewGranted";
import AddEmployee from "./pages/AddEmployee";
import AllEmployee from "./pages/AllEmployee";
import Footer from "./components/Footer";
// import Laptop from '.laptop.jpg'

// axios.defaults.baseURL = "https://infi-sdp.herokuapp.com/";

function App() {
  return (
    <BrowserRouter>
    {/* <img src="./img/laptop.jpg" style={{height:"60px",width:"100%"}}></img> */}
      <Navbar />
      <Route path="/" exact component={Login} />
      <Route path="/login" exact component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/logout" component={LogOut} />
      <Route path="/admin" component={Admin} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/request-view" component={RequestView} />
      <Route path="/request-details" component={RequestDetails} />
      <Route path="/request-status-p/:id?" component={StatusViewPending} />
      <Route path="/request-status-g/:id?" component={StatusViewGranted} />
      <Route path="/add-employee" component={AddEmployee} />
      <Route path="/all-employee" component={AllEmployee} />
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
