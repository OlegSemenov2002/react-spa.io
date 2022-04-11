import {fetchPosts} from '../../asyncActions/getPosts.js'
import {getPostComments} from '../../asyncActions/getPostComments.js'


import {useState} from 'react'
import './postPage.css'
import {useDispatch, useSelector} from 'react-redux'
import {Link,useParams, Navigate, useLocation} from 'react-router-dom'
import PostComponent from '../../components/postComponent/postComponent.js'
import CommentsList from '../../components/commentsList/commentsList.js'




const PostPage = () =>{
    const {id} = useParams();
    const postQuery = useLocation();
    const dispatch = useDispatch();
    const [post, setPost] = useState(0);
    const posts = useSelector(state=>state.posts);
    const allComments = useSelector(state=>state.comments);
    let newcomments=0;







    if(!posts)dispatch(fetchPosts())
    if(!allComments){
      dispatch(getPostComments());
    }
    if(allComments){
      newcomments = allComments.filter(com=>com.postId===Number(id))
      console.log(newcomments)
    }

    if(posts&&!post){
      setPost(posts.find(post=>post['id']===Number(id)));
    }

  return(
    <main className="post_Page">
      {(post)?
        <div key={post.id} className="postBox">
          <h1 className="post_title onpage">{post.title}</h1>
          <span className="post_body">
            {post.body}
          </span>
        </div>:<div>Loading</div>
      }
      {(newcomments)?<div className="comments">
        <CommentsList comments={newcomments} postId={id}/>
      </div>
      :<div>Loading</div>}
    </main>
  );
}
export default PostPage
