import React, {Fragment} from "react";
import './food-list-item.sass';

const FoodListItem = ({food, onAddedToCart}) => {
    const {title, weight, taste, price, img} = food;
    return (
        <Fragment>
            <div className='pDescription'>
                <img className={'foodImg'} alt='' src={img}/>
                <h1>{title}</h1>
                <span>Обем: {weight} г.</span>
                <p>Вкус: {taste}</p>
                <p>Цена: {price} р.</p>
                <button
                    onClick={onAddedToCart}
                    className="btn btn-success add-to-cart">
                    Add to Cart
                </button>
            </div>
        </Fragment>
    );
};

export default FoodListItem;