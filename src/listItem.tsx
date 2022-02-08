import React from 'react';

const ListItem = ({author}:{author: string}): JSX.Element => {
  return (
    <div className="border border-gray-300 px-3 py-2 hover:cursor-pointer hover:bg-gray-300">
      <h2>{author}</h2>
    </div>
  )
}

export default ListItem;
