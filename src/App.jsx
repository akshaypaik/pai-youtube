import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Body from './components/Body/Body'
import Header from './components/Header/Header'
import WatchPage from './components/WatchPage/WatchPage';
import MainContainer from './components/MainContainer/MainContainer';
import LivePage from './components/LivePage/LivePage';
import VideoContainer from './components/VideoContainer/VideoContainer';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: '/',
        element: <MainContainer />,
        children: [
          {
            path: '/',
            element: <VideoContainer />
          },
          {
            path: '/live',
            element: <LivePage />
          }
        ]
      },
      {
        path: '/watch',
        element: <WatchPage />
      }
    ]
  }
]);

function App() {

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default App
