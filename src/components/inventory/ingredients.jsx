import React, { useState, useEffect } from "react";
import axios from "axios";

const ingredients = [
  { name: "Flour", quantity: "80%", purpose: "Baking", orderItem: false },
  { name: "Sugar", quantity: "50%", purpose: "Sweetening", orderItem: false },
  {
    name: "Brown Sugar",
    quantity: "60%",
    purpose: "Sweetening",
    orderItem: false,
  },
  {
    name: "Cocoa Powder",
    quantity: "70%",
    purpose: "Flavoring",
    orderItem: false,
  },
  {
    name: "Baking Powder",
    quantity: "90%",
    purpose: "Leavening",
    orderItem: false,
  },
  {
    name: "Baking Soda",
    quantity: "85%",
    purpose: "Leavening",
    orderItem: false,
  },
  { name: "Yeast", quantity: "95%", purpose: "Leavening", orderItem: false },
  { name: "Eggs", quantity: "40%", purpose: "Binding", orderItem: true },
  { name: "Butter", quantity: "30%", purpose: "Moistening", orderItem: true },
  { name: "Milk", quantity: "60%", purpose: "Moistening", orderItem: false },
  {
    name: "Buttermilk",
    quantity: "50%",
    purpose: "Flavoring",
    orderItem: false,
  },
  { name: "Cream", quantity: "70%", purpose: "Moistening", orderItem: false },
  {
    name: "Cream Cheese",
    quantity: "50%",
    purpose: "Flavoring",
    orderItem: false,
  },
  {
    name: "Mascarpone Cheese",
    quantity: "40%",
    purpose: "Flavoring",
    orderItem: true,
  },
  {
    name: "Whipped Cream",
    quantity: "80%",
    purpose: "Topping",
    orderItem: false,
  },
  {
    name: "Vanilla Extract",
    quantity: "90%",
    purpose: "Flavoring",
    orderItem: false,
  },
  {
    name: "Almond Paste",
    quantity: "70%",
    purpose: "Flavoring",
    orderItem: false,
  },
  {
    name: "Sliced Almonds",
    quantity: "60%",
    purpose: "Topping",
    orderItem: false,
  },
  {
    name: "Chocolate Chips",
    quantity: "80%",
    purpose: "Flavoring",
    orderItem: false,
  },
  { name: "Cherries", quantity: "50%", purpose: "Topping", orderItem: false },
  { name: "Raspberries", quantity: "30%", purpose: "Topping", orderItem: true },
  {
    name: "Strawberries",
    quantity: "60%",
    purpose: "Topping",
    orderItem: false,
  },
  {
    name: "Blueberries",
    quantity: "70%",
    purpose: "Topping",
    orderItem: false,
  },
  { name: "Bananas", quantity: "40%", purpose: "Topping", orderItem: true },
  { name: "Apples", quantity: "50%", purpose: "Topping", orderItem: false },
  {
    name: "Pineapple Slices",
    quantity: "60%",
    purpose: "Topping",
    orderItem: false,
  },
  {
    name: "Maraschino Cherries",
    quantity: "70%",
    purpose: "Topping",
    orderItem: false,
  },
  {
    name: "Lemon Juice",
    quantity: "90%",
    purpose: "Flavoring",
    orderItem: false,
  },
  {
    name: "Lemon Zest",
    quantity: "80%",
    purpose: "Flavoring",
    orderItem: false,
  },
  { name: "Cinnamon", quantity: "50%", purpose: "Flavoring", orderItem: false },
  { name: "Nutmeg", quantity: "60%", purpose: "Flavoring", orderItem: false },
  { name: "Carrots", quantity: "30%", purpose: "Ingredient", orderItem: true },
  {
    name: "Potatoes",
    quantity: "50%",
    purpose: "Ingredient",
    orderItem: false,
  },
  { name: "Peas", quantity: "70%", purpose: "Ingredient", orderItem: false },
  { name: "Onions", quantity: "40%", purpose: "Ingredient", orderItem: true },
  { name: "Paneer", quantity: "60%", purpose: "Ingredient", orderItem: false },
  {
    name: "Graham Crackers",
    quantity: "80%",
    purpose: "Ingredient",
    orderItem: false,
  },
  {
    name: "Ladyfingers",
    quantity: "50%",
    purpose: "Ingredient",
    orderItem: false,
  },
  { name: "Oats", quantity: "70%", purpose: "Ingredient", orderItem: false },
  { name: "Raisins", quantity: "80%", purpose: "Ingredient", orderItem: false },
  { name: "Coffee", quantity: "50%", purpose: "Flavoring", orderItem: false },
  {
    name: "Rum (optional)",
    quantity: "90%",
    purpose: "Flavoring",
    orderItem: false,
  },
  {
    name: "Jam (any flavor)",
    quantity: "70%",
    purpose: "Flavoring",
    orderItem: false,
  },
  { name: "Cumin", quantity: "80%", purpose: "Spice", orderItem: false },
  { name: "Coriander", quantity: "70%", purpose: "Spice", orderItem: false },
  { name: "Garam Masala", quantity: "60%", purpose: "Spice", orderItem: false },
  { name: "Salt", quantity: "90%", purpose: "Spice", orderItem: false },
  { name: "Cooking Oil", quantity: "80%", purpose: "Oil", orderItem: false },
  { name: "Olive Oil", quantity: "70%", purpose: "Oil", orderItem: false },
];

const IngredientsTable = () => {
  const [data, setData] = useState([]);
  const [loading ,  setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/ingredients");
        setData(response.data || ingredients);
        setTimeout(() =>{
          setLoading(true)
        }, 3000)
      } catch (err) {
        return;
      }
    };

    fetchData();
  }, []);
  return (
    <React.Fragment>
      {!loading ? (
        <div
          class="d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="container mt-5">
          <h3 className="mb-3" style={{ color: "#14738c" }}>
            Ingredients
          </h3>
          <table className="table table-striped table-bordered table-hover">
            <thead className="thead-dark">
              <tr>
                <th>Ingredient</th>
                <th>Quantity Left</th>
                <th>Purpose</th>
                <th>Order Item</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.length > 0 &&
                data.map((ingredient, index) => (
                  <tr key={index}>
                    <td>{ingredient.name}</td>
                    <td>{ingredient.quantity}</td>
                    <td>{ingredient.purpose}</td>
                    <td>{ingredient.orderItem ? "Yes" : "No"}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </React.Fragment>
  );
};

export default IngredientsTable;
