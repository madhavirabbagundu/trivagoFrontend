import React from "react";
import { Card, CardMedia } from "@mui/material";

import Rater from "react-rater";
import StarIcon from "@mui/icons-material/Star";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import "./HotelCard.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Button from "@mui/material/Button";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const HotelCard = ({ hotel }) => {
  const recommended = hotel.deals.find((obj) => {
    return obj.title == "Recommended deal";
  });

  const lowestPrice = hotel.deals.find((obj) => {
    return obj.title == "Our lowest price 1";
  });
  console.log(recommended);
  return (
    <div className="hotel-card">
      <Card sx={{ maxWidth: "70%", marginBottom: "12px" }}>
        <div className="card">
          <img src={hotel.img[0]} />

          <div className="detail">
            <h3>{hotel.name}</h3>
            <div className="rating">
              {Array.from({ length: hotel.rating }).map((_, index) => (
                <StarIcon
                  key={index}
                  style={{ color: "rgb(252,158,21)", fontSize: "15px" }}
                />
              ))}

              <span>&nbsp;Hotel</span>
            </div>
            <div class="location">
              <LocationOnOutlinedIcon
                style={{ color: "#565656", fontSize: "20px" }}
              />
              <span>{hotel.dist} km to City center</span>
              <KeyboardArrowDownIcon style={{ float: "right" }} />
            </div>
            <div className="review">
              {hotel.overallRating > 8 ? (
                <div className="excellent-review">
                  <span className="review-span">{hotel.overallRating}</span>
                  <h5>Excellent</h5>
                  <span>({hotel.reviewNumber} review)</span>
                  <KeyboardArrowDownIcon style={{ float: "right" }} />
                </div>
              ) : (
                <div className="good-review">
                  <span className="review-span">{hotel.overallRating}</span>
                  <h5>Good</h5>
                  <span>({hotel.reviewNumber} review)</span>
                  <KeyboardArrowDownIcon style={{ float: "right" }} />
                </div>
              )}
            </div>
          </div>
          <div>
            <div className="booking-details">
              <div className="recommended">
                <h6>{recommended.site}</h6>
                <div class="cancellation">
                  <CheckCircleIcon
                    style={{ color: "rgb(0,95,0)", fontSize: "12px" }}
                  />
                  <span style={{ fontWeight: "700" }}>
                    &nbsp; Free cancellation .
                  </span>
                  <span>&nbsp;Pay at the property</span>
                </div>
                <div>
                  <div>
                    <div className="per-price">
                      <span style={{ color: "black" }}>2 nights for </span>
                      <CurrencyRupeeIcon
                        style={{ color: "rgb(0,95,0)", fontSize: "12px" }}
                      />
                      <span style={{ fontWeight: "700" }}>
                        {recommended.price}
                      </span>
                    </div>
                    <div className="big-price">
                      <div>
                        <CurrencyRupeeIcon
                          style={{ color: "rgb(0,95,0)", fontSize: "20px" }}
                        />
                        <h3>{recommended.price}</h3>
                      </div>
                      <Button
                        className="view-deals-button"
                        style={{
                          backgroundColor: "rgb(2,128,0)",
                          color: "#fbfffb",
                          fontSize: "13px",
                          textTransform: "none",
                          fontWeight: "700",
                          float: "right",
                        }}
                        variant="contained"
                        endIcon={<ChevronRightIcon />}
                      >
                        View Deal
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="other-offers">
                <div className="recom">
                  <h5>Agoda</h5>
                  <div>
                    <CurrencyRupeeIcon />
                    <h3>{recommended.price}</h3>
                  </div>
                </div>
                <div className="lowest-price">
                  <div>
                    <h5>Our lowest price:</h5>
                    <div className="currency">
                      <CurrencyRupeeIcon />
                      <h3>{lowestPrice.price}</h3>
                      <span>&nbsp;{lowestPrice.site}</span>
                    </div>
                  </div>
                  <KeyboardArrowDownIcon
                    style={{ float: "right", marginTop: "8px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default HotelCard;
