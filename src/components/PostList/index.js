import * as React from 'react';
import './post-list.css';

import { HiOutlineEmojiSad } from 'react-icons/hi';

import axiosInstance from '../../axiosConfig';
import PostCard from '../PostCard';

const { useState, useEffect } = React;

const PostList = ({ tagSelected }) => {

  const [post, setPost] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadPost = async () => {

    setLoading(true);

    try {

      let endpoint = 'post';

      if (tagSelected) endpoint = `tag/${tagSelected}/post`;

      const axiosResponse = await axiosInstance(endpoint);
      const { data, total } = axiosResponse.data;

      setPost(data);
      setTotal(total);

    } catch (error) {

      if (error?.error) {
        setError(error.error);
      } else {
        setError('Ocurrio un error inesperado en la carga de los Post');
      }

    } finally {
      setLoading(false);
    }

  }

  useEffect(() => {
    loadPost();
    // eslint-disable-next-line
  }, [tagSelected]);

  return (
    <div className="post-list">

      {(total === 0 && !loading) && (
        <p className="no-registers">
          <span>No se encontrarón post a mostrar</span> <HiOutlineEmojiSad />
        </p>
      )}

      {loading && (
        <p className="loading-text">Cargando Datos..</p>
      )}

      {error && (
        <p className="no-registers">
          <span className="error-msg">{error}</span> <HiOutlineEmojiSad />
        </p>
      )}

      {!loading && post.map(post => (
        <PostCard
          key={post.id}
          id={post.id}
          image={post.image}
          likes={post.likes}
          text={post.text}
          creatorName={`${post.owner.firstName} ${post.owner.lastName}`}
          creatorImage={post.owner.picture}
          creatorID={post.owner.id}
          tags={post.tags}
        />
      ))}
    </div>
  )
}

export default PostList;
