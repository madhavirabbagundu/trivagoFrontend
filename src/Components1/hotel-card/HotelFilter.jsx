import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import React, { useState } from "react";
import { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import "./HotelFilter.css";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Button, DialogActions, InputAdornment, TextField } from "@mui/material";
import { Slider } from "@mui/material";
import styled from "@emotion/styled";
import Svg from "./Svg";
import Gym from "./icons/gym.svg";
import HotelCard from "./HotelCard";
import { ViewDealNavbar} from '../../Components1/ViewDealNavbar'

const HotelFilter = ({data}) => {

  const [show,setShow]=useState(false)
  const [filteredData,setFilteredData]=useState(data)
  const [review, setReview] = useState("All");
  const [cityLocation, setCityLocation] = useState("City center");
  const [dist, setDist] = useState(20);
  const [doubleSlider, setdoubleSlider] = useState([0, 100]);
  const [leftValue, setLeftValue] = useState(2000);
  const [rightValue, setRightValue] = useState(42000);
  const mumbaiLocations = [
    { location: "City center", id: "1" },
    { location: "Andheri E", id: "2" },
    { location: "Andheri W", id: "3" },
    { location: "Borivali East", id: "4" },
    { location: "Borivali West", id: "5" },
    { location: "Ghatkopar West", id: "6" },
    { location: "Gharapuri", id: "7" },
    { location: "Dadar East", id: "8" },
    { location: "Dadar West", id: "9" },
    { location: "Gatway of India", id: "10" },
    { location: "Ghatkopar East", id: "11" },
    { location: "Ghatkopar West", id: "12" },
    { location: "Chhatrapati Shivaji Terminus Area", id: "13" },
  ];

  const handleDoubleSliderChange = (event, doubleSlider) => {
    const [left, right] = doubleSlider;

    setLeftValue(left);
    setRightValue(right);

    setdoubleSlider(doubleSlider);
    console.log(doubleSlider);
  };

  const handleReviewChange = (value) => {
    setReview(value);
    console.log(review)
  };

  const handleLocationChange = (event) => {
    setCityLocation(event.target.value);
  };

  const handleDistChange = (event, dist) => {
    setDist(dist);
  };

  const reset = () => {
    setCityLocation("City center");
    setDist(20);
  };
  const done = () => {};
  console.log(review);

  return (
    <div>
    <div className="filters">
      <div className="price-filter">
        <div>
          <h5>Price / night</h5>
          <h5 className="price">
            <CurrencyRupeeIcon style={{ fontSize: "13px" }} />
            {leftValue}-<CurrencyRupeeIcon style={{ fontSize: "13px" }} />
            {rightValue}
          </h5>
        </div>
        <Slider
          getAriaLabel={() => "Minimum distance"}
          value={doubleSlider}
          onChange={handleDoubleSliderChange}
          valueLabelDisplay="auto"
          defaultValue={[0, 40000]}
          disableSwap
        />
      </div>
      <div className="vr"></div>
      <div className="property-type">
        <h5>Property type</h5>
        <div>
          <div className="active">All</div>
          <div>Hotel</div>
          <div>House / Apartment</div>
        </div>
      </div>
      <div className="vr"></div>

      <div className="guest-rating">
        <h5>Guest rating</h5>
        <div className="select-filter">
          <div>{review}</div>
          <KeyboardArrowDownIcon style={{ float: "right" }} />
        </div>
        <div className="guest-review-dropdown">
          <div
            className="excellent-review review-filter"
            onClick={() => setReview("8.5")}
          >
            <span className="review-span">8.5</span>
            <h5>Excellent</h5>
          </div>
          <div
            className="very-good-review review-filter"
            onClick={() => setReview("8")}
          >
            <span className="review-span">8.0</span>
            <h5>Excellent</h5>
          </div>
          <div
            className="good-review review-filter"
            onClick={() => setReview("7.5")}
          >
            <span className="review-span">7.5</span>
            <h5>Excellent</h5>
          </div>
        </div>
      </div>
      <div className="vr"></div>
      <div className="location-filter">
        <h5>Location</h5>
        <div className="select-filter">
          <div>{cityLocation}</div>
          <KeyboardArrowDownIcon style={{ float: "right" }} />
        </div>
        <div className="location-dropdown">
          <h4>Find me a stay close to....</h4>
          <h5>this popular site:</h5>
          <Select
            sx={{
              height: "30px",
              fontSize: "0.857rem",
            }}
            value={cityLocation}
            onChange={handleLocationChange}
            autoWidth
          >
            {mumbaiLocations.map((ele) => (
              <MenuItem value={ele.location} key={ele.id}>
                {ele.location}
              </MenuItem>
            ))}
          </Select>
          <h5>or this address:</h5>
          <TextField
            sx={{
              fontSize: "0.857rem",
            }}
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <div className="slider-text">
            <h5>Max. distance</h5>
            <span>{dist} km+</span>
          </div>
          <Slider
            value={dist}
            max={20}
            defaultValue={20}
            onChange={handleDistChange}
            aria-labelledby="non-linear-slider"
          />
          <div className="location-filter-button">
            <Button
              variant="outlined"
              sx={{
                borderColor: "rgb(98,103,113)",
                color: "black",
                fontWeight: "800",
                fontSize: "0.72rem",
                width: "7%",
                color: "rgb(98,103,113)",
                "&:hover": {
                  backgroundColor: "rgb(98,103,113)",
                  color: "white",
                  borderColor: "rgb(98,103,113)",
                },
                textTransform: "none",
              }}
              onClick={reset}
            >
              Reset
            </Button>
            <Button
              variant="contained"
              sx={{
                float: "right",
                textTransform: "none",
                fontWeight: "800",
                fontSize: "0.72rem",
                width: "7%",
              }}
              onClick={done}
            >
              Done
            </Button>
          </div>
        </div>
      </div>
      <div className="vr"></div>

      <Svg />

      </div>

        {
          filteredData.map((hotel)=><HotelCard hotel={hotel} key={hotel.id}/>)          

        }
      
</div>
    
  );
};

export default HotelFilter;