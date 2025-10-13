import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const navigate= useNavigate()
  const [formData, setFormData]= useState({
    name: '',
    email: '',
    password: ''
  })
  const [loginData, setLoginData]= useState({
    email: '',
    password: ''
  })

  const [user, setUser]= useState({});
  const [isLogged, setIsLogged]= useState(false)
  const [oldPass, setOldPass]= useState('')
  const [newPass, setNewPass]= useState('')
  const value = {
    navigate, toast, formData, setFormData,loginData, setLoginData, user, setUser, isLogged, setIsLogged, oldPass, setOldPass, newPass, setNewPass
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};
