import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
// import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";

// import BlogsList from './components/BlogsList';
// import BlogItemDetails from './components/BlogItemDetails';
// import NotFound from './components/NotFound';

import { lazy, Suspense } from "react";
import "./App.css";

const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));

const App = () => (
  <Suspense fallback={<h1>Loading...</h1>}>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* <Route exact path="/" component={BlogsList} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/blogs/:id" component={BlogItemDetails} />
      <Route component={NotFound} /> */}
      </Routes>
    </BrowserRouter>
  </Suspense>
);

export default App;
