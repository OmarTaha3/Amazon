import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  return (
<Fragment>
  {user ?     <div className="w-full flex items-center justify-center mb-10">
      <div className="w-[600px]">
        <h2 className="font-titleFont font-semibold text-xl my-5">
          My Profile
        </h2>
        <div className="font-bodyFont border border-gray-300 rounded-md">
          <div className="p-5 flex items-center justify-between border-b-[1px]">
            <div>
              <h3 className="font-semibold text-sm">Name: </h3>
              <span className="text-sm">{user.name}</span>
            </div>{" "}
            <Link to="/updateName">
              <button className=" py-1 px-10 border  bg-white rounded-md text-sm hover:bg-gray-50 duration-100 active:bg-white shadow-[0_2px_5px_0_rgba(213,217,217,.5)]">
                Edit
              </button>
            </Link>
          </div>
          <div className="p-5 flex items-center justify-between border-b-[1px]">
            <div>
              <h3 className="font-semibold text-sm">Email: </h3>
              <span className="text-sm">{user.email}</span>
            </div>{" "}
            <Link to="/updateEmail">
              <button className=" py-1 px-10 border  bg-white rounded-md text-sm hover:bg-gray-50 duration-100 active:bg-white shadow-[0_2px_5px_0_rgba(213,217,217,.5)]">
                Edit
              </button>
            </Link>
          </div>
          <div className="p-5 flex items-center justify-between border-b-[1px]">
            <div>
              <h3 className="font-semibold text-sm">Password: </h3>
              <span className="text-sm">******</span>
            </div>{" "}
            <Link to="/updatePassword">
              <button className=" py-1 px-10 border  bg-white rounded-md text-sm hover:bg-gray-50 duration-100 active:bg-white shadow-[0_2px_5px_0_rgba(213,217,217,.5)]">
                Edit
              </button>
            </Link>
          </div>
          <div className="p-5 flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-sm">Phone Number: </h3>
              <span
                className={`text-sm ${
                  user.phone ? "test-base" : "text-red-500"
                }`}
              >
                {user.phone ? user.phone : `You didn't add it yet`}
              </span>
            </div>{" "}
            <Link to="/updatePhone">
              <button className=" py-1 px-10 border  bg-white rounded-md text-sm hover:bg-gray-50 duration-100 active:bg-white shadow-[0_2px_5px_0_rgba(213,217,217,.5)]">
                {user.phone ? "Edit" : "Add"}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>: navigate('/signin')}
</Fragment>
  );
};

export default Profile;
