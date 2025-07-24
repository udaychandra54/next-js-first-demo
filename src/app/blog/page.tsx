import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

const Blog = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("intentional delay");
    }, 1000);
  });
  return <div>Blog page</div>;
};

export default Blog;
