import AdminSidebar from "./AdminSidebar";
import Sidebar from "./Sidebar";
const Layout = ({ children, admin = false }) => {
  return (
    <div className="flex justify-center bg-contents font-inter">
      <main className="w-full flex">
        {admin ? <AdminSidebar /> : <Sidebar />}
        <section className="px-20">
          {children ? children : <p>Nothing Added</p>}
        </section>
      </main>
    </div>
  );
};

export default Layout;
