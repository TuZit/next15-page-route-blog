import React from "react";
import AllPosts from "../../components/posts/all-posts";
import { DUMMY_DATA } from "..";

function PostsPage() {
  return (
    <div>
      <AllPosts posts={DUMMY_DATA} />
    </div>
  );
}
export default PostsPage;
