import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const bakeryItems = [
  {
    name: "Chocolate Cake",
    price: "$4.00",
    imageUrl: "https://images.unsplash.com/photo-1599785209707-a456fc1337bb",
    quantity: 0,
  },
  {
    name: "Vanilla Cake",
    price: "$3.75",
    imageUrl: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
    quantity: 0,
  },
  {
    name: "Red Velvet Cake",
    price: "$4.50",
    imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    quantity: 0,
  },
  {
    name: "Blueberry Muffin",
    price: "$1.50",
    imageUrl: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
    quantity: 0,
  },
  {
    name: "Chocolate Chip Cookie",
    price: "$1.25",
    imageUrl: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
    quantity: 0,
  },
  {
    name: "Lemon Tart",
    price: "$2.00",
    imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    quantity: 0,
  },
  {
    name: "Cinnamon Roll",
    price: "$1.75",
    imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    quantity: 0,
  },
  {
    name: "Carrot Cake",
    price: "$3.50",
    imageUrl: "https://images.unsplash.com/photo-1599785209707-a456fc1337bb",
    quantity: 0,
  },
  {
    name: "Raspberry Cheesecake",
    price: "$4.25",
    imageUrl: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
    quantity: 0,
  },
  {
    name: "Strawberry Shortcake",
    price: "$3.95",
    imageUrl: "https://images.unsplash.com/photo-1599785209707-a456fc1337bb",
    quantity: 0,
  },
  {
    name: "Almond Croissant",
    price: "$2.25",
    imageUrl: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
    quantity: 0,
  },
  {
    name: "Banana Bread",
    price: "$2.00",
    imageUrl: "https://images.unsplash.com/photo-1599785209707-a456fc1337bb",
    quantity: 0,
  },
  {
    name: "Apple Cake",
    price: "$3.25",
    imageUrl: "https://images.unsplash.com/photo-1599785209707-a456fc1337bb",
    quantity: 0,
  },
  {
    name: "Jam Bun",
    price: "$0.99",
    imageUrl: "https://images.unsplash.com/photo-1599785209707-a456fc1337bb",
    quantity: 0,
  },
  {
    name: "Cream Bun",
    price: "$1.20",
    imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    quantity: 0,
  },
  {
    name: "Veg Puff",
    price: "$1.50",
    imageUrl: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
    quantity: 0,
  },
  {
    name: "Egg Puff",
    price: "$1.75",
    imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    quantity: 0,
  },
  {
    name: "Paneer Puff",
    price: "$2.00",
    imageUrl: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
    quantity: 0,
  },
  {
    name: "Black Forest Cake",
    price: "$4.50",
    imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    quantity: 0,
  },
  {
    name: "Brownies",
    price: "$1.50",
    imageUrl: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
    quantity: 0,
  },
  {
    name: "Oatmeal Raisin Cookies",
    price: "$1.25",
    imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    quantity: 0,
  },
  {
    name: "Lemon Drizzle Cake",
    price: "$3.50",
    imageUrl: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
    quantity: 0,
  },
  {
    name: "Tiramisu",
    price: "$4.75",
    imageUrl: "https://images.unsplash.com/photo-1599785209707-a456fc1337bb",
    quantity: 0,
  },
  {
    name: "Pineapple Upside-Down Cake",
    price: "$4.00",
    imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    quantity: 0,
  },
];

function BackeryItemsList() {
  const [items, setItems] = useState(bakeryItems);

  const handleIncrease = (index) => {
    const newItems = [...items];
    newItems[index].quantity += 1;
    setItems(newItems);
  };

  const handleDecrease = (index) => {
    const newItems = [...items];
    if (newItems[index].quantity > 0) {
      newItems[index].quantity -= 1;
    }
    setItems(newItems);
  };
  return (
    <div className="container mt-5">
      <h3 className="mb-3" style={{ color: "#14738c" }}>
        Bakery Items
      </h3>
      <div className="row">
        {bakeryItems.map((item, index) => (
          <div className="col-md-4 col-sm-6 my-2" key={item.name}>
            <div className="card h-100">
              <img
                height={200}
                src={item.imageUrl}
                className="card-img-top"
                alt={item.name}
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">
                  {item.price} Total Count:{" "}
                  <span className="mx-2">{item.quantity}</span>
                </p>
                <div className="d-flex">
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleDecrease(index)}
                  >
                    -
                  </button>{" "}
                  &nbsp;
                  <button
                    className="btn btn-primary"
                    onClick={() => handleIncrease(index)}
                  >
                    +
                  </button>
                  &nbsp;
                  <button className="btn btn-primary">Order</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default BackeryItemsList;
