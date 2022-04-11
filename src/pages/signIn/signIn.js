import {Link, Navigate} from 'react-router-dom'
import './signIn.css'
import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {signUpAction} from '../../store/rootReducer.js'

const SignIn = () =>{
  const user = useSelector(state=>state.user);
  const [searchemail, setSeachemail] = useState('');
  const [searchpassword, setSeachpassword] = useState('');
  const dispatch = useDispatch();

  const _users = useSelector(state=>state.users);

  const findUser = (e) =>{
    e.preventDefault();
    if(user){
      alert('You alredy sign in!');
      setSeachemail('');
      setSeachpassword('');
      return
    }

    const userQuery = _users.findIndex(user=>user.email===searchemail);
    if(userQuery!=-1&&(searchpassword===_users[userQuery].password)){
      alert('You sign in, as '+ _users[userQuery].name)
      const user = _users[userQuery];
      dispatch(signUpAction(user))
      setSeachemail('');
      setSeachpassword('');
    }else{
      alert('wrong password')
      return
    }
  }
  return(
    <main className="mainSection">
      <div className="formSection">
        <form onSubmit={findUser}>
          <p className="form_text">Email address</p>
          <input className="form_input" placeholder="example@mail.ru" value={searchemail} type="email" onChange={(e)=>setSeachemail(e.target.value)}></input>
          <p className="form_text">Password</p>
          <input className="form_input" placeholder="password" value={searchpassword}type="password" onChange={(e)=>setSeachpassword(e.target.value)}></input>
          <input className="form_submitButton" type="submit"  value="Sign in"/>
          <div className="form_text"><Link to="../signUp">Create an account.</Link></div>
        </form>


      </div>
    </main>
  );
}

export default SignIn
