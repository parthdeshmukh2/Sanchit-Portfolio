// components/BlogCard.tsx
"use client"
import { useRouter } from 'next/navigation';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'


interface BlogCardProps {
  image: any;
  title: string;
  description: string;
  id: string;
}

const truncateDescription = (text: string, limit: number) => {
  return text.length > limit ? `${text.substring(0, limit)}...` : text;
};

const BlogCard = ({ image, title, description, id }: BlogCardProps) => {
  const router = useRouter();

  const handleReadMore = (id: string) => {
    router.push(`blog/${id}`);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col justify-between h-full text-center">
      <Image
        src={image}
        className="w-full h-48 object-cover"
        alt={title}
      />
      <div className="p-4 flex-grow">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 text-base">
          {truncateDescription(description, 100)}
        </p>
      </div>
      <div className="p-4">
        {/* <Link href={`/blog/${id}`}> */}
        <button
          className="w-full bg-primaryBackground px-3 py-2 rounded-xl text-white"
         onClick={() => handleReadMore(id)}
          >
          Read More
        </button>
        {/* <Link href={`./blog/${id}`}>Read More</Link> */}
          {/* </Link> */}
      </div>
    </div>
  );
};

export default BlogCard;
