"use client";
import { createContext, useState, useEffect } from "react";
import { fetchPosts } from "../utils/fetchPost";

interface Post {
  _id: string;
  title: string;
  body: any[];
  mainImage: {
    asset: {
      url: string;
    };
    alt: string;
  };
  author: {
    name: string;
    image: {
      asset: {
        url: string;
      };
    };
  };
  publishedAt: string;
  slug: {
    current: string;
  };
}

interface SanityContextType {
  posts: Post[];
  isLoading: boolean;
}

export const SanityContext = createContext<SanityContextType | null>(null);

export function SanityContextProvider({ children }: { children: React.ReactNode }) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const fetchedPosts = await fetchPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setIsLoading(false);
      }
    };
    getPosts();
  }, []);

  return <SanityContext.Provider value={{ posts, isLoading }}>{children}</SanityContext.Provider>;
}
