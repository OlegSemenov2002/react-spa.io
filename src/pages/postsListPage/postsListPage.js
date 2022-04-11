import './postsListPage.css'

import {useDispatch, useSelector} from 'react-redux'
import {useSearchParams, Navigate, useLocation} from 'react-router-dom'
import {fetchPosts} from '../../asyncActions/getPosts.js'
import postsToPages from '../../functions/postsToPages.js'

import SearchComponent from '../../components/searchComponent/searchComponent.js'
import PostList from '../../components/postList/postList.js'
import ChangePageComponent from '../../components/changePageComponent/changePageComponent.js'


const PostsListPage = () =>{
  const [searchParams, setSearchParams] = useSearchParams();
    // if(!searchParams.has('page')){
    //   setSearchParams({page:1})
    // }
  const dispatch = useDispatch();
  const posts = useSelector(state=>state.posts);
  let pages = postsToPages(posts);
  const pageNumber = Number(searchParams.get('page'))||1;
  const postQuery = searchParams.get('post')||'';

    if(!posts)dispatch(fetchPosts());

    if(postQuery!==''&&posts.length>0){
      pages = postsToPages(posts.filter(post=>post.title.includes(postQuery)));
    }
    if(pages.length>0&&!(pageNumber>=1&&pageNumber<=pages.length)){
      return <Navigate to="*" state={{from: useLocation}}/>
    }

  return(
    <>
    <div className="postPage">
      <section className="page_search">
        <SearchComponent/>
      </section>
        {(pages.length>0)?<PostList page={pages[pageNumber-1]}/>
        :<div>No such posts.</div>}
        <section>
          <ChangePageComponent
            postQuery={postQuery}
            pageNumber={pageNumber}
            pages={pages}/>
        </section>
      </div>
    </>

  );
}
export default PostsListPage
