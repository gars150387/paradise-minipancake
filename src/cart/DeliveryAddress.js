import React, { useState } from "react";

export const DeliveryAddress = () => {
  const [display, setDisplay] = useState(false)
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [state, setState] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <>
      <div
        style={{
          width: "80%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          margin: "2% auto"
        }}
      >
        <div style={{display:`${display === false ? "auto" : "none"}`}}>

        </div>
        <form
          style={{
            height: "50vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            justifyItems:"flex-start",
            alignItems: "center"
          }}
        >

          <div style={{ display: "flex", gap: "5px" }}>
            {" "}
            <label>Address 1</label>
            <input
              type="text"
              name="address"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            />
          </div>
          <div style={{ display: "flex", gap: "5px" }}>
            {" "}
            <label>Address 2</label>
            <input
              type="text"
              name="address2"
              value={address2}
              onChange={(event) => setAddress2(event.target.value)}
            />
          </div>
          <div style={{ display: "flex", gap: "5px" }}>
            {" "}
            <label>State</label>
            <input
              type="text"
              name="state"
              value={state}
              onChange={(event) => setState(event.target.value)}
            />
          </div>
          <div style={{ display: "flex", gap: "5px" }}>
            {" "}
            <label>Zip Code</label>
            <input
              type="text"
              name="zipCode"
              value={zipCode}
              onChange={(event) => setZipCode(event.target.value)}
            />
          </div>
          <div style={{ display: "flex", gap: "5px" }}>
            {" "}
            <label>Phone #</label>
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>
        </form>
      </div>
    </>
  );
};
