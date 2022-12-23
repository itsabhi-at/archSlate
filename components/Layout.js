import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="">
      <Navbar />
      <div className="">
        <main>{children}</main>
      </div>
    </div>
  );
}

export default Layout;
