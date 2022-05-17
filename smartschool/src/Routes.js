import React from 'react'
import {
  BrowserRouter as Router,
  Routes as RoutGroup,
  Route,
  Navigate
} from 'react-router-dom'
import LayoutMain from './layouts/LayoutMain'
import LayoutNotFound from './layouts/LayoutNotFound'

import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'

const pathname = window.location.pathname
// <Navigate from="/:url*(/+)" to={pathname.slice(0, -1)} />
const Routes = () => (
    <Router>
      <RoutGroup>
        <Route path="/page2" element= {<LayoutMain><Page2 /></LayoutMain>} />
        <Route path="/page3" element= {<LayoutMain><Page3 /></LayoutMain>} />
        <Route path="/" element= {<LayoutMain><Home /></LayoutMain>} />
        <Route path="*" element= {<LayoutNotFound><NotFound /></LayoutNotFound>} />
      </RoutGroup>
    </Router>
);

export default Routes;
