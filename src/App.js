


import { MenuItem, Select } from '@material-ui/core';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import SearchIcon from '@material-ui/icons/Search';
import Country from './Country';
import Countries from './Counties';
import CountryDetail from './CountryDetail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useContext } from 'react';
import { DarkContect } from './DarkContext';
import './App.css'
import { motion } from 'framer-motion'

function App() {
  const { isDark, setIsDark } = useContext(DarkContect);
  // isDark ?  require('./AppDark.css') : require('./App.css');
  const buttonVariants = {
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 8px rgb(255,255,255)",
      boxShadow: "0px 0px 8px rgb(255,255,255)",
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      }
    }
  }

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 1.5, duration: 1.5 }
    },
    exit: {
      x: "-100vh",
      transition: { ease: 'easeInOut' }
    }
  };

  return (
    <Router>
      <div className="app">
        <motion.div variants={containerVariants} hidden='hidden' animate='visible' exit='exit' className="app__navbar" >
          <motion.h3 >Where in the world ?</motion.h3>
          <motion.button variants={buttonVariants} whileHover='hover' onClick={() => {
            setIsDark(isDark => !isDark);
            console.log(isDark);
          }}>
            <Brightness3Icon />
          Dark Mode
          </motion.button>
        </motion.div>
        <Switch>
          <Route path='/' exact >
            <Countries />
          </Route>
          <Route path='/:id' >
            <CountryDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// https://restcountries.eu/rest/v2/region/europe
// https://restcountries.eu/rest/v2/name/{name}