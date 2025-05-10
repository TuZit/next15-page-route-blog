import React from "react";
import classes from "./post-item.module.css";
import Link from "next/link";
import Image from "next/image";

const PostItem = ({ post: { title, image, excerpt, date, slug } }) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <li className={classes.post}>
      <Link href={`/posts/${slug}`} legacyBehavior passHref>
        <a>
          <div className={classes.image}>
            <Image
              alt={title}
              width={300}
              height={200}
              src={`/images/posts/${slug}/${image}`}
            />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time datetime="">{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;
