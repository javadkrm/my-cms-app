import './App.css';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import SideBar from './components/sidebar/SideBar';
import TopBar from './components/topbar/TopBar';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  let router = useRoutes(routes)

  return (
    <div className="app-container">
      <SideBar />
      <div className="main-content">
        <TopBar />
        <div className="page-content">
          {router}
        </div>
      </div>
    </div>
  );
}

export default App;
