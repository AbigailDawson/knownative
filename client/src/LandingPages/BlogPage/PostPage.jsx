import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LandingPageNav from '../components/LandingPageHeader/LandingPageNav';
import LandingPageFooter from '../components/LandingPageFooter/LandingPageFooter';
import { client } from '../../services/prismic'; // Prismic client import
import './Blog.css'; // Ensure the PostPage stylesheet is imported

export default function PostPage() {
  const { postId } = useParams(); // Get postId from the URL
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // Fetch individual post by ID
        const post = await client.getByID(postId);
        setPost(post);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [postId]);

  if (!post) return <div>Loading...</div>;

  return (
    <>
      <div className="container">
        <LandingPageNav />
        <section className="post">
          <img 
            src={post.data.cover_image.url} 
            alt={post.data.title[0].text} 
            className="post-cover-image" 
          />
          <h1 className="post-title">{post.data.title[0].text}</h1>
          <p className="post-author">By {post.data.author[0].text}</p> {/* Author's name */}
          <p className="post-date">
            {new Date(post.data.date).toLocaleDateString()} {/* Format the date */}
          </p>
          <div 
            className="post-content" 
            dangerouslySetInnerHTML={{ __html: post.data.content[0].text }} // Display post content
          />
        </section>
        <LandingPageFooter />
      </div>
    </>
  );
}
