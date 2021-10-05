import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Route, Switch, useLocation } from "react-router-dom";
import Page from "./Page";
import "./Transition.css";
import Homepic from "../asset/image/homepic.jpg";
import Researchpic from "../asset/image/Researchpic.jpg";
import Memberpic from "../asset/image/memberpic.jpg";
import Paperpic from "../asset/image/paperpic.jpg";
import Timelinepic from "../asset/image/timeline.jpg";

const Transition = () => {
  const Home = <Page image={Homepic} />;
  const Research = <Page image={Researchpic} />;
  const Members = <Page image={Memberpic} />;
  const Papers = <Page image={Paperpic} />;
  const TimeLine = <Page image={Timelinepic} />;
  

  const location = useLocation();

  return (
    <TransitionGroup className="transition-group">
      <CSSTransition key={location.pathname} classNames="fade" timeout={500}>
        <Switch location={location}>
          <Route exact path="/" children={Home} />
          <Route path="/research" children={Research} />
          <Route path="/member" children={Members} />
          <Route path="/paper" children={Papers} />
          <Route path="/timeline" children={TimeLine} />
          <Route path="/timeline-board" children={TimeLine} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Transition;