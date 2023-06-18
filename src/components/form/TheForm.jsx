import React, { Fragment } from "react";
import { Form } from "formik";
import { Link } from "react-router-dom";
import darkLogo from "../../assets/darkLogo.png";
import FieldForm from "./FieldForm";
import NeedHelp from "./NeedHelp";
import BottomCondition from "./BottomCondition";
import NewComer from "./NewComer";
import HaveAccount from "./HaveAccount";

const TheForm = ({
  errors,
  touched,
  handleChange,
  handleBlur,
  values,
  firstField,
  secondField,
  thirdField,
  fourthField,
  formName,
  loading,
}) => {
  return (
    <Form className="mb-4 w-[350px] mx-auto flex flex-col items-center rounded-md">
      <Link to="/">
        <img className="w-48 -my-[55px]" src={darkLogo} alt="" />
      </Link>
      <div className="w-full border border-zinc-200 p-6 mt-5 rounded-md">
        <h2 className="font-titleFont text-3xl font-medium mb-4">{formName}</h2>
        <div className="flex flex-col gap-3">
          <FieldForm
            values={values}
            errors={errors}
            touched={touched}
            handleBlur={handleBlur}
            handleChange={handleChange}
            name={firstField}
          />
          <FieldForm
            values={values}
            errors={errors}
            touched={touched}
            handleBlur={handleBlur}
            handleChange={handleChange}
            name={secondField}
          />
          {thirdField && (
            <FieldForm
              values={values}
              errors={errors}
              touched={touched}
              handleBlur={handleBlur}
              handleChange={handleChange}
              name={thirdField}
            />
          )}
          {fourthField && (
            <FieldForm
              values={values}
              errors={errors}
              touched={touched}
              handleBlur={handleBlur}
              handleChange={handleChange}
              name={fourthField}
              type="password"
              label="Re-enter password"
            />
          )}
        </div>
        {formName === "Sign in" ? (
          <Fragment>
            <BottomCondition value={"Sign in"} loading={loading} />
            <NeedHelp />
          </Fragment>
        ) : (
          <Fragment>
            <BottomCondition value={"Create account"} loading={loading} />
            <HaveAccount />
          </Fragment>
        )}
      </div>
      {formName === "Sign in" && <NewComer />}
    </Form>
  );
};

export default TheForm;
