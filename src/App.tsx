import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import RRotas from './Routes/RRotas';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <RRotas/>
      </BrowserRouter>
    </>
  );
};

export default App;