import React, {Fragment} from "react";
import FoodList from "../../food-list";

import "./app-main.sass"

const AppMain = () => {
    return (
        <Fragment>
            <h1 className="title">Каталог продукции</h1>
            <FoodList/>
        </Fragment>
    );
};

export default AppMain;