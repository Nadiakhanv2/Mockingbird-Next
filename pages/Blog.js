import React, { useEffect, useState } from 'react'
import styles from "../styles/blog.module.css";
import Link from "next/link";


//Step 1 --- collect all the files from blogdirectory 
// step 2 -- Iterate through them and display them

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    console.log("Blog");
    fetch("http://localhost:3000/api/blogs").then((a) => {
      return a.json();
    })
      .then((parsed) => {
        setBlogs(parsed);
    })
  } , []);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>Latest Blogs</h2>
        {blogs.map((blogitem) => {
          return (
            <div className={styles.blogItem} key={blogitem.slug}>
              <Link href={`/blogpost/${blogitem.slug}`}>
                <h3>{blogitem.title}</h3>
              </Link>
              <p >
                {blogitem.content.substr(0, 100)}....
              </p>
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default Blog
