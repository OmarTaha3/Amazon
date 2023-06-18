import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
  db,
} from "../firebase";
import { setDoc, doc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import FooterForm from "../components/form/FooterForm";
import TheForm from "../components/form/TheForm";
import { signin } from "../state/authSlice";
import { useNavigate } from "react-router";
import { useState } from "react";

const registrationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(50, "Too Long!")
    .required("Password is required"),
  rePassword: Yup.string()
    .required("Please re-enter your password")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  return (
    <div className="w-full h-screen bg-white">
      <div className="w-full bg-white py-5">
        <ToastContainer />
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            rePassword: "",
          }}
          validationSchema={registrationSchema}
          onSubmit={async (values) => {
            setLoading(true);
            try {
              const userCredential = await createUserWithEmailAndPassword(
                auth,
                values.email,
                values.password
              );
              await updateProfile(userCredential.user, {
                displayName: values.name,
              });
              dispatch(
                signin({
                  name: userCredential.user.displayName,
                  email: userCredential.user.email,
                  uid: userCredential.user.uid,
                })
              );
              await setDoc(doc(db, "users", userCredential.user.uid), {
                name: userCredential.user.displayName,
                email: userCredential.user.email,
                uid: userCredential.user.uid,
              });
              toast.success("Account Created!", {
                autoClose: 1000,
              });
              setTimeout(() => {
                navigate("/");
              }, 2500);
            } catch (error) {
              if (error.code === "auth/email-already-in-use") {
                toast.error(
                  "An account with this email address already exists."
                );
              } else if (error.code === "auth/too-many-requests") {
                toast.error("Too many requested, Try again later");
              } else {
                toast.error("An error occurred. Please try again ");
              }
              setLoading(false);
            }
          }}
        >
          {({ errors, touched, handleChange, handleBlur, values }) => (
            <TheForm
              values={values}
              errors={errors}
              touched={touched}
              handleBlur={handleBlur}
              handleChange={handleChange}
              firstField="name"
              secondField="email"
              thirdField="password"
              fourthField="rePassword"
              formName="Create account"
              loading={loading}
            />
          )}
        </Formik>
      </div>
      <div className="h-[100px] bg-gradient-to-b from-[#00000024] to-transparent via-[#00000008_3px] after:block after:content-['']  after:w-full after:h-[50px] after:bg-gradient-to-r after:from-white after:via-transparent after:to-white"></div>
      <FooterForm />
    </div>
  );
};

export default Login;
