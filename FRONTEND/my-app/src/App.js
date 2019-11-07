import React from 'react';
import './App.css';
import Dashboard from './components/dashboard';
import SearchBar from './components/searchBar';
import Map from './components/map';




function App() {
  return (
    <div>
    <Dashboard/>
    <SearchBar/>
    <Map/>
    </div>
  );
}

export default App;
