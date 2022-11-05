import React, { useState, useEffect } from "react";

const cantidades = [
  {
    numero: 12,
    topping: 2,
    precio: 8,
  },
  {
    numero: 24,
    topping: 3,
    precio: 15,
  },
  {
    numero: 30,
    topping: 4,
    precio: 19,
  },
  {
    numero: 50,
    topping: 4,
    precio: 23,
  },
];

const toppings = [
  "nutella",
  "coconut flakes",
  "M & M's",
  "powdered sugar",
  "chocholate water",
  "homemade strawberry jam",
  "Oreo",
  "dulce de leche",
  "mapple syrup",
  "whipped crea",
  "condensed milk",
];
export const Menu = () => {
  const [selectOrder, setSelectOrder] = useState([]);
  const [addToppigToOrder, setAddToppigToOrder] = useState([]);

  const orderStructure = {
    numero: "",
    toppingAllowed: [],
    precio: "",
  };
  useEffect(() => {
    const controller = new AbortController();
    addToppigToOrder;
    return () => {
      controller.abort();
    };
  }, [addToppigToOrder.length]);

  const order = (value) => {
    console.log("🚀 ~ file: Menu.jsx ~ line 58 ~ order ~ event", value);
    orderStructure.numero = value;
    console.log(
      "🚀 ~ file: Menu.jsx ~ line 58 ~ order ~ orderStructure",
      orderStructure
    );
    orderStructure.toppingAllowed = addToppigToOrder;
  };

  const toppingToOrderBeforeorder = (value) => {
    const listOfAllowedToppings = [...addToppigToOrder, value];
    setAddToppigToOrder(listOfAllowedToppings);
    return (orderStructure.toppingAllowed = addToppigToOrder);
  };

  const deleteItem = (index) => {
    const number_item_deleted = 1;
    const deletedItem = addToppigToOrder.splice(index, number_item_deleted);
    const result = addToppigToOrder.filter(item => item !== deletedItem)
    setAddToppigToOrder(result)
  };
  return (
    <div>
      <div>
        <h2>Menu</h2>
      </div>
      <div>
        <h2>Select Pancakes</h2>
      </div>
      <div>
        {cantidades?.map((cantidad, index) => {
          return (
            <div key={index * 123} className="card" style={{ width: "60rem" }}>
              <button value={cantidad.numero} onClick={(event) => order(event.target.value)}>
                Select
              </button>
              <div className="card-body">
                <h5 className="card-title">{cantidad.numero} Mini...</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                {addToppigToOrder.length <= cantidad.numero ? `${cantidad.precio}` : "+$2 for extra topping"}.Topping included in order: <strong>{cantidad.topping}</strong> 
                </h6>
                <p className="card-text">
                  Please select your toppings:
                </p>
                <div>
                  
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    griTtemplateColumns: "repeat(3, 1fr)",
                    gap: "10px",
                    gridAutoRows: "minmax(100px, auto)",
                    margin: "0 auto",
                  }}
                >
                  <div>
                    <h4>
                      <button
                        // disabled={disabledButton}
                        value="Nutella"
                        onClick={(event) =>
                          toppingToOrderBeforeorder(event.target.value)
                        }
                      >
                        Nutella
                      </button>
                    </h4>
                  </div>
                  <div>
                    <h4>
                      <button
                        // disabled={disabledButton}
                        value="coconut flakes"
                        onClick={(event) =>
                          toppingToOrderBeforeorder(event.target.value)
                        }
                      >
                        coconut flakes
                      </button>
                    </h4>
                  </div>
                  <div>
                    <h4>
                      <button
                        // disabled={disabledButton}
                        value="M & M's"
                        onClick={(event) =>
                          toppingToOrderBeforeorder(event.target.value)
                        }
                      >
                        M & M's
                      </button>
                    </h4>
                  </div>
                  <div>
                    <h4>
                      <button
                        // disabled={disabledButton}
                        value="powdered sugar"
                        onClick={(event) =>
                          toppingToOrderBeforeorder(event.target.value)
                        }
                      >
                        powdered sugar
                      </button>
                    </h4>
                  </div>
                  <div>
                    <h4>
                      <button
                        // disabled={disabledButton}
                        value="chocholate water"
                        onClick={(event) =>
                          toppingToOrderBeforeorder(event.target.value)
                        }
                      >
                        chocholate water
                      </button>
                    </h4>
                  </div>
                  <div>
                    <h4>
                      <button
                        // disabled={disabledButton}
                        value="homemae strawberry jam"
                        onClick={(event) =>
                          toppingToOrderBeforeorder(event.target.value)
                        }
                      >
                        homemade srtawberry jam
                      </button>
                    </h4>
                  </div>
                  <div>
                    <h4>
                      <button
                        // disabled={disabledButton}
                        value="Oreo"
                        onClick={(event) =>
                          toppingToOrderBeforeorder(event.target.value)
                        }
                      >
                        Oreo
                      </button>
                    </h4>
                  </div>
                  <div>
                    <h4>
                      <button
                        // disabled={disabledButton}
                        value="deulce de leche"
                        onClick={(event) =>
                          toppingToOrderBeforeorder(event.target.value)
                        }
                      >
                        dulce de leche
                      </button>
                    </h4>
                  </div>
                  <div>
                    <h4>
                      <button
                        // disabled={disabledButton}
                        value="mapple syrup"
                        onClick={(event) =>
                          toppingToOrderBeforeorder(event.target.value)
                        }
                      >
                        mapple syrup
                      </button>
                    </h4>
                  </div>
                  <div>
                    <h4>
                      <button
                        // disabled={disabledButton}
                        value="whipped cream"
                        onClick={(event) =>
                          toppingToOrderBeforeorder(event.target.value)
                        }
                      >
                        whipped cream
                      </button>
                    </h4>
                  </div>
                  <div>
                    <h4>
                      <button
                        // disabled={disabledButton}
                        value="condesed milk"
                        onClick={(event) =>
                          toppingToOrderBeforeorder(event.target.value)
                        }
                      >
                        condensed milk
                      </button>
                    </h4>
                  </div>
                </div>
              </div>
              <div>
                {addToppigToOrder?.map((toppingSelected, index) => (
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <strong>{toppingSelected}</strong>{" "}
                    <button onClick={() => deleteItem(index)}>
                      <i className="bi bi-x-circle" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
