import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import ItemCard from "../../components/ItemCard/ItemCard";
import useStore from "../../Store/StoreContext";
import useContentful from "../../useContentful";

import "./HomePage.css";
function HomePage() {
  const { getProducts } = useContentful();
  const [allProducts, setAllProducts] = useState([]);
  const { getAllProducts, productsInCart } = useStore();

  useEffect(() => {
    if (!allProducts.length) {
      console.log("1");
      getProducts()
        .then((data) => {
          setAllProducts((prev) => {
            return data;
          });
        })
        .catch((e) => {
          console.log(e);
        });
    }
    console.log("hi");
    return () => {
      getAllProducts(allProducts);
    };
  }, [allProducts]);

  return (
    <div>
      <Header num={productsInCart.length} />
      <div id="item-container">
        {allProducts.map((obj, ind) => {
          // console.log(obj);
          return (
            <ItemCard
              key={ind}
              imgUrl={obj.image.file.url}
              name={obj.name}
              description={obj.description}
              price={obj.price}
              serial={obj.serial}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
