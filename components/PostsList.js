import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/reducers/postsReducer";

const PostsList = () => {
  const { posts, error, loading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchPosts());
//   }, [dispatch]);
  return (
    <div>
      {error ? (
        error
      ) : loading ? (
        <h2>Загрузка...</h2>
      ) : posts.length > 0 ? (
        posts.map((item) => <div key={item.id}>{item.id}</div>)
      ) : (
        "нет данных"
      )}
    </div>
  );
};

export default PostsList;
