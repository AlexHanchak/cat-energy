import React from "react";

const {
    Provider: FoodstoreServiceProvider,
    Consumer: FoodstoreServiceConsumer
} = React.createContext();

export {
    FoodstoreServiceProvider,
    FoodstoreServiceConsumer
};