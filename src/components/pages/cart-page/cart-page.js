import React, {Fragment} from "react";
import {connect} from 'react-redux';

import {
    foodAddedToCart,
    foodRemovedFromCart,
    allFoodsRemovedFromCart
} from "../../../actions";
import './cart-page.sass';

const CartPage = ({items, total, onIncrease, onDecrease, onDelete}) => {
    return (
        <Fragment>
            <table className="cartTable">
                <thead>
                <tr>
                    <th>Продукт</th>
                    <th>Цена</th>
                    <th>Вес</th>
                    <th>Вкус</th>
                    <th>количество</th>
                </tr>
                </thead>

                <tbody>
                {
                    items.map((item) => {
                        const {id, title, weight, taste, count, price, total} = item;
                        return (
                            <tr key={item.id}>
                                <td>{title}</td>
                                <td>{price}Р</td>
                                <td>{weight}г.</td>
                                <td>{taste}</td>
                                <td>{count}</td>
                                <td>
                                    <button
                                        onClick={() => onIncrease(id)}
                                        className="btn btn-outline-success">
                                        <i className="fa fa-plus-circle"></i>
                                    </button>
                                    <button
                                        onClick={() => onDecrease(id)}
                                        className="btn btn-outline-danger">
                                        <i className="fa fa-minus-circle"></i>
                                    </button>
                                    <button
                                        onClick={() => onDelete(id)}
                                        className="btn btn-outline-warning">
                                        <i className="fa fa-trash-o"></i>
                                    </button>
                                </td>
                            </tr>
                        );
                    })
                }

                </tbody>
            </table>
            <div className="total">
                Total: 1000р
            </div>
        </Fragment>
    )
};

const mapStateToProps = ({cartItems, orderTotal}) => {
    return {
        items: cartItems,
        total: orderTotal
    };
};

const mapDispatchToProps = {
    onIncrease: foodAddedToCart,
    onDecrease: foodRemovedFromCart,
    onDelete: allFoodsRemovedFromCart
};


export default connect(mapStateToProps, mapDispatchToProps)(CartPage);