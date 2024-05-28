import Sidebar from "./Sidebar";
const Layout = ({ children }) => {
  return (
    <main
      className="w-full"
      style={{
        minHeight: "70vh",
        backgroundColor: "aliceblue",
        maxWidth: "1440px",
      }}
    >
      <Sidebar />
      <section>{children ? children : <p>Nothing Added</p>}</section>
    </main>
  );
};

export default Layout;
