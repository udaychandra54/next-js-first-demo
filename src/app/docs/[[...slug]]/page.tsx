import React from "react";

// Correct type for App Router's params, slug can be undefined for optional catch-all
const Docs = async ({ params }: { params: { slug?: string[] } }) => {
  // If slug is undefined (for /docs), treat it as an empty array
  const slug = params.slug || [];

  if (slug.length === 2) {
    return (
      <h2>
        Viewing docs for feature {slug[0]} and concept {slug[1]}
      </h2>
    );
  } else if (slug.length === 1) {
    return <h2>Viewing docs for feature {slug[0]}</h2>;
  } else if (slug.length === 3) {
    return <h2>Viewing docs with sub concept: {slug.join("/")}</h2>;
  }
  // This will now be rendered when slug.length is 0 (i.e., for /docs)
  return <h2>Docs home page</h2>;
};

export default Docs;
