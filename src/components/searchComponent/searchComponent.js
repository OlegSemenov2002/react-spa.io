import {useSearchParams,Navigate,Link, Route, useLocation, useParams} from 'react-router-dom'
import './searchComponent.css'


const SearchComponent = ({searchIn}) =>{


const params = useParams();

  const [searchParams, setSearchParams] = useSearchParams();
  function searchPost(e){
    e.preventDefault();

    const q = e.target.search.value;
    const searchParams = (q=='')?{page:1}: {page:1, post:q};
    setSearchParams(searchParams)
  }
  return(

      <form className="searchPost" onSubmit={searchPost}>
        <input className="searchInput" type="search" name="search"/>
        <input className="searchButton" type="submit" value="search"/>
      </form>

  );
}
export default SearchComponent
