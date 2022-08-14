import React from 'react'
import styles from "../styles/blog.module.css";
import Link from "next/link";



const Blog = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>Latest Blogs</h2>
        <div className={styles.blogItem}>
          <Link href={"/blogpost/learn-javascript"}>
            <h3>How to learn JavaScript in 2k22</h3>
          </Link>
          <p>
            JavaScript is a programming language that allows you to write code
            that can be run on a web browser.
          </p>
        </div>
        <div className={styles.blogItem}>
          <h3>How to learn JavaScript in 2k22</h3>
          <p>
            JavaScript is a programming language that allows you to write code
            that can be run on a web browser.
          </p>
        </div>
        <div className={styles.blogItem}>
          <h3>How to learn JavaScript in 2k22</h3>
          <p>
            JavaScript is a programming language that allows you to write code
            that can be run on a web browser.
          </p>
        </div>
        
      </main>
    </div>
  );
}

export default Blog
