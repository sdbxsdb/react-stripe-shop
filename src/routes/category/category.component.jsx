import "./category.styles.scss";

import { useParams, useNavigate } from "react-router-dom";

import { useContext, useState, useEffect } from "react";
import { CategoriesContext } from "../../contexts/categories.context";

import ProductCard from "../../components/product-card/product-card.component";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);
  let navigate = useNavigate();

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div>
      <button onClick={() => navigate(-1)}>&larr; Back</button>
      <h1 className="mb-6 text-3xl mt-4">{category.toUpperCase()}</h1>
      <div className="inner-category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Category;