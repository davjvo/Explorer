import { faBasketShopping, faBus, faCoffee, faGifts, faHouse, faLightbulb, faMapPin, faSchool } from "@fortawesome/free-solid-svg-icons";
import { Category } from "../models/category";

export default {
    getCategories: () : Category[] => {
        return [
            {
                name: 'Transport',
                icon: faBus,
                color: '#4F4D8C'
            },
            {
                name: 'Electric Bills',
                icon: faLightbulb,
                color: '#401801'
            },
            {
                name: 'Shopping',
                icon: faBasketShopping,
                color: '#8F8EBF'
            },
            {
                name: 'Rent',
                icon: faHouse,
                color: '#2E4159'
            },
            {
                name: 'Coffee',
                icon: faCoffee,
                color: '#32402C'
            },
            {
                name: 'Class',
                icon: faSchool,
                color: '#7E8C4A'
            },
            {
                name: 'Gift',
                icon: faGifts,
                color: '#A6995B'
            },
            {
                name: 'Travel',
                icon: faMapPin,
                color: '#A65B4B'
            },


        ];
    }
}