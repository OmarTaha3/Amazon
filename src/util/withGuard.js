import { useSelector } from "react-redux";
import DefaultComponent from "./DefaultComponent";

const WithGuard = (Component) => {
  const Wrapper = (props) => {
    const { user } = useSelector((state) => state.auth);
    return user ? <Component /> : <DefaultComponent/>;
  };
  return Wrapper;
};

export default WithGuard;
