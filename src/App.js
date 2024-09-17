import React, { Component } from 'react';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';
import Economy from './pages/economy';
import store from './store';

function App() {
  return (
    <Provider store={store}> {/* provides data of store to inside components */}
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/login' element={<Login />}/>
            <Route path='/' element={<Economy />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
