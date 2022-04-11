import './newComment.css'
import {addNewCommentAction} from '../../store/rootReducer.js'
import {useDispatch, useSelector} from 'react-redux'

const NewComment = ({postId}) =>{
  const dispatch = useDispatch();
  const addNewComment = (e) =>{
    e.preventDefault();
    const form = e.target;

    dispatch(addNewCommentAction(
      {
        postId: Number(postId),
        id: Date.now(),
        email:'rsniffer@mail.ru',
        name:form.name.value,
        body:form.body.value,
      }

    ))
  }
  return(
    <div className="newCommentBox">
      <form className="commentForm" onSubmit={addNewComment}>
        <input className="commentName" placeholder="comment title" type="name" name="name"/>
        <div className="commentText">
          <textarea   placeholder="comment text" type="body" name="body"/>
        </div>
        <input className="commentSubmit" type="submit" value="leave a comment"/>
      </form>
    </div>
  )
}
export default NewComment
