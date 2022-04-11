import {addCommentsAction} from '../store/rootReducer.js'

export const getPostComments = () =>{
  return (dispatch)=>{
    fetch(`https://jsonplaceholder.typicode.com/comments`)
     .then(response => response.json())
     .then(json =>dispatch(addCommentsAction(json)))
  }
}
