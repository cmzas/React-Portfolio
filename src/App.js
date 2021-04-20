import Header from "../src/components/Layout/Header";
import Footer from "./components/Layout/Footer";
import { Route, Switch } from 'react-router-dom';
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Project from "./Pages/Project";
import Resume from "./Pages/Resume";
import Talk from "./Pages/Talk";
import Contact from "./Pages/Contact";


const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/project" component={Project} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/talk" component={Talk} />
       
      </Switch>
      <Footer />

    </>
  )
}

export default App;