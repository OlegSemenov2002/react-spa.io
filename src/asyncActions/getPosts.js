import {addPostsAction} from '../store/rootReducer.js'
export const fetchPosts = () =>{
  return (dispatch)=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
     .then(response => response.json())
     .then(json => dispatch(addPostsAction(json)))
  }
}
