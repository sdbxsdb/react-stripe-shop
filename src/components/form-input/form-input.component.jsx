import './form-input.styles.scss';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      <input {...otherProps} className="form-input" />
      {label ? (
        <label
          type="text"
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
      
    </div>
  );
};

export default FormInput;
