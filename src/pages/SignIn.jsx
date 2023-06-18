import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth, signInWithEmailAndPassword } from "../firebase";
import { useDispatch } from "react-redux";
import { signin } from "../state/authSlice";
import { Formik } from "formik";
import * as Yup from "yup";
import FooterForm from "../components/form/FooterForm";
import TheForm from "../components/form/TheForm";
import { useNavigate } from "react-router";

const signInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  return (
    <div className="w-full h-screen bg-white">
      <div className="w-full bg-white py-5">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={signInSchema}
          onSubmit={async (values) => {
            setLoading(true);
            try {
              await signInWithEmailAndPassword(
                auth,
                values.email,
                values.password
              ).then((userCredential) => {
                dispatch(
                  signin({
                    email: userCredential.user.email,
                    uid: userCredential.user.uid,
                    name: userCredential.user.displayName,
                  })
                );
                toast.success("Sign in Successfully!", {
                  autoClose: 1000,
                });
                setTimeout(() => {
                  navigate("/");
                }, 2000);
              });
            } catch (error) {
              setLoading(false);
              if (error.code === "auth/wrong-password") {
                toast.error("Invalid email or password.");
              } else if (error.code === "auth/user-not-found") {
                toast.error("No user found with this email address.");
              } else if (error.code === "auth/too-many-requests") {
                toast.error("Too many requested, Try again later");
              } else {
                toast.error("Sign-in failed. Please try again.");
              }
            }
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur }) => (
            <TheForm
              values={values}
              errors={errors}
              touched={touched}
              handleBlur={handleBlur}
              handleChange={handleChange}
              firstField="email"
              secondField="password"
              formName="Sign in"
              loading={loading}
            />
          )}
        </Formik>
        <ToastContainer />
      </div>
      <div className="h-[100px] bg-gradient-to-b from-[#00000024] to-transparent via-[#00000008_3px] after:block after:content-['']  after:w-full after:h-[50px] after:bg-gradient-to-r after:from-white after:via-transparent after:to-white"></div>
      <FooterForm />
    </div>
  );
};

export default SignIn;
