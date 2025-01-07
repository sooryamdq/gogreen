import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './Pages/Mainpage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'; // Your custom styles

function App() {
  return (
  <div>
    
        <MainPage />
      
   
    <ToastContainer
    position="bottom-center"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
  />
  </div>
  );
}





export default App;
