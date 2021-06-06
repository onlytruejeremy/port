import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Nav/NavBar";
import { GlobalStyles } from "./globalStyles";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import "./styles.css";

export default function App() {
  const theme = {
    dark: "#0E050F",
    dBlue: "#170B3B",
    purple: "#341948",
    pHaze: "#9388A2",
    light: "floralWhite"
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/projects" component={Projects} exact />
          <Route path="/contact" component={Contact} exact />
        </Switch>
        <Footer />
      </ThemeProvider>
    </>
  );
}
