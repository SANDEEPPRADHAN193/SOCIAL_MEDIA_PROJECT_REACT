const WelcomeMessage = ({ onGetPostsClick }) => {
  return (
    <center className="Welcome-Message">
      <h1>There are no Posts in here yet.</h1>
      {/* <button
        type="button"
        className="btn btn-primary"
        onClick={onGetPostsClick}
      >
        Get Posts from Server
      </button> */}
    </center>
  );
};
export default WelcomeMessage;
