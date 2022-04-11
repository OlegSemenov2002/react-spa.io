import './commentsList.css'
import Comment from '../comment/comment.js'
import NewComment from '../newComment/newComment.js'

const CommentsList = ({comments, postId}) =>{
  return(
    <div className="commentsBlock">
      <NewComment postId={postId} />
      <ul className="comments">
        {comments.map(comment=>(
          <li key={comment.id} >
            <Comment comment={comment} />
          </li>
        ))}
      </ul>
    </div>
  )
}
export default CommentsList
