import Layout from "../components/Layout";
import SpecificProjectSection from "../components/Specific-Project-Section";

const SpecificProjectPage = () => {
  return (
    <Layout>
      <section className="normal-page border-none grid gap-14">
        <h2 className="text-3xl font-bold">Project Details</h2>
        <SpecificProjectSection />
      </section>
    </Layout>
  );
};

export default SpecificProjectPage;
