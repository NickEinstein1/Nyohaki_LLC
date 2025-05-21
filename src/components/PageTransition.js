import React from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import '../pageTransition.css';

const PageTransition = ({ children, locationKey }) => (
  <SwitchTransition>
    <CSSTransition key={locationKey} classNames="fade" timeout={350}>
      <div className="page-transition">{children}</div>
    </CSSTransition>
  </SwitchTransition>
);

export default PageTransition;
