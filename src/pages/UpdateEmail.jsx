import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth, updateEmail } from "../firebase";
import { useSelector, useDispatch } from "react-redux";
import { signin } from "../state/authSlice";
import { Formik } from "formik";
import FooterForm from "../components/form/FooterForm";
import { useNavigate } from "react-router";
import { Form } from "formik";
import { Link } from "react-router-dom";
import darkLogo from "../assets/darkLogo.png";
import FieldForm from "../components/form/FieldForm";

const UpdateEmail = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
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
            const user = auth.currentUser
            try {
              if (user) {
                await updateEmail(user, value.email);
              }
              toast.success("Updated Successfully!", {
                autoClose: 1000,
              });
              dispatch(
                signin({
                  email: user.email,
                  uid: user.uid,
                  name: user.displayName,
                })
              );
              setTimeout(() => {
                navigate(-1);
              }, 2000);
            } catch (error) {
              console.log(error);
              setLoading(false);
              if (error.code === "auth/requires-recent-login") {
                toast.error(
                  "You need to re-sign in before updating your email."
                );
              } else if (error.code === "auth/invalid-email") {
                toast.error(
                  "Invalid email format. Please enter a valid email address."
                );
              } else if (error.code === "auth/email-already-in-use") {
                toast.error(
                  "This email is already in use. Please use a different email address."
                );
              } else {
                toast.error(
                  "An error occurred while updating your email. Please try again later."
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
                  Change your email address
                </h2>
                <p className="text-sm mb-4">
                  Current email address: {user.email}
                </p>
                <p className="text-sm mb-4">
                  Enter the new email address you would like to associate with
                  your account below.{" "}
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

export default UpdateEmail;
