import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import CreatePost from "./Components/CreatePost";
import Post from "./Components/Post";
import PostList from "./Components/PostList";
import { useState } from "react";
import PostListProvider from "./Store/post-list-store";

// function App() {
//   const [selectedTab,setSelectedTab]=useState("Home");

//   return (
//     <PostListProvider>
//       <div className="app-container">
//         <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>
//         <div className="content">
//           <Header></Header>
//           {selectedTab==="Home"?<PostList></PostList>:<CreatePost></CreatePost>}
//           <Footer></Footer>
//         </div>
//       </div>
//     </PostListProvider>
//   );
// }
function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>

      <Header />   {/* 🔥 Move header here */}

      <div className="app-container d-flex">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />

        <div className="content">
          {selectedTab === "Home" ? (
            <PostList />
          ) : (
            <CreatePost />
          )}
          <Footer />
        </div>
      </div>

    </PostListProvider>
  );
}


export default App;
