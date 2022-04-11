import {Link} from 'react-router-dom'
const ChangePageComponent = ({postQuery, pageNumber, pages}) =>{
  window.scrollTo( 0, 0 );
  return(
    <div className="page_change">
      {(pageNumber!==1)?
        <Link to={(postQuery)? `/posts?page=${pageNumber-1}&post=${postQuery}`:`/posts?page=${pageNumber-1}`}>
            <div className="changePageButton left">Prev</div>
        </Link>

      :''}
      <ul className="changePageList">
        {pages.map((page,index)=>(
         <Link  key = {index+1} to={(postQuery)? `/posts?page=${index+1}&post=${postQuery}`:`/posts?page=${index+1}`}>
           <li className="pageNumber" key = {index+1}>{index+1}</li>
         </Link>
         ))}
      </ul>
      {(pageNumber!==pages.length&&pages.length>0)?
       <Link to={(postQuery)? `/posts?page=${pageNumber+1}&post=${postQuery}`:`/posts?page=${pageNumber+1}`}>
           <div className="changePageButton right">Next</div>
       </Link>
      :''}
     </div>
  )
}
export default ChangePageComponent
