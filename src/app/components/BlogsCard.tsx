// components/BlogCard.tsx
import React from 'react';

interface BlogCardProps {
  image: string;
  title: string;
  description: string;
}

const truncateDescription = (text: string, limit: number) => {
  return text.length > limit ? `${text.substring(0, limit)}...` : text;
};

const BlogCard = ({ image, title, description }: BlogCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden text-center">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 text-base">
          {truncateDescription(description, 100)}
        </p>
      </div>
      <button className='mb-4 bg-primaryBackground px-3 py-2 rounded-xl text-white'>Read More</button>
    </div>
  );
};

export default BlogCard;
