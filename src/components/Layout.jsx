import Sidebar from "./Sidebar";
const Layout = ({ children }) => {
  return (
    <div className="flex justify-center bg-slate-700">
      <main
        className="w-full flex"
        style={{
          maxWidth: "1440px",
        }}
      >
        <Sidebar />
        <section>{children ? children : <p>Nothing Added</p>}</section>
      </main>
    </div>
  );
};

export default Layout;
