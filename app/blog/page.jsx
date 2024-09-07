import React from 'react';
import Link from 'next/link';

const BlogPost = () => {
  return (
    <main>
        <h1>Blog Post</h1>
        <p>
            <Link href='/blog/post-1'>Post 1</Link>
        </p>
        <p>
            <Link href='/blog/post-2'>Post 2</Link>
        </p>
    </main>
  )
}

export default BlogPost