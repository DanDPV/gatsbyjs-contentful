import React from 'react';

import './styles.scss';

type Props = {
  title: string;
  date: string;
  header: string;
};

const PostCard = ({ title, date, header }: Props) => {
  return (
    <div className="bg-white rounded shadow-md hover:shadow-lg p-6 m-2 w-64 md:w-96 h-36 max-w-xl">
      <p className="font-bold">{title}</p>
      <p className="text-sm italic text-gray-500">{date}</p>
      <hr />
      <div className="overflow-y-scroll h-16 scrollbar">
        <p className="mt-4 mb-2">{header}</p>
      </div>
    </div>
  );
};

export default PostCard;
