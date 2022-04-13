import { ThemeProvider } from 'styled-components';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/screens/login';
import New from './components/screens/new';
import Background from './components/styled/background';

const theme = {
  background: '#002b59',
  main: '#005f8c',
  secondary: '#00b9be',
  highlight: '#9ff4e5',
  maxWidth: ' 500px'
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Background />
      <Router>
        <Routes>
          <Route path='/new' element={<New />} />
          <Route path='/' element={<Login />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
