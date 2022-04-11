import './comment.css'
const Comment = ({comment}) =>{
  return(
    <div className="commentContainer">
      <p className="comment_email">{comment.email}</p>
      <h1 className="comment_name">{comment.name}</h1>
      <span className="comment_text">{comment.body}</span>
    </div>
  )
}
export default Comment
