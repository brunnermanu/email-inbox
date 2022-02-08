import React, {useEffect, useState} from 'react';
import ListItem from "./listItem";
import InfoBox from "./InfoBox";
import './index.css';


function App() {

  const [userData , setUserData] = useState({
    posts: [],
    dataIsLoaded: false
  })

  type Post = {
    id: number,
    author: string,
    width: number,
    height: number,
    url: string,
    download_url: string
  }
  const [currentPost, setCurrentPost] = useState({id:0, author:"",download_url:""})

  const getPosts = () => {
    fetch(
      "https://picsum.photos/v2/list")
      .then((res) => res.json())
      .then((json) => {
        setUserData({
          posts: json,
          dataIsLoaded: true
        });
      })
  }


  useEffect(() => {
    getPosts()
  }, [])

const handleClick = (id:number) => {
  userData.posts.find((post:Post) => post.id === id ? setCurrentPost(post) : null)
}

  return (
    <div className="grid grid-cols-3">
      <div className="col-span-1">
        {userData.posts.map((post:Post) => {
          return (
            <div key={post.id} onClick={() => handleClick(post?.id)}>
              <ListItem  author={post?.author} />
            </div>
          )
        })}
      </div>
      { currentPost ?
        <div key={currentPost.id} className="col-span-2">
          <InfoBox  author={currentPost.author} download_url={currentPost.download_url}/>
        </div> : null
      }
    </div>

  );
}

export default App;
