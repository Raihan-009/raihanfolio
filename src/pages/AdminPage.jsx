// import Layout from '../components/Layout';
// import AdminPageAllProjectsPannel from '../components/admin-page-components/AdminPage-AllProjects-Pannel';
// import AdminPageAwardSectionPannel from '../components/admin-page-components/AdminPage-AwardSection-Pannel';
// import AdminPageFeaturedSectionPannel from '../components/admin-page-components/Feature-Control-Section/AdminPage-Featured-Section-Pannel';
// import AdminPageBlogPannel from '../components/admin-page-components/AdminPage-BlogSection-Pannel';
// import AdminPageExperienceSectionPannel from '../components/admin-page-components/AdminPage-ExperienceSection-Pannel';
// import AdminPageEducationSectionPannel from '../components/admin-page-components/AdminPage-EducationSection-Pannel';
// import Form from '../components/Form';
import { useState } from 'react';
import { useFirebase } from '../contexts/FirebaseContext';

const LoginForm = () => {
  const firebase = useFirebase();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    firebase
      .signUpUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <div className="bg-zinc-100">
      <div className="px-5 py-10 max-w-4xl mx-auto h-screen">
        <div className="flex flex-col items-center justify-center h-full space-y-5">
          <form className="flex flex-col space-y-5" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              className="p-3 border border-slate-300 text-black rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="p-3 border text-black  border-slate-300 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="p-3 bg-sky-500 text-white rounded">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
const AdminPage = () => {
  return (
    <>
      <LoginForm />
      {/* <div className="bg-zinc-100">
        <div className="px-5 py-10 max-w-4xl mx-auto h-screen">
          <div className="flex flex-row h-full space-x-5 w-full">
            <div className="flex flex-col w-1/5 space-y-2">
              <a
                href="#"
                className="flex flex-col-2 items-center justify-between p-2 pl-3 text-slate-500 hover:text-black"
              >
                <div className="font-bold">entry 1</div>
              </a>
              <a
                href="#"
                className="flex flex-col-2 items-center justify-between p-2 pl-3 text-slate-500 hover:text-black"
              >
                <div className="font-bold">entry 2</div>
                <div className="py-0.5 px-2 text-sm font-bold text-center border-l">
                  3
                </div>
              </a>
              <a
                href="#"
                className="flex flex-col-2 items-center justify-between p-2 text-sky-500 border-l-4 border-sky-500"
              >
                <div className="font-bold">entry 3</div>
              </a>
            </div>
            <div className="flex flex-col w-4/5 space-y-2 p-5 rounded-md bg-white">
              <a
                href="#"
                className="flex flex-col-2 items-center justify-between p-2 rounded text-slate-500 hover:ring-1 hover:ring-sky-200"
              >
                entry 1
              </a>
              <a
                href="#"
                className="flex flex-col-2 items-center justify-between p-2 rounded text-slate-500 hover:ring-1 hover:ring-sky-200"
              >
                entry 2
              </a>
              <a
                href="#"
                className="flex flex-col-2 items-center justify-between p-2 rounded text-slate-500 hover:ring-1 hover:ring-sky-200"
              >
                entry 3
                <div className="py-0.5 px-2 rounded-md bg-red-100 text-sm font-bold text-center text-red-400">
                  error
                </div>
              </a>
            </div>
          </div>
        </div>
      </div> */}

      {/* <AdminPageFeaturedSectionPannel />
      <Form />
      <AdminPageAllProjectsPannel />
      <AdminPageAwardSectionPannel />
      <AdminPageBlogPannel />
      <AdminPageExperienceSectionPannel />
      <AdminPageEducationSectionPannel /> */}
    </>
  );
};

export default AdminPage;
