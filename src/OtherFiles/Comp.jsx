import wallpaperimage from "./../Assets/wallpaperflare.com_wallpaper.jpg";

function Comp() {
  return (
    <div>
      <h1>Comp</h1>
      <img
        src={wallpaperimage}
        style={{
          width: "100vw",
          height: "100vh",
        }}
      />
    </div>
  );
}

export default Comp;
