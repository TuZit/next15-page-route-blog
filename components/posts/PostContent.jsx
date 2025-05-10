import React from "react";
import classes from "./post-content.module.css";
import PostHeader from "./PostHeader";
import ReactMarkdown from "react-markdown";

const PostContent = ({ slug }) => {
  //   const imgPath = `/images/posts/${slug}/shiba1.png`;
  const imgPath = `/images/posts/shiba/shiba1.png`;

  return (
    <article className={classes.content}>
      <PostHeader title={"Shiba"} image={imgPath} />
      Content
    </article>
  );
};

export default PostContent;
