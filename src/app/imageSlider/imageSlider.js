"use client";
import Link from "next/link";
import React from "react";
import filteredItems from "./sliderData";
import ".././styles/imageSlider.css";
import { MdOutlineArrowCircleRight } from "react-icons/md";

import { MdOutlineArrowCircleLeft } from "react-icons/md";
export default function TradingNews() {
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 235;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 235;
  };
  console.log(filteredItems);
  return (
    <>
      <div className="trending">
        <div className="container">
          <div className="title-btns">
            <div className="btns">
              <h3 className="trading-head">Trading News</h3>
              <div className="btnss">
                <button
                  className="arrow-btn"
                  title="scroll left"
                  onClick={slideLeft}
                >
                  <MdOutlineArrowCircleLeft />
                </button>
                <button
                  className="arrow-btn"
                  title="scroll right"
                  onClick={slideRight}
                >
                  <MdOutlineArrowCircleRight />
                </button>
                <button className="view-more">view more</button>
              </div>
            </div>
            <p className="finance-news">Financial News</p>
          </div>
          <div className="row-container" id="slider">
            {filteredItems.map((item) => (
              <div key={item.id} className="row-item">
                <Link href={`/`} className="link">
                  <div className="item-header">
                    {typeof item.img === "object" ? (
                      <img
                        className="slider-images"
                        src={item.img.src}
                        alt={`News ${item.id}`}
                        style={item.img.style}
                      />
                    ) : (
                      <img src={item.img} alt={`News ${item.id}`} />
                    )}{" "}
                  </div>
                  <div className="item-description">
                    <p className="slider-desp">{item.description}</p>
                    <p className="item-date">{item.date}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
