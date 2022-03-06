import React, { useEffect, useState } from 'react';
import ListItem from "./ListItem";
import InfoBox from "./InfoBox";
import './index.css';

export interface Post {
  id: number | undefined,
  author: string,
  url: string,
  download_url: string,
}

function App() {
  const [postData, setPostData] = useState({
    posts: [],
    dataIsLoaded: false
  })

  const [visible, setVisible] = useState(false)
  const [currentPost, setCurrentPost] = useState<Post>({id: undefined, author: "", download_url: "", url: ""})

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

  const handleClick = (post: Post) => {
    if (post.id === currentPost.id) {
      setCurrentPost({id: undefined, author: "", download_url: "", url: ""})
      setVisible(false)
    } else {
      setCurrentPost(post)
      setVisible(true)
    }
  }

  return (
    <>
      { !postData.dataIsLoaded ?
        <div className="w-screen h-screen flex items-center justify-center">
          <h1 className="text-center">Loading ...</h1>
        </div> :
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4">
          <div className="col-span-1 overflow-y-scroll h-screen">
            { postData.dataIsLoaded &&
              postData.posts.map((post: Post) => {
                return (
                  <div className="hover:cursor-pointer hover:bg-slate-50" key={post.id} onClick={() => handleClick(post)}>
                    <ListItem post={post}/>
                  </div>
                )
              })
            }
          </div>
          {currentPost &&
            <div key={currentPost.id}
                 className={visible ?
                   "absolute top-0 left-0 z-10 h-full w-full visible flex flex-col bg-white col-span-1 sm:col-span-2 md:col-span-3 sm:static sm:bg-white sm:h-auto sm:w-full sm:items-center"
                   : "invisible"}>
              <InfoBox post={currentPost} onClick={() => setVisible(false)}/>
            </div>
          }
        </div>
      }
    </>
  )
}

export default App
