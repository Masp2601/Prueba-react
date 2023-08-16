import * as React from 'react';

import { HiHeart, HiOutlineChatAlt2 } from 'react-icons/hi';

import './post-card.css';

import Modal from '../Modal';
import axiosInstance from '../../axiosConfig';
import Loader from '../Loader';
import UserCard from '../UserCard';
import CommentCard from '../CommentCard.js';

const { useState } = React;

const PostCard = ({
  id,
  image,
  likes,
  text,
  creatorName,
  creatorImage,
  creatorID,
  tags
}) => {

  const [userModalOptions, setUserModalOptions] = useState({
    show: false,
    loading: false,
    error: null,
    data: null
  });

  const [commentsModalOptions, setCommentsModalOptions] = useState({
    show: false,
    loading: false,
    error: null,
    comments: []
  });

  const handleOpenUserModal = () => setUserModalOptions(prevState => ({ ...prevState, show: true }));

  const handleCloseUserModal = () => setUserModalOptions({ show: false, loading: false, error: null, data: null });

  const handleOpenCommentsModal = () => setCommentsModalOptions(prevState => ({ ...prevState, show: true }));

  const handleCloseCommentsModal = () => setCommentsModalOptions({ show: false, loading: false, error: null, comments: [] });

  const getUserInfo = async () => {

    setUserModalOptions(prevState => ({ ...prevState, loading: true }));

    try {

      const axiosResponse = await axiosInstance(`user/${creatorID}`);
      const user = axiosResponse.data;

      setUserModalOptions(prevState => ({
        ...prevState,
        data: user
      }));

    } catch (error) {

      if (error?.error) {
        setUserModalOptions(prevState => ({ ...prevState, error: error?.error }));
      } else {
        setUserModalOptions(prevState => ({ ...prevState, error: 'Ocurrio un error inesperado' }));
      }

    } finally {
      setUserModalOptions(prevState => ({ ...prevState, loading: false }));
    }

  };

  const getPostComments = async () => {

    setCommentsModalOptions(prevState => ({ ...prevState, loading: true }));

    try {

      const axiosResponse = await axiosInstance(`post/${id}/comment`);
      const { data } = axiosResponse.data;

      setCommentsModalOptions(prevState => ({
        ...prevState,
        comments: data
      }));

    } catch (error) {

      if (error?.error) {
        setCommentsModalOptions(prevState => ({ ...prevState, error: error?.error }));
      } else {
        setCommentsModalOptions(prevState => ({ ...prevState, error: 'Ocurrio un error inesperado' }));
      }

    } finally {
      setCommentsModalOptions(prevState => ({ ...prevState, loading: false }));
    }

  };

  return (
    <div className="post">

      <div className="header-post">
        <img
          src={creatorImage}
          alt={creatorName}
          onClick={handleOpenUserModal}
        />
        <p>{creatorName}</p>
      </div>

      <img src={image} alt="Thumbnail" className="cover" />
      <p className="text-content">{text}</p>

      <div className="tags">
        {tags.map((tag, index) =>
          <div key={index} className="tag">{tag}</div>
        )}
      </div>

      <div className="feedback">
        <span className="icon">
          <HiHeart className="likes" size="1.5em" />
          <span>{likes}</span>
        </span>
        <span onClick={handleOpenCommentsModal} className="icon pointer">
          <HiOutlineChatAlt2 size="1.5em" />
          <span>Comentarios</span>
        </span>
      </div>

      <Modal
        title={`[Perfil] ${userModalOptions.data?.firstName || ''} ${userModalOptions.data?.lastName || ''}`}
        onClose={handleCloseUserModal}
        show={userModalOptions.show}
        transitionProps={{
          onEntered: getUserInfo
        }}
      >
        {userModalOptions.loading && <Loader />}

        {userModalOptions.error && (
          <p className="no-registers">
            <span className="error-msg">{userModalOptions.error}</span>
          </p>
        )}

        {(!userModalOptions.loading && !userModalOptions.error) && (
          <UserCard {...userModalOptions.data} />
        )}
      </Modal>

      <Modal
        title="Comentarios"
        onClose={handleCloseCommentsModal}
        show={commentsModalOptions.show}
        position="right"
        transitionProps={{ onEntered: getPostComments }}
      >
        {commentsModalOptions.loading && <Loader />}

        {commentsModalOptions.error && (
          <p className="no-registers">
            <span className="error-msg">{commentsModalOptions.error}</span>
          </p>
        )}

        {(!commentsModalOptions.loading && !commentsModalOptions.error) && commentsModalOptions.comments.map(item => (
          <CommentCard
            key={item.id}
            owner={item.owner}
            message={item.message}
            publishDate={item.publishDate}
          />
        ))}

      </Modal>

    </div>
  );
}

export default PostCard;
