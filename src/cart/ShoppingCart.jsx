import { useState } from "react";
import { Checkout } from "./Checkout";
import { Link } from "react-router-dom";
import "../style/shoppingCart.css";
import "../style/navbar.css";


export const ShoppingCart = () => {
  const [listOfOrder, setListOfOrder] = useState([]);
  const [topping, setTopping] = useState([]);
  const [disableButton, setDisableButton] = useState(false);
  const [itemToOrder, setitemToOrder] = useState([]);

  const addItemToOrder = async (event) => {
    const addItem = [...listOfOrder, event];
    if (addItem !== []) {
      setListOfOrder([addItem]);
    }
  };

  const addTopping = async (event) => {
    const addingTopping = [...topping, event];
    if (addingTopping !== []) {
      setTopping(addingTopping);
    }
  };

  const handleDelete = async (event) => {
    const deleteItem = topping.filter((item) => item !== event);
    return setTopping(deleteItem);
  };

  const handleDeleteItem = async ({ item, index }) => {
    const reference = item;
    const indexReference = index;
    const deleteItem = listOfOrder.filter((item) => item !== reference);
    setListOfOrder(deleteItem);
    setDisableButton(false);
  };

  const handleSaveItemInOrder = async ({ event }) => {
    let extra = topping.length - event.freeTopping || 0;

    let item = {
      quantity: event.quantity,
      topping: topping,
      price: event.price + extra
    };
    let copyItemToOrder = [...itemToOrder, item];
    setitemToOrder(copyItemToOrder);
    setListOfOrder([]);
    setTopping([]);
    setDisableButton(false);
  };
  const total = () => {
    let total = [];
    itemToOrder.map((item) => total.push(item.price));
    return total.reduce(function (acc, val) {
      return acc + val;
    }, 0);
  };
  return (
    <div
      style={{
        backgroundColor: "#ffff",
        borderRadius: "15px",
        padding: "20px",
        minHeight:"80vh"
      }}
    >
      <div
        style={{
          width: "80vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "35px",
          fontWeight: "600",
          textDecoration: "underline"
        }}
      >
        <Link to='/'>
        <div className="logo">
          <img src={require("../images/logo-no-background.jpeg")} alt="logo" />
        </div>
      </Link>
        <p>
          Total to pay: <strong>${total()} </strong>
        </p>
        <div>
          {itemToOrder.length > 0 && (
            <Link to="/checkout">
              {" "}
              <button
                style={{ width: "fit-content", marginLeft: "10px" }}
                className="btn btn-success"
              >
                Checkout
              </button>{" "}
            </Link>
          )}
        </div>
      </div>
      <div style={{ width: "80vw" }}>
        <div
          style={{
            width: "80vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <h2>Select your size</h2>
          <div
            style={{
              width: "60%",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center"
            }}
          >
            <div>
              <h3>12 Mini...... $8 </h3>
              <button
                disabled={disableButton}
                onClick={() => {
                  addItemToOrder({ quantity: 12, freeTopping: 2, price: 8 });
                  setDisableButton(true);
                }}
              >
                Add
              </button>
            </div>
            <div>
              {" "}
              <h3>24 Mini...... $15 </h3>
              <button
                disabled={disableButton}
                onClick={() => {
                  addItemToOrder({ quantity: 24, freeTopping: 3, price: 15 });
                  setDisableButton(true);
                }}
              >
                Add
              </button>
            </div>
            <div>
              {" "}
              <h3>30 Mini...... $19 </h3>
              <button
                disabled={disableButton}
                onClick={() => {
                  addItemToOrder({ quantity: 30, freeTopping: 4, price: 19 });
                  setDisableButton(true);
                }}
              >
                Add
              </button>
            </div>
            <div>
              <h3>50 Mini...... $23 </h3>
              <button
                disabled={disableButton}
                onClick={() => {
                  addItemToOrder({ quantity: 50, freeTopping: 4, price: 23 });
                  setDisableButton(true);
                }}
              >
                Add
              </button>
            </div>
          </div>
        </div>
        <div>
          {itemToOrder.map((item) => {
            return (
              <div
                style={{
                  width:"80vw",
                  margin: "2% auto",
                  fontSize: "15px",
                  fontFamily: "monospace",
                  fontWeight: "500",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  border: "solid 1px #212526"
                }}
              >
                <ul>
                  <li>{item?.quantity} units</li>
                  <li>${item?.price}</li>
                  <li>Topping: {item?.topping}</li>
                </ul>
                <p>ITEM ADDED <i className="bi bi-check-circle" style={{paddingRight:"15px"}}/></p>
              </div>
            );
          })}
        </div>
        <hr/>
      </div>
      {listOfOrder.map((item, index) => {
        return (
          <div key={item[0].quantity + index}>
            <div
              style={{
                width: "80vw",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                margin:"2% auto"
              }}
              key={item[0].quantity + item[0].price + index}
            >
              <div
                style={{
                  width: "80vw",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginRight: "5vw"
                }}
              >
                <span style={{ fontSize: "25px" }}>
                  {item[0].quantity} units...{" "}
                  <i
                    onClick={() => handleDeleteItem({ item })}
                    className="bi bi-x-circle"
                  />
                </span>
                <span style={{ fontSize: "25px" }}>
                  {`${item[0].freeTopping} Topping included`}{" "}
                </span>
                <span style={{ fontSize: "25px" }}>
                  {topping.length > item[0].freeTopping
                    ? `$1 extra per additional topping`
                    : null}
                  {" ..."}
                </span>
                <span style={{ fontSize: "25px" }}>
                  Total:{" "}
                  <strong>
                    $
                    {item[0].price +
                      (topping.length > item[0].freeTopping
                        ? topping.length - item[0].freeTopping * 1
                        : null)}
                  </strong>
                </span>
              </div>
              <button
                style={{ width: "5vw" }}
                disabled={topping.length < item[0].freeTopping ? true : false}
                onClick={() => handleSaveItemInOrder({ event: item[0] })}
              >
                Save
              </button>
            </div>
            <hr/>
            <div
              style={{
                fontSize: "25px",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                padding: "15px",
                width:"80vw",
                margin:"0 auto"
              }}
            >
              <span>
                {topping.map((item, index) => {
                  return (
                    <>
                      {`${index + 1} - ${item}`}
                      <i
                        onClick={() => handleDelete(item)}
                        className="bi bi-x-circle"
                      />
                      {" / "}
                    </>
                  );
                })}
              </span>{" "}
            </div>

            <div
              style={{
                width:"80vw",
                display: "grid",
                gridTemplateColumns:"repeat(8,1fr)",
                gridTemplateRows:"repeat(3,1fr)",
                // justifyContent: "space-around",
                alignItems: "center",
                gap: "5px",
                margin:"2% auto"
              }}
            >
              <div className="form-check">
                <button
                  className="form-check-input"
                  onClick={() => addTopping("Nutella ")}
                  id="flexCheckChecked"
                >
                  Nutella
                </button>
              </div>
              <br />
              <div className="form-check">
                <button
                  className="form-check-input"
                  onClick={() => addTopping("Coconut Flakes ")}
                  id="flexCheckChecked"
                >
                  Coconut Flakes
                </button>
              </div>
              <br />
              <div className="form-check">
                <button
                  className="form-check-input"
                  onClick={() => addTopping("M&M ")}
                  id="flexCheckChecked"
                >
                  M&M's
                </button>
              </div>
              <br />
              <div className="form-check">
                <button
                  className="form-check-input"
                  onClick={() => addTopping("Powdered Sugar ")}
                  id="flexCheckChecked"
                >
                  Powdered Sugar
                </button>
              </div>
              <br />
              <div className="form-check">
                <button
                  className="form-check-input"
                  onClick={() => addTopping("Chocolate Water ")}
                  id="flexCheckChecked"
                >
                  Chocolate Water
                </button>
              </div>
              <br />
              <div className="form-check">
                <button
                  className="form-check-input"
                  onClick={() => addTopping("Homemade Strawberry ")}
                  id="flexCheckChecked"
                >
                  Homemade Strawberry Jam
                </button>
              </div>
              <br />
              <div className="form-check">
                <button
                  className="form-check-input"
                  onClick={() => addTopping("Chocolate Chips ")}
                  id="flexCheckChecked"
                >
                  Chocolate Chips
                </button>
              </div>
              <br />
              <div className="form-check">
                <button
                  className="form-check-input"
                  onClick={() => addTopping("Dulce De Leche ")}
                  id="flexCheckChecked"
                >
                  Dulce de Leche
                </button>
              </div>
              <br />
              <div className="form-check">
                <button
                  className="form-check-input"
                  onClick={() => addTopping("Mapple Syrup ")}
                  id="flexCheckChecked"
                >
                  Mapple Syrup
                </button>
              </div>
              <br />
              <div className="form-check">
                <button
                  className="form-check-input"
                  onClick={() => addTopping("Whipped Cream ")}
                  id="flexCheckChecked"
                >
                  Whipped Cream
                </button>
              </div>
              <br />
              <div className="form-check">
                <button
                  className="form-check-input"
                  onClick={() => addTopping("Condensed Milk ")}
                  id="flexCheckChecked"
                >
                  Condensed Milk
                </button>
              </div>
              <br />
              <div className="form-check">
                <button
                  className="form-check-input"
                  onClick={() => addTopping("Oreo")}
                  id="flexCheckChecked"
                >
                  Oreo
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <div style={{ display: "none" }}>
        <Checkout itemToOrder={itemToOrder} />
      </div>
    </div>
  );
};
