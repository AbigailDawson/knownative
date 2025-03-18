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
        console.log(post);
        setPost(post);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [postId]);

  if (!post) return <div>Loading...</div>;

  const renderContent = (content) => {
    return content.map((block, index) => {
      switch (block.type) {
        case 'paragraph':
          return <p key={index} className="post-paragraph">{block.text}</p>;
        case 'heading2':
          return <h2 key={index} className="post-heading2">{block.text}</h2>;
        default:
          return null;
      }
    });
  };

  return (
    <>
      <div className="container">
        <LandingPageNav />
        <section className="post">
          <h1 className="post-title">{post.data.title[0].text}</h1>
          <p className="post-author">By {post.data.author}</p>
          <p className="post-date">
            {new Date(post.data.date).toLocaleDateString()}
          </p>
          <div className="post-content">
            {renderContent(post.data.content)}
          </div>
        </section>
        <LandingPageFooter />
      </div>
    </>
  );
}
