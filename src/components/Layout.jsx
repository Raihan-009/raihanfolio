
const Layout = ({ children, admin = false }) => {
  return (
    <div className="flex justify-center bg-contents font-inter">
      <main className="w-full flex">
        <section className="">
          {children ? children : <p>Nothing Added</p>}
        </section>
      </main>
    </div>
  );
};

export default Layout;
