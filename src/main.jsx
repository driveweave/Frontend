import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage.jsx'
import LandingPage from './pages/LandingPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SignupPage from './pages/SignupPage.jsx'
import ConnectWalletPage from './pages/ConnectWalletPage.jsx'
import ChooseWallet from './components/Connect Wallet/ChooseWallet.jsx'
import ScanWallet from './components/Connect Wallet/ScanWallet.jsx'

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LandingPage />
      },
      {
        path: "/login",
        element: <LoginPage />
      },
      {
        path: "/signup",
        element: <SignupPage />
      }
    ]

  },
  {
    path: "/connectwallet",
    element: <ConnectWalletPage />,
    children: [
      {
        path: "/connectwallet",
        element: <ChooseWallet />
      },
      {
        path: "/connectwallet/scancode",
        element: <ScanWallet />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)
