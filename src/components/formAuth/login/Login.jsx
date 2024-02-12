import "./login.css"
const Login = () => {
  return (
    <form className="formRegister">
      <h1>Sign In</h1> 
      <div className="box-form">
        <label htmlFor="email">email</label>
        <input type="email" id="email" required />
      </div>
      <div className="box-form">
        <label htmlFor="password">password</label>
        <input type="password" id="password" required />
      </div>
      <button>Sign In</button>
    </form>
  )
}

export default Login
