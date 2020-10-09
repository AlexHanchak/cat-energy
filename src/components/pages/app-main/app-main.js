import React, {Fragment} from "react";
import FoodList from "../../food-list";
import CartPage from "../cart-page/cart-page";

import "./app-main.sass"

const AppMain = () => {
    return (
        <Fragment>
            <h1 className="title">Каталог продукции</h1>
            <FoodList/>
            <CartPage/>
        </Fragment>
    );
};

export default AppMain;