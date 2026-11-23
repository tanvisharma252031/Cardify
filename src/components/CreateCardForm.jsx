
import {
  UserRound,
  BriefcaseBusiness,
  Mail,
  Phone,
  Building2,
  ClipboardList,
  Link,
  ArrowRight,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import FormField from "./FormField";
import "../styles/CreateCardForm.css";

function CreateCardForm({ formData, setFormData }) {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/download");
  };

  const fields = [
    {
      label: "Full Name",
      name: "fullName",
      placeholder: "e.g. Tanvi Sharma",
      icon: <UserRound />,
      required: true,
    },
    {
      label: "Professional Role",
      name: "role",
      placeholder: "e.g. Frontend Developer",
      icon: <BriefcaseBusiness />,
      required: true,
    },
    {
      label: "Email Address",
      name: "email",
      placeholder: "e.g. tanvi@gmail.com",
      icon: <Mail />,
      type: "email",
      required: true,
    },
    {
      label: "Phone Number",
      name: "phone",
      placeholder: "e.g. +91 98765 43210",
      icon: <Phone />,
      type: "tel",
      required: true,
    },
    {
      label: "Company / Organisation",
      name: "company",
      placeholder: "e.g. TechNova",
      icon: <Building2 />,
    },
    {
      label: "Short Professional Description",
      name: "description",
      placeholder: "Tell us about your professional background...",
      icon: <ClipboardList />,
      textarea: true,
    },
    {
      label: "Website",
      name: "website",
      placeholder: "e.g. www.yourwebsite.com",
      icon: <Link />,
      type: "url",
    },
  ];

  return (
    <section className="create-form-container" id="create">
      <form
        className="create-card-form"
        onSubmit={handleSubmit}
      >
        <div className="form-grid">
          {fields.map((field) => (
            <FormField
              key={field.name}
              {...field}
              value={formData[field.name]}
              onChange={handleChange}
            />
          ))}
        </div>

        <button type="submit" className="generate-btn">
          Generate My Card
          <ArrowRight size={19} />
        </button>
      </form>
    </section>
  );
}

export default CreateCardForm;
