// LoadingAnimation.js
import React from "react";
import "./LoadingAnimation.scss";

const LoadingAnimation = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "var(--background-color)",
        zIndex: 9999,
      }}
    >
      <div className="container">
        <div className="h1Container">
          <div className="cube h1 w1 l1">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>
          <div className="cube h1 w1 l2">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>
          <div className="cube h1 w1 l3">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>
          <div className="cube h1 w2 l1">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>
          <div className="cube h1 w2 l2">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>
          <div className="cube h1 w2 l3">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>
          <div className="cube h1 w3 l1">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>
          <div className="cube h1 w3 l2">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>
          <div className="cube h1 w3 l3">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>
        </div>
        <div className="h2Container">
          <div className="cube h2 w1 l1">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>
          <div className="cube h2 w1 l2">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>
          <div className="cube h2 w1 l3">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>
          <div className="cube h2 w2 l1">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>
          <div className="cube h2 w2 l2">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>
          <div className="cube h2 w2 l3">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>
          <div className="cube h2 w3 l1">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>
          <div className="cube h2 w3 l2">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>
          <div className="cube h2 w3 l3">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>
        </div>
        <div className="h3Container">
          <div className="cube h3 w1 l1">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>
          <div className="cube h3 w1 l2">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>
          <div className="cube h3 w1 l3">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>
          <div className="cube h3 w2 l1">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>
          <div className="cube h3 w2 l2">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>
          <div className="cube h3 w2 l3">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>
          <div className="cube h3 w3 l1">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>
          <div className="cube h3 w3 l2">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>
          <div className="cube h3 w3 l3">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
