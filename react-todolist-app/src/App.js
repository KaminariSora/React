import React from 'react'
import './App.css';
import PageTitle from './components/PageTitle';
import AppHeader from './components/AppHeader';
import AppContent from './components/AppContent';

function App() {
  return (
    <div className="App">
      <PageTitle></PageTitle>
      <AppHeader></AppHeader>
      <AppContent></AppContent>
    </div>
  );
}

export default App;
