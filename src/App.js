import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routers.js/Router';

function App() {
  return (
    <div className='App ff-open'>
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
