"use client";
import Loading from "../Loading";
import { useContext } from "react";
import { SanityContext } from "../contexts/sanityContext";
import PostCard from "../components/PostCard";

export default function MainPosts() {
  const sanityContext = useContext(SanityContext);

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
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-2">
      {posts.slice(0, 6).map((post) => (
        <PostCard key={post._id} post={post} href={`/posts/${post.slug.current}`} />
      ))}
    </div>
  );
}
