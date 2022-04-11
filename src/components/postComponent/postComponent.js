import './postComponent.css'
import {Link} from 'react-router-dom'
const PostComponent = ({id,title,body,isHomePage}) =>{
  const link = `/post/${id}`
  const classNa = (isHomePage)?"post  homepagePost":"post";
  return(
    <div key={id} className={classNa}>
      <Link to={link}><h1 className="post_title">{title}</h1></Link>
      <span className="post_body">
        {body}
      </span>
    </div>
  )
}
export default PostComponent
