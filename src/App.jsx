import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AuthPage from './pages/AuthPage/AuthPage';
import PageLayout from './Layouts/PageLayout/PageLayout';
function App() {
  

  return (
    <PageLayout>
     <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/Auth' element={<AuthPage />}/>
     </Routes>
    </PageLayout>
  );
}

export default App
