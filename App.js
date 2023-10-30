import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import './App.css';
import './Navbar.css';
import './Sidebar.css';
import './MainContent.css';

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Raleway:wght@800&display=swap');
</style>

function App() {
    // Switch between Login and VendorDirectory for demonstration
    return (
        <div className="App">
          <Navbar/>
          
          <div className="sidebar">
            <Sidebar/>
          </div>
          <div className="maincontent">
              <MainContent />
          </div>
        </div>
    );
}

export default App;
