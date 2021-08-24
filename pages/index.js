import Head from "next/head";
import Image from "next/image";
import PostsList from "../components/PostsList";
import { fetchPosts } from "../redux/reducers/postsReducer";
import { wrapper } from "../redux/store";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <PostsList />
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async() => {
  store.dispatch(fetchPosts());
});
