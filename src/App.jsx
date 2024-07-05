import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPageSection from './pages/Landing-Page';
import AdminPage from './pages/AdminPage';
import { Toaster } from 'react-hot-toast';
import AdminPageEducationSectionPannel from './components/admin-page-components/AdminPage-EducationSection-Pannel';
import AdminPageAllProjectsPannel from './components/admin-page-components/AdminPage-AllProjects-Pannel';
import AdminPageBlogPannel from './components/admin-page-components/AdminPage-BlogSection-Pannel';
import AdminPageAwardSectionPannel from './components/admin-page-components/AdminPage-AwardSection-Pannel';
import AdminPageExperienceSectionPannel from './components/admin-page-components/AdminPage-ExperienceSection-Pannel';
import Test from './pages/Test';
import AdminPageFeaturedSectionPannel from './components/admin-page-components/AdminPage-Featured-Section-Pannel';
import SpecificProjectPage from './pages/Specific-Project-Page';

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<LandingPageSection />} />
        <Route path="/project/:title" element={<SpecificProjectPage/>} />
        <Route path="/test" element={<Test />} />
        <Route path="/admin" element={<AdminPage />}>
          <Route
            path="education-setting"
            element={<AdminPageEducationSectionPannel />}
          />
          <Route
            path="projects-setting"
            element={<AdminPageAllProjectsPannel />}
          />
          <Route
            path="feature-setting"
            element={<AdminPageFeaturedSectionPannel />}
          />
          <Route path="blog-setting" element={<AdminPageBlogPannel />} />
          <Route
            path="award-setting"
            element={<AdminPageAwardSectionPannel />}
          />
          <Route
            path="experience-setting"
            element={<AdminPageExperienceSectionPannel />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
