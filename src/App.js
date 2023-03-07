import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout'
import Home from './components/Home'
import Vision from './components/Vision'
import TeamInfo from './components/TeamInfo';
import Contact from './components/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="vision" element={<Vision />} />
          <Route path="teaminfo" element={<TeamInfo />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
