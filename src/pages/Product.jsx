import { useSelector } from "react-redux";
import { useParams } from "react-router";

import ProductDetails from "../components/product/ProductDetails";
import RelatedProducts from "../components/product/RelatedProducts";

const Product = () => {
  const { id } = useParams();
  const { data } = useSelector((state) => state.products);
  const product = data.find((product) => product.id === Number(id));
  const relProducts = data
    .filter((item) => item.category === product.category)
    .filter((item) => item.id !== product.id);
  return (
    <div className="product-page-select-slider font-bodyFont bg-gray-100 w-full py-4 ">
      <ProductDetails product={product} />
      <RelatedProducts relProducts={relProducts} />
    </div>
  );
};

export default Product;
