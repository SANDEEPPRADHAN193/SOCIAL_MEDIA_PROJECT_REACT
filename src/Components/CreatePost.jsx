import { useContext, useRef } from "react";
import { PostList } from "../Store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = Number(reactionsElement.current.value) || 0;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

   const newPost = {
  id: Date.now(),
  title: postTitle,
  body: postBody,
  reactions: {
    likes: reactions,
    dislikes: 0,
  },
  userId: Number(userId),
  tags: tags,
};

addPost(newPost); // ✅ Instantly updates UI

fetch("https://dummyjson.com/posts/add", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(newPost),
}).catch((err) => console.error(err));
}

  return (
    // <form className="create-post" onSubmit={handleSubmit}>
    //   <div className="mb-3">
    //     <label htmlFor="userId" className="form-label">
    //       User ID
    //     </label>
    //     <input
    //       type="text"
    //       ref={userIdElement}
    //       className="form-control"
    //       id="userId"
    //       placeholder="Enter your user id"
    //     />
    //   </div>
    //   <div className="mb-3">
    //     <label htmlFor="title" className="form-label">
    //       Post Title
    //     </label>
    //     <input
    //       type="text"
    //       ref={postTitleElement}
    //       className="form-control"
    //       id="title"
    //       placeholder="How are you feeling today..."
    //     />
    //   </div>
    //   <div className="mb-3">
    //     <label htmlFor="body" className="form-label">
    //       Post Content
    //     </label>
    //     <textarea
    //       rows="4"
    //       type="text"
    //       ref={postBodyElement}
    //       className="form-control"
    //       id="body"
    //       placeholder="How are you feeling today..."
    //     />
    //   </div>
    //   <div className="mb-3">
    //     <label htmlFor="reactions" className="form-label">
    //       Number of Reactions
    //     </label>
    //     <input
    //       type="text"
    //       ref={reactionsElement}
    //       className="form-control"
    //       id="reactions"
    //       placeholder="How many people reacted to this post"
    //     />
    //   </div>
    //   <div className="mb-3">
    //     <label htmlFor="tags" className="form-label">
    //       Enter your hashtags here
    //     </label>
    //     <input
    //       type="text"
    //       ref={tagsElement}
    //       className="form-control"
    //       id="tags"
    //       placeholder="Please enter tags using space"
    //     />
    //   </div>
    //   <button type="submit" className="btn btn-primary">
    //     Post
    //   </button>
    // </form>
    <div className="create-post-wrapper">
      <div className="create-post-card">
        <h3 className="mb-4 form-title">Create New Post</h3>

        <form className="create-post" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="userId" className="form-label">
              User ID
            </label>
            <input
              type="text"
              ref={userIdElement}
              className="form-control"
              id="userId"
              placeholder="Enter your user id"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Post Title
            </label>
            <input
              type="text"
              ref={postTitleElement}
              className="form-control"
              id="title"
              placeholder="How are you feeling today..."
            />
          </div>

          <div className="mb-3">
            <label htmlFor="body" className="form-label">
              Post Content
            </label>
            <textarea
              rows="4"
              ref={postBodyElement}
              className="form-control"
              id="body"
              placeholder="Share your thoughts..."
            />
          </div>

          <div className="mb-3">
            <label htmlFor="reactions" className="form-label">
              Number of Reactions
            </label>
            <input
              type="number"
              ref={reactionsElement}
              className="form-control"
              id="reactions"
              placeholder="0"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="tags" className="form-label">
              Enter Hashtags (space separated)
            </label>
            <input
              type="text"
              ref={tagsElement}
              className="form-control"
              id="tags"
              placeholder="#coding #react #life"
            />
          </div>

          <button type="submit" className="btn custom-submit-btn w-100">
            Publish Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
