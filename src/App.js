import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { useState, useEffect } from 'react';
import { Routes, Route, useParams} from 'react-router-dom';
import Upload from './Pages/Upload';
import NotFound from './components/NotFound/NotFound';
import axios from 'axios';



function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/video/:videoID' element={<Main/>}></Route>
        <Route path='/upload' element={<Upload/>}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </div>
    );
  }

export default App;