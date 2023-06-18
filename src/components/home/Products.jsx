import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../state/productSlice";
import { toast } from "react-toastify";
import ProductsList from "./ProductsList";

const Products = () => {
  const { data, loading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="max-w-screen-2xl mx-auto grid grid-cols-1 sml:grid-cols-2 mdl:grid-cols-3 xl:grid-cols-4 gap-5 px-5">
      {loading ? (
        <div className="mt-14">Loading...</div>
      ) : error ? (
        toast.error(error)
      ) : (
        <ProductsList data={data} />
      )}
    </div>
  );
};

export default Products;
