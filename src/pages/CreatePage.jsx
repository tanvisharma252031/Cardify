
import Hero from "../components/Hero";
import CreateCardForm from "../components/CreateCardForm";

function CreatePage({ formData, setFormData }) {
  return (
    <main className="main-content">
      <Hero />

      <CreateCardForm
        formData={formData}
        setFormData={setFormData}
      />
    </main>
  );
}

export default CreatePage;
