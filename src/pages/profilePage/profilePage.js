import './profilePage.css'
import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {signUpAction, addNewUserAction} from '../../store/rootReducer.js'
const ProfilePage = () =>{
  const user = useSelector(state=>state.user);
  if(!user){
    alert('You are not authorized');
    return
  }
  return(
    <main className="profilePage">
    {user.name}
    <br/>
    {user.email}
    <br/>

    <input type="file" accept="image/jpeg, image/png"/>
    </main>
  );
}
export default ProfilePage
