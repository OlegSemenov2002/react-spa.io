import './signUp.css'
import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {signUpAction, addNewUserAction} from '../../store/rootReducer.js'
const SignUp = () =>{
  const dispatch = useDispatch();
  const user = useSelector(state=>state.user);
  const users = useSelector(state=>state.users);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const newUser = {}
  const reg =  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  const confirmUser = (e) =>{
    e.preventDefault();
    if(reg.test(email) === false) {
      alert('Введите корректный e-mail');
      return false;
   }else if((newUser.name&&newUser.email&&newUser.password)!==''){
     if(users.find(user=>user.email===email)){
       alert('Sorry, account with this email is already taken')
       return
     }
     newUser.name=name;
     newUser.email=email;
     newUser.id = Date.now();
     dispatch(signUpAction(newUser));
     newUser.password=password;
     dispatch(addNewUserAction(newUser));
     alert('You sugn up!')
     }
  }

  return(
    <main className="mainSection">
      <div className="formSection">
          <form onSubmit={confirmUser}>
            <section className="userSection">
            <p className="form_text">Username</p>
            <input className="form_input" value={name} placeholder="Ivan" type="name" onChange={(e)=>setName(e.target.value)}></input>


            <p className="form_text">Enter your email</p>
            <input className="form_input" value={email} placeholder="example@mail.ru" type="email" onChange={(e)=>setEmail(e.target.value)}></input>


            <p className="form_text">Enter your password</p>
            <input className="form_input" value={password} placeholder="password" type="password" onChange={(e)=>setPassword(e.target.value)}></input>

            </section>

            <input  className="form_submitButton" type="submit" value="submit"/>

        </form>

      </div>
    </main>
  );
}
export default SignUp
