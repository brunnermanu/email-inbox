import React from 'react';
import { Post } from "./App";

const InfoBox = ({ post, onClick }:{ post:Post, onClick:()=> void }): JSX.Element => {
  return (
    <div className="px-12 mb-14 fixed flex flex-col items-center">
      <div className="flex w-full flex-row grid items-start sm:invisible">
        <button className="pt-8 text-2xl w-5 font-semibold" onClick={onClick}>x</button>
      </div>
      <h1 className="pb-10 pt-10 sm:pt-0">{post.author}</h1>
      <img className="max-h-80 md:w-auto rounded-lg" src={post.download_url} alt={post.author}/>
      <p className="mt-8 text-gray-400">{"Download-Url:"}</p>
      <a className="mb-2" href={post.download_url} target={"_blank"}>{post.download_url}</a>
      <p className="text-gray-400">{"Url:"}</p>
      <a className="mb-10" href={post.url} target={"_blank"}>{post.url}</a>
    </div>
  )
}

export default InfoBox
