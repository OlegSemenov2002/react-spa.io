import './layout.css';
import{Link, Outlet} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {logOutAction} from '../../store/rootReducer.js'
import MainFooter from '../mainFooter/mainFooter.js'




const Layout = () =>{
  const dispatch = useDispatch();
  const user = useSelector(state=>state.user)

  const logOut = () =>{
    const conf = window.confirm('Log out?');
    if(!conf)return
    dispatch(logOutAction())


  }

  return(
    <>
    <header className="mainHeader">
      <ul className="navList">
        <Link to="/" className="navList_item"><li >Main</li></Link>
        <Link to="/posts?page=1" className="navList_item"><li >Posts</li></Link>
        <Link to="/profile" className="navList_item"><li >Profile</li></Link>

      </ul>

      {(user)?<div className="sign" onClick={logOut}>Log out</div>
        :<Link to="/signIn" className="sign"><div  >Sign in</div></Link>
      }



    </header>
    <Outlet/>
    <MainFooter />
    </>
  )
}
export default Layout
