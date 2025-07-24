import Link from "next/link";
import React from "react";
import { use } from "react";

const NewsArticle = ({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "fr" | "es" }>;
}) => {
  const { articleId } = use(params);
  const { lang } = use(searchParams);
  return (
    <div>
      <h2>News Article</h2>
      <h3>reading in {lang}</h3>
      <Link href={`/article/${articleId}?lan=en`}>English</Link>
      <Link href={`/article/${articleId}?lan=fr`}>French</Link>
      <Link href={`/article/${articleId}?lan=es`}>Spansih</Link>
    </div>
  );
};

export default NewsArticle;
