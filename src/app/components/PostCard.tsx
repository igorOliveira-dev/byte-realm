import Link from "next/link";

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

const PostCard = ({ post, href }: { post: Post; href: string }) => {
  return (
    <Link href={href}>
      <div
        key={post._id}
        className="p-4 cursor-pointer hover-bg transition-all border border-2 custom-border-color rounded-xl post-card"
      >
        <img src={post.mainImage.asset.url} alt={post.mainImage.alt} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-bold">{post.title}</h3>
          <div className="flex items-center mt-4">
            <img
              src={post.author.image.asset.url}
              alt={post.author.name}
              className="w-10 h-10 rounded-full mr-4 border custom-border-color rounded-xl"
            />
            <div>
              <p className="font-semibold">{post.author.name}</p>
              <p className="text-sm">{new Date(post.publishedAt).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
