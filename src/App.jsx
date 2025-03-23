import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Body from './components/Body/Body'
import MainContainer from './components/MainContainer/MainContainer';
import VideoContainer from './components/VideoContainer/VideoContainer';
import { lazy, Suspense } from 'react';

const WatchPage = lazy(() => import("./components/WatchPage/WatchPage.jsx"));
const LivePage = lazy(() => import("./components/LivePage/LivePage.jsx"));

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
            element: <Suspense><LivePage /></Suspense>
          }
        ]
      },
      {
        path: '/watch',
        element: <Suspense><WatchPage /></Suspense>
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
