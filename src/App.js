import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";
import Login from "./pages/Forme/Login";
import Signin from "./pages/Forme/Signin";
import UserHome from "./pages/LoggedUser/UserHome";
import Diagno from "./pages/LoggedUser/Diagno";
import Forgot from "./pages/Forme/Forgot";
import Reset from "./pages/Forme/Reset";

AOS.init({ duration: 1000 });

function NavigationNavbar() {
  const location = useLocation();
  const isNavbarVisible = ![
    "/user/home",
    "/user/diagnostic",
    "/signin",
    "/forgotPassword",
    "/login",
    "/resetPassword",
    "*",
  ].includes(location.pathname);

  return isNavbarVisible ? <Navbar /> : null;
}
function NavigationFooter() {
  const location = useLocation();

  const isFooterVisible = ![
    "/user/home",
    "/user/diagnostic",
    "/signin",
    "/forgotPassword",
    "/login",
    "/resetPassword",
    "*",
  ].includes(location.pathname);
  return isFooterVisible ? <Footer /> : null;
}
function App() {
  return (
    <BrowserRouter>
      <NavigationNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<Forgot />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/resetPassword" element={<Reset />} />

        <Route path="user">
          <Route path="home" element={<UserHome />} />
          <Route path="diagnostic" element={<Diagno />} />
        </Route>
      </Routes>

      <NavigationFooter />
      {<div id="preloader"></div>}
    </BrowserRouter>
  );
}

export default App;
