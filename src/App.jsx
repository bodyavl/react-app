import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Chat from './Pages/Chat/Chat';
import Home from './Pages/Home/Home';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='chat' element={<Chat />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
