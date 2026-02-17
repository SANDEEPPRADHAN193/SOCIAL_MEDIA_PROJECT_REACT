import { useContext, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../Store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import { useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, fetching } = useContext(PostListData);
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
  // useEffect(() => {
  //   setFetching(true);
  //   // console.log("Fetch Started");
  //   const controller = new AbortController();
  //   const signal = controller.signal;
  //   fetch("https://dummyjson.com/posts", { signal })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPost(data.posts);
  //       setFetching(false);
  //       console.log("Fetch Returned");
  //     });
  //   // console.log("Fetch Ended");
  //   return () => {
  //     console.log("Cleaning up use Effects");
  //     controller.abort();
  //   };
  // }, []);

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
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}

      <div className="posts-container">
        {!fetching &&
          postList.map((post) => <Post post={post} key={post.id} />)}
      </div>
    </>
  );
};

export default PostList;
