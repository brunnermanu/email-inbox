import React from 'react';
import { Post } from "./App";


const ListItem = ({ post }:{ post:Post }): JSX.Element => {
  return (
    <div className="flex flex-row items-center gap-x-3 border border-slate-100 px-6 py-3 hover:cursor-pointer hover:bg-slate-50">
      <img src={post.download_url} alt={post.author} className="object-cover w-10 h-10 rounded-full"/>
      <h2>{post.author}</h2>
    </div>
  )
}

export default ListItem;
