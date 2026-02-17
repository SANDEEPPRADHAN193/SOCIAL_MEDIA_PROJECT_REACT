const Sidebar = ({ selectedTab, setSelectedTab }) => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 sidebar"
      // style={{ width: "180px" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg
          className="bi pe-none me-2"
          width="40"
          height="32"
          aria-hidden="true"
        >
          <use xlinkHref="#bootstrap" />
        </svg>
        <span className="fs-4">
          <div className="sidebar-logo">
            <div className="logo-icon">S</div>
            <span className="logo-text">SocialApp</span>
          </div>
        </span>
      </a>

      <hr />

      <ul className="nav flex-column mb-auto sidebar-nav">
        <li>
          <button
            type="button"
            onClick={() => setSelectedTab("Home")}
            className={`nav-btn ${selectedTab === "Home" ? "active" : ""}`}
          >
            Home
          </button>
        </li>

        <li>
          <button
            type="button"
            onClick={() => setSelectedTab("Create Post")}
            className={`nav-btn ${
              selectedTab === "Create Post" ? "active" : ""
            }`}
          >
            Create Post
          </button>
        </li>
      </ul>

      <hr />

      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>mdo</strong>
        </a>

        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
