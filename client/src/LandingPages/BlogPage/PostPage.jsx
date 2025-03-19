import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LandingPageNav from '../components/LandingPageHeader/LandingPageNav';
import LandingPageFooter from '../components/LandingPageFooter/LandingPageFooter';
import { client } from '../../services/prismic';
import { PrismicRichText } from '@prismicio/react';
import './Blog.scss';  // Import SCSS file instead of CSS

export default function PostPage() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
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

  const components = {
    heading1: ({ children }) => <h1 className="post__heading">{children}</h1>,
    paragraph: ({ children }) => <p className="post__paragraph">{children}</p>,
  };

  return (
    <>
      <div className="container">
        <LandingPageNav />
        <section className="post">
          <h1 className="post__title">{post.data.title[0].text}</h1>
          <p className="post__author">By {post.data.author}</p>
          <p className="post__date">
            {new Date(post.data.date).toLocaleDateString()}
          </p>
          <div className="post__content">
            <PrismicRichText field={post.data.content} components={components} />
          </div>
        </section>
        <LandingPageFooter />
      </div>
    </>
  );
}
