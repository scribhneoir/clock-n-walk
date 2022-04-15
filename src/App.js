import { ThemeProvider } from 'styled-components';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import Login from './components/screens/login';
import New from './components/screens/new';
import Schedule from './components/screens/schedule';

const theme = {
  background: '#002b59',
  main: '#005f8c',
  secondary: '#00b9be',
  highlight: '#9ff4e5',
  maxWidth: ' 500px'
};
function App() {
  const firebaseConfig = {
    apiKey: 'AIzaSyA77-Dzn-D-uewM5PpIHOL74Q6w_3sLhdU',
    authDomain: 'clocknwalk.firebaseapp.com',
    projectId: 'clocknwalk',
    storageBucket: 'clocknwalk.appspot.com',
    messagingSenderId: '1086663635109',
    appId: '1:1086663635109:web:891e91cd9e5ef848111d4c',
    measurementId: 'G-2VG7S1C1CB'
  };

  const app = initializeApp(firebaseConfig);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/new' element={<New />} />
          <Route path='/schedule' element={<Schedule />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
