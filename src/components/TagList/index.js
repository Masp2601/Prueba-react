import React, {useState, useEffect} from 'react';


import { HiOutlineEmojiSad } from 'react-icons/hi';

import axiosInstance from '../../axiosConfig';



const TagList = ({ updateTagSelected }) => {

  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [tagActive, setTagActive] = useState('');

  const getTags = async () => {

    setLoading(true);

    try {

      const axiosResponse = await axiosInstance('tag?limit=10');
      const { data } = axiosResponse.data;

      const randomNumber = Math.floor(Math.random() * data.length + 1);
      const itemsFiltered = data.filter(item => item !== '' && item.length > 2);

      setTags(itemsFiltered.slice(randomNumber, randomNumber + 10));

    } catch (error) {

      if (error?.error) {
        setError(error.error);
      } else {
        setError('Estamos trabajando para solucionar los Tags');
      }

    } finally {
      setLoading(false);
    }

  };

  const handleChangeTag = (newTag) => {

    if (newTag === tagActive) {
      setTagActive('');
      updateTagSelected(null);
    } else {
      setTagActive(newTag);
      updateTagSelected(newTag);
    }

  };

  useEffect(() => {
    getTags();
  }, []);

  return (
    <div className="tag-list">
      <h4 className="title">Listado de tags</h4>
      <p>El listado esta limitado a 10 tags para una mejor visualización</p>

      {loading && (
        <p className="loading-text">Cargando Tags..</p>
      )}

      {error && (
        <p className="no-registers">
          <span className="error-msg">{error}</span> <HiOutlineEmojiSad />
        </p>
      )}

      {tags.map((tag, index) => (
        <div
          key={index}
          className={`tag pointer ${tagActive === tag && 'tag-active'}`}
          onClick={() => handleChangeTag(tag)}
        >
          {tag}
        </div>
      ))}
    </div>
  )
}

export default TagList;
