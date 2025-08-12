import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & Inspire</h1>
        <p className="pl-desc">
          Follow my Github and LinkedIn, along with technologies I'm excited to
          explore in 2025 and 2026.
        </p>
      </div>
      <div className="pl-list">
        {products.map(({ id, link, fallbackImg, alt }) => (
          <Product key={id} link={link} fallbackImg={fallbackImg} alt={alt} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
