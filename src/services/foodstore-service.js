import 'firebase/auth';
import 'firebase/firestore';

import {Component} from 'react';

class FoodstoreService extends Component {

    data = [
        {
            id: 1,
            title: 'CAT ENERGY PRO 500 Г',
            weight: 500,
            taste: 'Курица',
            price: 700,
            img: require('../images/chicken-small-desktop@1x.webp')
        },
        {
            id: 2,
            title: 'CAT ENERGY PRO 1000 Г',
            weight: 1000,
            taste: 'Курица',
            price: 1000,
            img: require('../images/chicken-big-desktop@1x.webp')
        },
        {
            id: 3,
            title: 'CAT ENERGY PRO 500 Г',
            weight: 500,
            taste: 'Рыба',
            price: 700,
            img: require('../images/fish-small-desktop@1x.webp')
        },
        {
            id: 4,
            title: 'CAT ENERGY PRO 1000 Г',
            weight: 1000,
            taste: 'Рыба',
            price: 1000,
            img: require('../images/fish-big-desktop@1x.webp')
        },
        {
            id: 5,
            title: 'CAT ENERGY PRO 500 Г',
            weight: 500,
            taste: 'Гречка',
            price: 700,
            img: require('../images/buckwheat-small-desktop@1x.webp')
        },
        {
            id: 6,
            title: 'CAT ENERGY PRO 1000 Г',
            weight: 1000,
            taste: 'Гречка',
            price: 1000,
            img: require('../images/buckwheat-big-desktop@1x.webp')
        },
        {
            id: 7,
            title: 'CAT ENERGY PRO 500 Г',
            weight: 500,
            taste: 'Рис',
            price: 700,
            img: require('../images/rice-small-desktop@1x.webp')
        }
    ];

    getFoods() {
        return new Promise((resolve) => {
            resolve(this.data);
        })
    }
}

export {
    FoodstoreService
};