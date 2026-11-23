
import "../styles/FormField.css";

function FormField({
  label,
  name,
  placeholder,
  icon,
  value,
  onChange,
  required = false,
  type = "text",
  textarea = false,
}) {
  return (
    <div className="form-field">

      <div className="field-icon">
        {icon}
      </div>

      <div className="field-content">

        <label htmlFor={name}>
          {label}
          {required && <span className="required"> *</span>}
        </label>

        {textarea ? (
          <textarea
            id={name}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
          />
        ) : (
          <input
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
          />
        )}

      </div>
    </div>
  );
}

export default FormField;
