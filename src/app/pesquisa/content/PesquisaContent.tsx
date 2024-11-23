"use client";
import { useState, useEffect, useRef, useContext } from "react";
import Loading from "../../Loading";
import { SanityContext } from "../../contexts/sanityContext";
import PostCard from "../../components/PostCard";

export default function PesquisaContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const sanityContext = useContext(SanityContext);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  if (!sanityContext) {
    return <Loading />;
  }

  const { posts, isLoading } = sanityContext;

  if (isLoading) {
    return <Loading />;
  }

  const filteredPosts = searchQuery ? posts.filter((post) => post.title.toLowerCase().includes(searchQuery.toLowerCase())) : [];

  const errorMessage =
    filteredPosts.length === 0 && searchQuery ? "Nenhum post encontrado." : searchQuery ? "" : "Pesquise por algum post";

  return (
    <div className="p-4 md:p-12 only-screen">
      <input
        ref={inputRef}
        type="text"
        placeholder="Procure posts"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full mb-4 p-4 rounded-xl input-color"
      />
      <div className="grid grid-cols-1 gap-8 mt-2 xl:grid-cols-2 xl:gap-12">
        {filteredPosts.map((post) => (
          <PostCard key={post._id} post={post} href={`/posts/${post.slug.current}`} />
        ))}
      </div>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}
