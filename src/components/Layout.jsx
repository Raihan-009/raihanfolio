import Sidebar from "./Sidebar";
const Layout = ({ children }) => {
  return (
    <div className="flex justify-center bg-contents font-inter">
      <main
        className="w-full flex"
        // style={{
        //   maxWidth: "1440px",
        // }}
      >
        <Sidebar />
        <section className="px-20">{children ? children : <p>Nothing Added</p>}</section>
      </main>
    </div>
  );
};

export default Layout;
