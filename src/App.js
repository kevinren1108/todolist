import React, { PureComponent } from 'react';
import { Provider } from 'react-redux'
import { Route, Routes} from 'react-router-dom';
import GlobalStyles from './globalStyle.js';

import store from './store/index.js';
import Home from './home/index.js';


class App extends PureComponent {
  render() { 
    return ( 
      <Provider store={store}>
        <GlobalStyles/>
        <Routes>
          <Route path='/' exact element={<Home />}></Route>
        </Routes>
      </Provider>
    );
  }
};
 
export default App;