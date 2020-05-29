import React, {useEffect, Fragment} from 'react';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';

import { Provider } from 'react-redux';
import store from './store';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import './App.css';

const App = () => {
  useEffect(() => {
    //Init materialize Js
    M.AutoInit();
  })
  return (
    <Provider store={store}> 
      <Fragment className="App">
          <div className="container">
            <AddBtn />
            <AddLogModal />
            <EditLogModal />
            <Logs />
          </div>
      </Fragment>
    </Provider>
  );
}

export default App;
