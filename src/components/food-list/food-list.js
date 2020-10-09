import React, {Component} from "react";
import FoodListItem from "../food-list-item";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';

import {WithFoodstoreService} from "../hoc";
import {fetchFoods, foodAddedToCart} from "../../actions";
import {compose} from "../../utils";
import './food-list.sass';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";


const FoodList = ({foods, onAddedToCart}) => {
    return (
        <ul className="row" id="ulRow">
            {
                foods.map((food) => {
                    return (
                        <div className="item" key={food.id}>
                            <li className="col foodLi" key={food.id}>
                                <FoodListItem
                                    food={food}
                                    onAddedToCart={() => onAddedToCart(food.id)}/>
                            </li>
                        </div>
                    );
                })
            }
        </ul>
    );
};

class FoodListContainer extends Component {
    componentDidMount() {
        this.props.fetchFoods();
    }

    render() {
        const {foods, loading, error, onAddedToCart} = this.props;
        if (loading) {
            return <Spinner/>
        }

        if (error) {
            return <ErrorIndicator/>
        }

        return <FoodList foods={foods} onAddedToCart={onAddedToCart}/>
    };
}

const mapStateToProps = ({ foodList: {foods, loading, error}}) => {
    return {foods, loading, error};
};

const mapDispatchToProps = (dispatch, {foodstoreService}) => {
    return bindActionCreators({
        fetchFoods: fetchFoods(foodstoreService),
        onAddedToCart: foodAddedToCart
    }, dispatch);
};

export default compose(
    WithFoodstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(FoodListContainer);