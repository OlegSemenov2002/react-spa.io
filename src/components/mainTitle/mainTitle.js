import {Link} from 'react-router-dom'
import planet from './planet.png'
import {useState,useEffect} from 'react'

import SearchComponent from '../../components/searchComponent/searchComponent.js'
import './mainTitle.css'

const MainTitle = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [link, setLink] = useState(`/posts?page=1`);

  const onChangeQuery = (e) =>{
    e.preventDefault();
    setSearchQuery(e.target.value);
    setLink(`/posts?page=1&post=${searchQuery}`)
  }


  return (
    <section className="homePage_title">
      <div className="homePage_titleContainer">
        <b className="title_name">Daily digests</b>
        <p className="title_text">Enjoy when you can, and endure when you must.</p>
        <p className="quote">„ Johann Wolfgang von Goethe “</p>
        <div className="signUpLink">
          <Link to="../signUp">Sign Up</Link>
        </div>
      </div>
      <div className="homepage_title_search">
        <input value={searchQuery} type="search" onChange={(e)=>onChangeQuery(e)}/>
        <Link className="link" to={link}>Search</Link>
      </div>


    </section>
  );
}


export default MainTitle
