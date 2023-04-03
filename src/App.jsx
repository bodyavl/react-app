import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Chat from './Pages/Chat/Chat';
import Home from './Pages/Home/Home';
import { io } from 'socket.io-client'
const socket = io("https://node-chat-app-egyw.onrender.com");

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='chat' element={<Chat socket={socket}/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App;
