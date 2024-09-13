import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';
import store from './store';

function App() {
  return (
    <Provider store={store}> {/* provides data of store to inside components */}
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/detail/:id' element={<Detail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
