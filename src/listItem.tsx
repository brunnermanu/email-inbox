import React from 'react';

const ListItem = ({author,download_url}:{author: string, download_url: string}): JSX.Element => {
  return (
    <div className="flex flex-row items-center gap-x-3 border border-slate-100 px-4 py-3 hover:cursor-pointer hover:bg-slate-50">
      <img src={download_url} alt="img" className="object-cover w-10 h-10 rounded-full"/>
      <h2>{author}</h2>
    </div>
  )
}

export default ListItem;
