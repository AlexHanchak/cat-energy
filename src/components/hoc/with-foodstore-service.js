import React from "react";
import {FoodstoreServiceConsumer} from "../foodstore-service-context";

const WithFoodstoreService = () => (Wrapped) => {

    return (props) => {
        return (
            <FoodstoreServiceConsumer>
                {
                    (foodstoreService) => {
                        return (<Wrapped {...props}
                                         foodstoreService={foodstoreService}/>)
                    }
                }
            </FoodstoreServiceConsumer>
        );
    }
};

export {WithFoodstoreService};