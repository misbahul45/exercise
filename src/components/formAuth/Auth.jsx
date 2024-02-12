import { useState } from "react"
import Register from "./Register/Register"
import style from "./auth.module.css"
import Login from "./login/Login"

const Auth = () => {
  const [isLogin, setIsLogin]=useState(true)
  return (
    <main className={style.bg}>
      {
        isLogin?
          <Login />
        :
        <Register />
      }
      <p className={style.info}>
        {
          isLogin?
          "Don't have an account? "
          :
          "Have an account? "
        }
        <span onClick={()=>setIsLogin(prev=>!prev)}>
          {
            isLogin?
            "Sign Up"
            :
            "Sign In"
          }
        </span>
      </p>
    </main>
  )
}

export default Auth
