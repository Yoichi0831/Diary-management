import GlobalStyle from './style';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Header from './common/header/index.js';
import store from './store'


function App() {
  return (
    <Provider store={store}> {/* provides data of store to inside components */}
        <Header/>
    </Provider>
  );
}

export default App;
