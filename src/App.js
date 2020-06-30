import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Content from "./index";
import ReactDOM from "react-dom";
import MedicalAdvice from "./MedicalAdvice";
import MedicalAdviceList from "./MedicalAdviceList";
import DrugIndex from "./DrugIndex";

function App() {
  return (
      <Router>
          <Route path="/index" component={ Content } />
          <Route path="/medicalAdvice" component={ MedicalAdvice } />
          <Route path="/medicalAdviceList" component={ MedicalAdviceList } />
          <Route path="/drugIndex" component={ DrugIndex } />
      </Router>
  );
}

export default App;


