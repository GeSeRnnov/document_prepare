import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';
import Toolbar  from './components/Toolbar';
import Content from './components/Content';
import MainPage from './Pages/MainPage';
import PricesPage from './Pages/Prices.js';
import СontactsPage from './Pages/Contacts';
import CopywritingPage from './Pages/Copywriting';
import TextPreperingPage from './Pages/TextPreparing';
import OfficeMacroPage from './Pages/OfficeMacro';
import SiteDevelopingPage from './Pages/SiteDeveloping';

// npm install react-filepond filepond --save
// npm i --save-dev @babel/plugin-proposal-class-properties  error: support for the experimental syntax 'classproperties' isn't currently enabled
// https://ospanel.io/forum/viewtopic.php?f=6&t=3397  //Prerender react with V8js-php
// npm i --save-dev @babel/plugin-proposal-class-properties  error: support for the experimental syntax 'classproperties' isn't currently enabled
// npm install --save react-helmet
// npm i --save react-router-sitemap
// https://www.netlify.com/blog/2017/09/26/how-to-build-a-serverless-seo-friendly-react-blog/

class App extends Component {
  render() {
    return (
      <div className="app">
        <Toolbar />
        
        <Content>
          <Switch>          
            <Route exact path="/" component={MainPage} />
            <Route path="/text-preparing" component={TextPreperingPage} />
            <Route path="/copywriting" component={CopywritingPage} />
            <Route path="/office-macro" component={OfficeMacroPage} />
            <Route path="/site-developing" component={SiteDevelopingPage} />
            <Route path="/prices" component={PricesPage} />
            <Route path="/contacts" component={СontactsPage} />
          </Switch>          
        </Content>
      </div>
    );
  }
}

export default App;
