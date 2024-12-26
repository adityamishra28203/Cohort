import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { lazy, Suspense } from 'react';
const Landing = lazy(() => import('./Components/Landing'));
const Dashboard = lazy(() => import('./Components/Dashboard'))

//he Suspense API in React is a powerful feature used to manage asynchronous rendering of components. 
// It allows you to delay the rendering of a component until some asynchronous data or operation is ready. 
//This typically means you're trying to use a component that is expecting asynchronous data or loading behavior (like React.lazy() 
// or data fetching in Suspense) without wrapping it in a Suspense component.

function App() {
  return (
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/dashboard" element={ <Suspense fallback={<div>Loading...</div>}><Dashboard /></Suspense> } /> 
          <Route path="/" element={ <Suspense fallback={<div>Loading...</div>}><Landing /></Suspense> } />
        </Routes>
      </BrowserRouter>
  )
}

function Appbar () {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <button style={{background: "black", color: "white" }} onClick={() => {
          navigate('/')
        }}>Landing page</button>

        <button onClick={() => {
          navigate('/dashboard')
        }}>Dashboard</button>
      </div>
    </div>
  )
}


export default App