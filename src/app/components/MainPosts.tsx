"use client";

import React, { useState } from "react";
import PostCard from "./PostCard";

export interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  body: any[];
  mainImage: {
    asset: {
      url: string;
    };
    alt: string;
  };
  categories: {
    title: string;
  }[];
  author: {
    name: string;
    image: {
      asset: {
        url: string;
      };
    };
  };
  publishedAt: string;
}

interface MainPostsProps {
  posts: Post[];
  currentPostId: string;
}

export default function MainPosts({ posts, currentPostId }: MainPostsProps) {
  const [postsQtd, setPostsQtd] = useState(6);

  if (!posts || posts.length === 0) {
    return <p>No posts found</p>;
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-8 mt-2 lg:grid-cols-2 xl:gap-12">
        {posts
          .filter((p) => p._id !== currentPostId)
          .slice(0, postsQtd)
          .map((filteredPost) => (
            <PostCard key={filteredPost._id} post={filteredPost} href={`/posts/${filteredPost.slug.current}`} />
          ))}
      </div>
      {postsQtd < posts.length && (
        <div className="flex justify-center">
          <button onClick={() => setPostsQtd(postsQtd + 6)} className="mt-10 border w-32 p-2 rounded-xl transition-all hover-bg">
            Ver mais
          </button>
        </div>
      )}
    </>
  );
}
