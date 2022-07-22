import "./category.styles.scss";

import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { useState, useEffect } from "react";

import { selectCategoriesMap } from "../../store/categories/category.selector";

import ProductCard from "../../components/product-card/product-card.component";

const Category = () => {
  let navigate = useNavigate();
  const { category } = useParams();
  console.log('render/re-rendering cartegory component');
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    console.log('effect fired calling setProducts')
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
