import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import RootLayout from './layouts/RootLayout.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import UsersSection from './components/usersSection.jsx'
import SingleUserView from './components/singleUserview.jsx'

const rawBaseUrl = import.meta.env.BASE_URL
const basename = rawBaseUrl === '/' ? '/' : rawBaseUrl.replace(/\/$/, '')

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'users', element: <UsersSection /> },
      { path: 'about', element: <About /> },
      { path: 'users/:id', element: <SingleUserView /> },
    ],
  },
], { basename })

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)