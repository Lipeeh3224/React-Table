import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import PrincipalPage from './pages/PricipalPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NavbarComponent from './components/NavBarComponent';
import FirstExercise from './exercises/FirstExercise';
import SecondExercise from './exercises/SecondExercise';
import ThirdExercise from './exercises/ThirdExercise';
import FifithExercise from './exercises/FifithExercise';
import FourthExercise from './exercises/FourthExercise';
import SixthExercise from './exercises/SixthExercise';

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrincipalPage/>,
  },
  {
    path: "/Exercício 1",
    element: <FirstExercise/>,
  },
  {
    path: "/Exercício 2",
    element: <SecondExercise/>,
  },
  {
    path: "/Exercício 3",
    element: <ThirdExercise/>,
  },
  {
    path: "/Exercício 4",
    element: <FourthExercise/>,
  },
  {
    path: "/Exercício 5",
    element: <FifithExercise/>,
  },
  {
    path: "/Exercício 6",
    element: <SixthExercise/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavbarComponent/>
   <RouterProvider router={router} /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
