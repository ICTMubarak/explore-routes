import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Header from './components/Header/Header';
import Products from './components/Products/Products';




function App() {
 const router = createBrowserRouter([
  {path: '/', element: <Home></Home>},
  {path: '/home', element: <Home></Home>},
  {path: '/about', element: <About></About>},
  {path: '/products', element: <Products></Products>},
 ])

  return (
   
    <div className="App">
    
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
