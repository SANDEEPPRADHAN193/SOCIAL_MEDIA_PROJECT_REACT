import { useContext, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../Store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import { useEffect } from "react";

const PostList = () => {
  const { postList, addInitialPost } = useContext(PostListData);
  //One of the methods to fetch the initial set of data using use states.
  // const [dataFetched, setDataFetched] = useState(false);
  // if (!dataFetched) {
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPost(data.posts);
  //     });
  //     setDataFetched(true);
  // }

  // Use Effect can be used any number of times
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
      });
  },[]);
  // console.log(postList);
  //   return (
  //     <>
  //       {postList.length === 0 && (
  //         <WelcomeMessage onGetPostsClick={handleGetPostsClick} />
  //       )}
  //       {postList.map((post) => (
  //         <Post post={post} key={post.id} />
  //       ))}
  //     </>
  //   );
  // };
  return (
    <>
      {postList.length === 0 && <WelcomeMessage />}

      <div className="posts-container">
        {postList.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </>
  );
};

export default PostList;
