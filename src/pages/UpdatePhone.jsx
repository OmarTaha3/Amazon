import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth, updateProfile } from "../firebase";
import { Formik } from "formik";
import { useNavigate } from "react-router";
import { Form } from "formik";
import * as Yup from "yup";
import FieldForm from "../components/form/FieldForm";
import { useSelector, useDispatch } from "react-redux";
import { signin } from "../state/authSlice";

const updatePhoneSchema = Yup.object().shape({
  phone: Yup.string().required("phone is required"),
});

const UpdatePhone = () => {
  const { user } = useSelector((state) => state.auth);
  console.log(user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  return (
    <div className="w-full flex items-center justify-center mb-10">
      <div className="w-[600px]">
        <h2 className="font-titleFont font-semibold text-xl my-5">
          {user.phone ? "Change your phone number" : "Add your phone number"}
        </h2>
        <div className="font-bodyFont border border-gray-300 rounded-md">
          <div className="p-5 flex flex-col items-start border-b-[1px]">
            <div>
              <Formik
                initialValues={{
                  phone: "",
                }}
                //validationSchema={updatePhoneSchema}
                onSubmit={async (value) => {
                  setLoading(true);
                  try {
                    await updateProfile(auth.currentUser, value.phone);
                    dispatch(
                      signin({
                        email: auth.currentUser.email,
                        uid: auth.currentUser.uid,
                        name: auth.currentUser.displayName,
                        phone: value.phone,
                      })
                    );
                    toast.success("Updated Successfully!", {
                      autoClose: 1000,
                    });
                    setTimeout(() => {
                      navigate(-1);
                    }, 2000);
                  } catch (error) {
                    console.log(error)
                    setLoading(false);
                    if (error.code === "auth/network-request-failed") {
                      toast.error(
                        "A network error has occurred. Please try again later."
                      );
                    } else if (error.code === "auth/operation-not-allowed") {
                      toast.error(
                        "Operation not allowed. Please contact support."
                      );
                    } else if (error.code === "auth/too-many-requests") {
                      toast.error(
                        "Too many unsuccessful attempts. Please try again later."
                      );
                    } else {
                      toast.error("An unknown error has occurred.");
                    }
                  }
                }}
              >
                {({ values, errors, touched, handleChange, handleBlur }) => (
                  <Form className="mb-4 w-[230px] mx-auto gap-4 flex flex-col items-start rounded-md">
                    <div className="">
                      <FieldForm
                        values={values}
                        errors={errors}
                        touched={touched}
                        handleBlur={handleBlur}
                        handleChange={handleChange}
                        name="phone"
                        label="Phone Number"
                      />
                    </div>
                    <button
                      className="disabled:cursor-wait disabled:bg-yellow-100 py-1 px-10 border  bg-white rounded-md text-sm hover:bg-gray-50 duration-100 active:bg-white shadow-[0_2px_5px_0_rgba(213,217,217,.5)]"
                      type="submit"
                      disabled={loading}
                    >
                      Update
                    </button>
                  </Form>
                )}
              </Formik>
              <ToastContainer />
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePhone;
