function NavBar({ setPage }) {
  return (
    <div>
      <a href="#" style={{ padding: "30px" }} onClick={() => setPage("home")}>
        Home
      </a>

      <a href="#" style={{ padding: "30px" }} onClick={() => setPage("about")}>
        About
      </a>
    </div>
  );
}

export default NavBar;
