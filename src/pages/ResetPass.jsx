import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth, sendPasswordResetEmail } from "../firebase";
import { Formik } from "formik";
import FooterForm from "../components/form/FooterForm";
import { useNavigate } from "react-router";
import { Form } from "formik";
import { Link } from "react-router-dom";
import darkLogo from "../assets/darkLogo.png";
import FieldForm from "../components/form/FieldForm";

const ResetPass = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  return (
    <div className="w-full h-screen bg-white">
      <div className="w-full bg-white py-5">
        <Formik
          initialValues={{
            email: "",
          }}
          onSubmit={async (value) => {
            setLoading(true);
            try {
              await sendPasswordResetEmail(auth, value.email);
              toast.success("Sent Successfully!", {
                autoClose: 1000,
              });
              setTimeout(() => {
                navigate(-1);
              }, 2000);
            } catch (error) {
              console.log(error);
              setLoading(false);
              if (error.code === "auth/invalid-email") {
                toast.error(
                  "Invalid email format. Please enter a valid email address."
                );
              } else if (error.code === "auth/user-not-found") {
                toast.error(
                  "No user found with this email. Please check the email address and try again."
                );
              } else {
                toast.error(
                  "An error occurred while sending the password reset email. Please try again later."
                );
              }
            }
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur }) => (
            <Form className="mb-4 w-[350px] mx-auto flex flex-col items-center rounded-md">
              <Link to="/">
                <img className="w-48 -my-[55px]" src={darkLogo} alt="" />
              </Link>
              <div className="w-full border border-zinc-200 p-6 mt-5 rounded-md">
                <h2 className="font-titleFont text-3xl font-medium mb-4">
                  Password assistance
                </h2>
                <p className="text-sm mb-4">
                  Enter the email address associated with your Amazon account.
                </p>
                <div className="flex flex-col gap-3">
                  <FieldForm
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    name="email"
                  />
                </div>
                <button
                  className="disabled:cursor-wait disabled:bg-yellow-100 w-full py-1.5 border-none bg-yellow-300 rounded-md text-sm hover:bg-yellow-500 duration-100 active:bg-yellow-700 shadow-md mt-4"
                  type="submit"
                  disabled={loading}
                >
                  Send Reset Password Email
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

export default ResetPass;
