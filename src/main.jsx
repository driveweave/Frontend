import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ContextProvider } from './hooks/context.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import LandingPage from './pages/LandingPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SignupPage from './pages/SignupPage.jsx'
import ConnectWalletPage from './pages/ConnectWalletPage.jsx'
import ChooseWallet from './components/Connect Wallet/ChooseWallet.jsx'
import ScanWallet from './components/Connect Wallet/ScanWallet.jsx'
import MainPage from './pages/MainPage.jsx'
import HomeScreen from './components/MainPage/HomeScreen.jsx'
import RecentScreen from './components/MainPage/RecentScreen.jsx'
import SettingScreen from './components/MainPage/SettingScreen.jsx'
import TrashScreen from './components/MainPage/TrashScreen.jsx'
import SharedScreen from './components/MainPage/SharedScreen.jsx'

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
  },
  {
    path: "/main",
    element: <MainPage />,
    children: [
      {
        path: "/main/home",
        element: <HomeScreen />
      },
      {
        path: "/main/recent",
        element: <RecentScreen />
      },
      {
        path: "/main/trash",
        element: <TrashScreen />
      },
      {
        path: "/main/shared",
        element: <SharedScreen />
      },
      {
        path: "/main/settings",
        element: <SettingScreen />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={route} />
    </ContextProvider>
  </React.StrictMode>,
)
