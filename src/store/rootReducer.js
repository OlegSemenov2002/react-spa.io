const defaultState = {
  user:0,
  users:[
    {
      name:'admin',
      email:'admin@mail.ru',
      _access:true,
      password:'oleg2002'
    }
  ],
  posts:0,
  comments:0,
}

const SIGN_UP = 'SIGN_UP';
const ADD_NEW_USER = 'ADD_NEW_USER';
const ADD_POSTS = 'ADD_POSTS';
const ADD_COMMENTS = 'ADD_COMMENTS';
const ADD_NEW_COMMENT = 'ADD_NEW_COMMENT';
const LOG_OUT = 'LOG_OUT';


export const rootReducer = (state = defaultState, action) =>{
  switch(action.type){
    case SIGN_UP:
      return{...state, user: action.payload}
    case ADD_NEW_USER:
      return{...state, users: [...state.users, action.payload]}
    case ADD_POSTS:
      return{...state, posts:action.payload}
    case ADD_COMMENTS:
      return{...state, comments:action.payload}
    case ADD_NEW_COMMENT:
      return{...state, comments:[...state.comments, action.payload]}
    case LOG_OUT:
      return{...state, user:0}

    default: return state
  }

}

export const signUpAction = (payload) => ({type:SIGN_UP, payload:payload});
export const logOutAction = (payload) => ({type:LOG_OUT, payload:payload});

export const addNewUserAction = (payload) => ({type:ADD_NEW_USER, payload:payload});
export const addPostsAction = (payload) => ({type:ADD_POSTS, payload:payload});
export const addCommentsAction = (payload) => ({type:ADD_COMMENTS, payload:payload});
export const addNewCommentAction = (payload) => ({type:ADD_NEW_COMMENT, payload:payload});
