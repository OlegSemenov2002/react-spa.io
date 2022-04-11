import MainTitle from '../../components/mainTitle/mainTitle.js'
import PostComponent from '../../components/postComponent/postComponent.js'


import {fetchPosts} from '../../asyncActions/getPosts.js'
import {useDispatch, useSelector} from 'react-redux'
import {useState, useEffect} from 'react'

import {Link} from 'react-router-dom'
import './homePage.css'
const HomePage = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state=>state.posts);
  const [query, setQuery] = useState(posts);
  if(!posts.length)dispatch(fetchPosts())


  return(
    <main className="homepage" >
      <div className="homepage_mainSection">
        <MainTitle  />
      </div>
      <section key="homePage_section_1" className="homePage_recentPosts">
        <p cla>Recent Posts</p>
      </section>

      <section key="homePage_section_2" className="homePage_list_section">



        {
          (posts.length>1)?<ul className="homePage_list">
          {posts
            .filter(post=>post.id>0&&post.id<4)
            .map(post=>(
              <li key={post.id} className="homePage_post">
                <PostComponent
                  id={post.id}
                  title={post.title}
                  body={post.body}
                  isHomePage={true}
                />
              </li>
          ))}
        </ul>
        :<div>Loading...</div>
      }
      <Link className="homePage_allPosts" to="/posts?page=2">All posts</Link>

      </section>


    </main>
  )
}
export default HomePage
