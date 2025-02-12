import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import './App.css'
import Layout from './components/Layout'

function App() {


  return (
    <>
      <Router>
        <div className="background">
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Layout>
        </div>
      </Router>
    </>
  )
}

export default App
