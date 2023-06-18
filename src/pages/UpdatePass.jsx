import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  auth,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "../firebase";
import { Formik } from "formik";
import FooterForm from "../components/form/FooterForm";
import { useNavigate } from "react-router";
import { Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import darkLogo from "../assets/darkLogo.png";
import FieldForm from "../components/form/FieldForm";

const updatePasswordSchema = Yup.object().shape({
  currentPassword: Yup.string().required("Current password is required"),
  newPassword: Yup.string()
    .min(6, "Too Short!")
    .max(50, "Too Long!")
    .required("New password is required"),
  rePassword: Yup.string()
    .required("Please re-enter your new password")
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match"),
});

const UpdatePass = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  return (
    <div className="w-full h-screen bg-white">
      <div className="w-full bg-white py-5">
        <Formik
          initialValues={{
            currentPassword: "",
            newPassword: "",
            rePassword: "",
          }}
          validationSchema={updatePasswordSchema}
          onSubmit={async (values) => {
            console.log("wwww");
            setLoading(true);
            const user = auth.currentUser;
            try {
              const credential = EmailAuthProvider.credential(
                user.email,
                values.currentPassword
              );
              await reauthenticateWithCredential(user, credential);
              await updatePassword(user, values.newPassword);
              toast.success("Updated Successfully!", {
                autoClose: 1000,
              });
              setTimeout(() => {
                navigate(-1);
              }, 2000);
            } catch (error) {
              setLoading(false);
              if (error.code === "auth/wrong-password") {
                toast.error("Invalid current password");
              } else if (error.code === "auth/too-many-requests") {
                toast.error("Too many requests, please try again later");
              } else {
                toast.error("An error occurred, please try again later");
              }
            }
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur }) => (
            <Form className="mb-4 w-[360px] mx-auto flex flex-col items-center rounded-md">
              <Link to="/">
                <img className="w-48 -my-[55px]" src={darkLogo} alt="" />
              </Link>
              <div className="w-full border border-zinc-200 p-6 mt-5 rounded-md">
                <h2 className="font-titleFont text-3xl font-medium mb-4">
                  Change your password
                </h2>
                <p className="text-sm mb-4">
                  To change the password for your Amazon account, use this form.
                </p>
                <div className="flex flex-col gap-3">
                  <FieldForm
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    name="currentPassword"
                    id="currentPassword"
                    label="Current password"
                    type="password"
                  />
                  <FieldForm
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    name="newPassword"
                    id="newPassword"
                    label="New password"
                    type="password"
                  />
                  <FieldForm
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    name="rePassword"
                    id="rePassword"
                    label="Re-enter new password"
                    type="password"
                  />
                </div>
                <button
                  className="disabled:cursor-wait disabled:bg-yellow-100 w-full py-1.5 border-none bg-yellow-300 rounded-md text-sm hover:bg-yellow-500 duration-100 active:bg-yellow-700 shadow-md mt-4"
                  type="submit"
                  disabled={loading}
                >
                  Update
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <ToastContainer />
      </div>
      <div className="h-[100px] bg-gradient-to-b from-[#00000024] to-transparent via-[#00000008_3px] after:block after:content-['']  after:w-full after:h-[50px] after:bg-gradient-to-r after:from-white after:via-transparent after:to-white"></div>
      <FooterForm />
    </div>
  );
};

export default UpdatePass;
