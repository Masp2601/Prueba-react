import * as React from 'react';

import Header from '../components/Header';
import PostList from '../components/PostList';
import TagList from '../components/TagList';

const { useState } = React;

const Home = () => {

  const [tagSelected, setTagSelected] = useState(null);

  return (
    <div className="main-content">
      <Header />

      <div className="content">
        <TagList updateTagSelected={setTagSelected} />
        <PostList tagSelected={tagSelected} />
      </div>
    </div>
  )
}

export default Home;
