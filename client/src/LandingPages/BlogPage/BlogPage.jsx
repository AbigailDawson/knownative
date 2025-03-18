import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LandingPageNav from '../components/LandingPageHeader/LandingPageNav';
import LandingPageFooter from '../components/LandingPageFooter/LandingPageFooter';
import { client } from '../../services/prismic'; // Prismic client import
import './Blog.css'; // Make sure the stylesheet is being imported

export default function BlogPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Fetch all blog posts from Prismic
        const posts = await client.getAllByType('blog_post')
        setPosts(posts);
        console.log(posts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <div className="container">
        <LandingPageNav />
        <section className="blog-header">
          <h1>Blog</h1>
          <p className="blog-intro">
            Welcome to the blog! Stay tuned for insightful articles and updates.
          </p>
        </section>
        <section className="posts-list">
          {posts.map((post) => (
            <div className="post-card" key={post.id}>
              <h2 className="post-title">
                <Link to={`/post/${post.id}`}>{post.data.title[0].text}</Link>
              </h2>
              <p className="post-author">By {post.data.author}</p>
              <p className="post-date">
                {new Date(post.data.date).toLocaleDateString()}
              </p>
              <p className="post-caption">
                {post.data.caption[0].text}
              </p>
            </div>
          ))}
        </section>
        <LandingPageFooter />
      </div>
    </>
  );
}
