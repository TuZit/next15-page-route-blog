import React from "react";
import classes from "./feature-post.module.css";
import PostGrid from "../../posts/post-grid";

const FeaturedPosteatured = ({ posts }) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Post</h2>

      <PostGrid posts={posts ?? []} />
    </section>
  );
};

export default FeaturedPosteatured;
