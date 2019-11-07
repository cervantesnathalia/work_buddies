import React from 'react';
import './App.css';
import Dashboard from './components/dashboard';
import SearchBar from './components/searchBar';
import Map from './components/map';
import MenuDrop from './components/dropMenu';



function App() {
  return (
    <div>
    <Dashboard/>
    <SearchBar/>
    <Map/>
    {/* <MenuDrop/> */}
    </div>
  );
}

export default App;
