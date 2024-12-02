"use client";
import { useEffect, useContext, useState } from "react";
import Loading from "../Loading";
import { SanityContext } from "../contexts/sanityContext";
import PostCard from "../components/PostCard";

interface Post {
  _id: string;
  slug: {
    current: string;
  };
  categories: {
    title: string;
  }[];
}

interface MainPostsProps {
  currentPostId: string;
  currentCategory: string;
}

export default function SimilarPosts({ currentPostId, currentCategory }: MainPostsProps) {
  const sanityContext = useContext(SanityContext);
  const [postsQtd, setPostsQtd] = useState(6);

  if (!sanityContext) {
    return <Loading />;
  }

  const { posts, isLoading } = sanityContext;

  if (isLoading) {
    return <Loading />;
  }

  if (!posts || posts.length === 0) {
    return <p>No posts found</p>;
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-8 mt-2 lg:grid-cols-2 xl:gap-12">
        {posts
          .filter((post) => post._id !== currentPostId && post.categories.some((category) => category.title === currentCategory))
          .slice(0, postsQtd)
          .map((post) => (
            <PostCard key={post._id} post={post} href={`/posts/${post.slug.current}`} />
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
