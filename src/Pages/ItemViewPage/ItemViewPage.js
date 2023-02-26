import React from "react";
import "./ItemViewPage.css";
import Header from "../../components/Header/Header";
import Item from "../../components/Item/Item";
import { useParams } from "react-router-dom";
import useStore from "../../Store/StoreContext";

function ItemViewPage() {
  let { sid } = useParams();
  let { allProducts, productsInCart } = useStore();
  // image > file > url;

  let [list] = allProducts.filter((obj) => {
    return obj.serial == sid;
  });
  let { name, description, price, serial, image } = list;

  return (
    <div>
      <Header num={productsInCart.length} />
      <Item
        name={name}
        description={description}
        price={price}
        serial={serial}
        image={image}
      />
    </div>
  );
}

export default ItemViewPage;
