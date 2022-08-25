import React, { useEffect, useState } from 'react';

const MyPage = () => {
  const [posts, setPosts]= useState([]);

  const fetchData = async () => {
    await fetch("https://api.freerealapi.com/blogs").then((response) => {
      return response.json();
    }).then((data) => {
      setPosts(data)
    })
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <ul>
        {posts.blogs.map((itm, i) =>
          <li key={i}>{itm.title}</li>
        )}
      </ul>
    </>
  );
};

export default MyPage;