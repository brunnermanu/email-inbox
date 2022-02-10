import React, {useEffect, useState} from 'react';
import ListItem from "./ListItem";
import InfoBox from "./InfoBox";
import './index.css';

export interface Post {
  id: number,
  author: string,
  url: string,
  download_url: string,
  onClick?: () => void
}

function App() {

  const [postData, setPostData] = useState({
    posts: [],
    dataIsLoaded: false
  })

  const [visible, setVisible] = useState(false)
  const [currentPost, setCurrentPost] = useState<Post>({id: -1, author: "", download_url: "", url: ""})

  const getPosts = () => {
    fetch(
      "https://picsum.photos/v2/list")
      .then((res) => res.json())
      .then((json) => {
        setPostData({
          posts: json,
          dataIsLoaded: true
        })
      })
  }

  useEffect(() => {
    getPosts()
  }, [])

  const handleClick = (id: number | undefined) => {
    postData.posts.find((post: Post) => {
      if (id === currentPost.id) {
        setVisible(false)
        setCurrentPost({id: -1, author: "", download_url: "", url: ""})
      }
      if (post.id === id) {
        setCurrentPost(post)
        setVisible(true)
      }
    })

  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3">
      <div className="col-span-1 overflow-y-scroll h-screen">
        { postData.dataIsLoaded ?
          postData.posts.map((post: Post) => {
            return (
              <div key={post.id} onClick={() => handleClick(post?.id)}>
                <ListItem post={post}/>
              </div>
              )
            }) :
          <div className="w-screen h-screen flex items-center justify-center">
            <h1 className="text-center">Loading ...</h1>
          </div>
        }
      </div>
      {currentPost &&
      <div key={currentPost?.id}
           className={visible ? "absolute top-0 left-0 z-10 h-screen w-screen visible flex flex-col bg-white sm:col-span-2 sm:static sm:bg-white sm:h-auto sm:w-full sm:items-center" : "invisible"}>
        <InfoBox post={currentPost} onClick={() => setVisible(false)}/>
      </div>
      }
    </div>
  )
}

export default App
