import './App.css';
import {Routes, Route} from 'react-router-dom'
import Layout from './components/layout/layout.js'
import SignUp from './pages/signUp/signUp.js'
import HomePage from './pages/homePage/homePage.js'
import PostsListPage from './pages/postsListPage/postsListPage.js'
import NotFoundPage from './pages/notFoundPage/notFoundPage.js'
import PostPage from './pages/postPage/postPage.js'
import ProfilePage from './pages/profilePage/profilePage.js'




import SignIn from './pages/signIn/signIn.js'




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index   element={<HomePage />}/>
          <Route path="signIn" element={<SignIn/>}/>
          <Route path="signUp" element={<SignUp/>}/>
          <Route path="posts" element={<PostsListPage/>}/>
          <Route path="post/:id" element={<PostPage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
          <Route path="/profile" element={<ProfilePage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
