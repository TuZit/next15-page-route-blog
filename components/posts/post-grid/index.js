import React from "react";
import classes from "./post-grid.module.css";
import PostItem from "../post-item";

const PostGrid = ({ posts }) => {
  return (
    <ul className={classes.grid}>
      {posts?.map((post, ind) => (
        <PostItem key={ind} />
      ))}
    </ul>
  );
};

export default PostGrid;
