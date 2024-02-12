import "./register.css"
const Register = () => {

  return (
    <form className="formRegister">
      <h1>Sign Up</h1> 
      <div className="box-form">
        <label htmlFor="username">username</label>
        <input type="text" id="username" required />
      </div> 
      <div className="box-form">
        <label htmlFor="email">email</label>
        <input type="email" id="email" required />
      </div>
      <div className="box-form">
        <label htmlFor="password">password</label>
        <input type="password" id="password" required />
      </div>
      <button>Sign Up</button>
    </form>
  )
}

export default Register
