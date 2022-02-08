import React from 'react';

const InfoBox = ({ author, download_url}: { author:string; download_url:string}): JSX.Element => {
  return (
    <div className="border border-gray-300 px-3 py-2 h-screen position fixed flex flex-col items-center">
      <h2 className="py-10">{author}</h2>
      <div>
        <img src={download_url} alt={download_url}/>
      </div>
    </div>
  )
}

export default InfoBox;
