export interface RichTextBlock {
  _type: string;
  _key: string;
  children?: {
    _key: string;
    _type: string;
    text: string;
    marks?: string[];
  }[];
  markDefs?: {
    _key: string;
    _type: string;
    href?: string;
  }[];
  style?: string;
}

export interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  body: RichTextBlock[];
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
