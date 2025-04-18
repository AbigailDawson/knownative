import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LandingPageNav from '../components/LandingPageHeader/LandingPageNav';
import LandingPageFooter from '../components/LandingPageFooter/LandingPageFooter';
import { client } from '../../services/prismic'; 
import './Blog.scss';  // Import SCSS file instead of CSS

export default function BlogPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await client.getAllByType('blog_post');
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
        <section className="blog__header">
          <h1>Blog</h1>
          <p className="blog__intro">
          Go behind the scenes to see how we're building KnowNative, the problems we're solving, and what drives our vision for the product. In this blog, I'll be sharing insights on educational technology, how we're building a better experience for learners and where we’re headed next.
          </p>
        </section>
        <section className="posts__list">
          {posts.map((post) => (
            <Link to={`/post/${post.id}`} key={post.id} className="post__card-link">
              <div className="post__card">
                <h2 className="post__title">{post.data.title[0].text}</h2>
                <p className="post__author">By {post.data.author}</p>
                <p className="post__date">
                  {new Date(post.data.date).toLocaleDateString()}
                </p>
                <p className="post__caption">{post.data.caption[0].text}</p>
              </div>
            </Link>
          ))}
        </section>
        <LandingPageFooter />
        </div>
    </>
  );
}
