import React from "react";
import { Field, ErrorMessage } from "formik";

const FieldForm = ({ values, errors, touched, handleChange, handleBlur , name , type, label}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium">
        {label
          ? label
          : name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
      <Field
        className={` w-full py-1 border ${
          errors[name] && touched[name] ? "border-red-500" : "border-zinc-400"
        } px-2 text-base rounded-md outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100 `}
        type={type ? type: name}
        id={name}
        name={name}
        autoComplete={name}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values[name]}
      />
      <ErrorMessage
        component="div"
        name={name}
        className="text-red-500 text-sm"
      />
    </div>
  );
};

export default FieldForm;
