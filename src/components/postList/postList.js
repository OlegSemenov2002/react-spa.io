import PostComponent from '../../components/postComponent/postComponent.js'
import './postList.css'
import PostPage from '../../pages/postPage/postPage.js'
const PostList = ({page}) => {
  return(
    <ul className="postPage_list">
      {page.map(post=>(
          <li key = {post.id} className="postPage_post">
            <PostComponent       
            key = {post.id}
            id={post.id}
            title={post.title}
            body={post.body}/>

          </li>
        ))}
    </ul>
  )
}
export default PostList
