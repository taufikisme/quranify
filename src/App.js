import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";

const Home = React.lazy(() => import("./pages/home"));
const Surah = React.lazy(() => import("./pages/surah"));
const QuranPedia = React.lazy(() => import("./pages/quranpedia"));
const Tafsir = React.lazy(() => import("./pages/tafsir"));
const About = React.lazy(() => import("./pages/about"));
const Qaudio = React.lazy(() => import("./pages/qaudio"));
const Settings = React.lazy(() => import("./pages/settings"));

function App() {
  return (
    <React.Suspense fallback={<LoadingScreen />}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/loading" component={LoadingScreen} />
          <Route path="/surah/:id" component={Surah} />
          <Route exact path="/quranpedia" component={QuranPedia} />
          <Route path="/quranpedia/:id" component={Tafsir} />
          <Route exact path="/about" component={About} />
          <Route exact path="/qaudio" component={Qaudio} />
          <Route exact path="/settings" component={Settings} />
        </Switch>
      </Router>
    </React.Suspense>
  );
}

export default App;
