import React from 'react';
import ContactApp from './components/ContactApp';

import Navbar from './Layout/Navbar';

function App() {

  return (
    <React.Fragment>
      <Navbar /> 
      <ContactApp />
    </React.Fragment>
  );
}

export default App;
