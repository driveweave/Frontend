import React, { createContext, useState } from 'react'

const AuthContext = createContext()

const ContextProvider = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [fullname, setFullname] = useState("")
  const [showError, setShowError] = useState(false)

  //set fullname
  const getFullNameValue = e => {
    setFullname(e.target.value)
  }

  // set email
  const getEmailValue = e => {
      setEmail(e.target.value)
  }

  // set password
  const getPasswordValue = e => {
      setPassword(e.target.value)
  }


  return (
    <AuthContext.Provider value={{
      email, setEmail,
      password, setPassword,
      fullname, setFullname,
      getEmailValue, getPasswordValue,
      getFullNameValue,
      showError, setShowError,
    }}
    >
        {props.children}
    </AuthContext.Provider>
  )
}

export { ContextProvider, AuthContext }