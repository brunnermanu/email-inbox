import React from 'react';
import { Post } from "./App";

const InfoBox = ({ post, onClick }: { post: Post, onClick: () => void }): JSX.Element => {
  return (
    <div className="px-3 sm:px-12 mb-14 fixed flex flex-col items-center">
      <div className="flex w-full flex-row items-start sm:invisible">
        <button className="pt-8 text-2xl w-5 font-semibold" onClick={onClick}>x</button>
      </div>
      <h1 className="pb-10 pt-10 sm:pt-0">{post.author}</h1>
      <img className="w-auto max-h-64 sm:max-h-72 md:max-h-80 rounded-lg" src={post.download_url} alt={post.author}/>
      <p className="mt-8 text-gray-400">Download-Url:</p>
      <a className="mb-4" href={post.download_url} target="_blank" rel="noreferrer">{post.download_url}</a>
      <p className="text-gray-400">Url:</p>
      <a className="mb-10" href={post.url} target="_blank" rel="noreferrer">{post.url}</a>
    </div>
  )
}

export default InfoBox
