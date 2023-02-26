import React from "react";
import "./CheckOut.css";
import useRazorpay from "react-razorpay";
import { useCallback } from "react";

export default function CheckOut(props) {
  const Razorpay = useRazorpay();
  const displayRazorpay = useCallback(
    async (amount) => {
      const options = {
        key: "rzp_test_zGN9JZWTfXrGmh",
        amount: amount * 100,
        currency: "INR",
        name: "Navin's e-GameCart",
        description: "Test Transaction",
        image: "/logo.png",

        handler: (res) => {
          console.log(res);
        },
        prefill: {
          name: "Navin Ujuri",
          email: "navinujuri@gnail.com",
          contact: "9999999999",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzpay = new Razorpay(options);
      rzpay.open();
    },
    [Razorpay]
  );

  return (
    <>
      <div id="checkout-container">
        <div className="checkout-desc">
          No Of Item (in the Cart) : {props.num}
        </div>
        <div className="checkout-desc">Sub - Total : {props.total}.00 </div>
        <div className="checkout-desc">Discount (Rs.) : 0.00 </div>
        <div
          className="checkout-desc"
          style={{ paddingTop: "10px", borderTop: "1px solid black" }}
        >
          Total (Rs.) : {props.total}.00
        </div>
        <button
          id="check-btn"
          onClick={() => {
            displayRazorpay(props.total);
          }}
        >
          Check Out
        </button>
      </div>
    </>
  );
}
