import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AuthPage from './pages/AuthPage/AuthPage';
function App() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/Auth' element={<AuthPage />}/>
     </Routes>
    </>
  )
}

export default App
