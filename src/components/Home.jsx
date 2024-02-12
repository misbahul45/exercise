import { Link } from 'react-router-dom'
import style from "./home.module.css"
const Home = () => {
  return (
    <>
        <h1>Router</h1>
        <div className={style.link}>
            <Link to={"/form"}>form app</Link>
            <Link to={'/auth'}>Auth</Link>
        </div>
    </>
  )
}

export default Home
