export let products = [{
    name: "pizza Inferno" ,
    image:  "/assets/pizza.jpg", 
    description: "Pizza inferno with Jalapenos" , 
    price: 10 , 
    availability: true,
}, {
    name: "pizza Capricosa" ,
    image: "/assets/pizza.jpg", 
    description: "Pizza capricose with Capri" , 
    price: 10 , 
    availability: true ,
}, {
    name: "pizza vegan" ,
    image: "/assets/pizza.jpg", 
    description: "Pizza with vegan cheese" , 
    price: 10 , 
    availability: true ,
}, {
    name: "pizza meateater" ,
    image: "/assets/pizza.jpg", 
    description: "Pizza with 5  different meats" , 
    price: 20 , 
    availability: false ,
} , {
    name: "pizza Wien" ,
    image:  "/assets/pizza.jpg", 
    description: "Pizza with Wienerschnitzel" , 
    price: 20 , 
    availability: true ,
} , {
    name: "Pasta Bolognese" ,
    image: "/assets/pasta.jpg", 
    description: "Pasta with tomato and beef" , 
    price: 20 , 
    availability: true ,
} , {
    name: "Pasta Carbonara" ,
    image: "/assets/pasta.jpg", 
    description: "Pasta with cream and bacon" , 
    price: 10 , 
    availability: true ,
} , {
    name: "Pasta ReefndBeef" ,
    image: "/assets/pasta.jpg", 
    description: "Pasta with Schrimps and Beef" , 
    price: 20 , 
    availability:  true,
}
];

export interface IProduct {
    name: string;
    image :string;
    description: string;
    price : number;
    availability? : boolean;
}