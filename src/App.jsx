import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPageSection from './pages/Landing-Page';
import AdminPage from './pages/AdminPage';
import { Toaster } from 'react-hot-toast';
import AdminPageEducationSectionPannel from './components/admin-page-components/AdminPage-EducationSection-Pannel';
import AdminPageAllProjectsPannel from './components/admin-page-components/AdminPage-AllProjects-Pannel';
import AdminPageFeaturedSectionPannel from './components/admin-page-components/Feature-Control-Section/AdminPage-Featured-Section-Pannel';
import AdminPageBlogPannel from './components/admin-page-components/AdminPage-BlogSection-Pannel';
import AdminPageAwardSectionPannel from './components/admin-page-components/AdminPage-AwardSection-Pannel';
import AdminPageExperienceSectionPannel from './components/admin-page-components/AdminPage-ExperienceSection-Pannel';
import Test from './pages/Test';

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<LandingPageSection />} />
        <Route path="/test" element={<Test />} />
        <Route path="/admin" element={<AdminPage />}>
          <Route
            path="education-setting"
            element={<AdminPageFeaturedSectionPannel />}
          />
          <Route
            path="projects-setting"
            element={<AdminPageFeaturedSectionPannel />}
          />
          <Route
            path="feature-setting"
            element={<AdminPageFeaturedSectionPannel />}
          />
          <Route
            path="blog-setting"
            element={<AdminPageFeaturedSectionPannel />}
          />
          <Route
            path="award-setting"
            element={<AdminPageFeaturedSectionPannel />}
          />
          <Route
            path="experience-setting"
            element={<AdminPageFeaturedSectionPannel />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
