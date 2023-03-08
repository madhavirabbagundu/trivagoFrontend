import { Checkbox, Button } from "@mui/material";
import { useState } from "react";
import AirConditoner from "./icons/air-conditioner.svg";
import Beach from "./icons/beach.svg";
import Breakfast from "./icons/breakfast.svg";
import Cancellation from "./icons/cancellation.svg";
import CarPark from "./icons/car-park.svg";
import FamilyFriendly from "./icons/family-friendly.svg";
import Gym from "./icons/gym.svg";
import HotTub from "./icons/hot-tub.svg";
import PayAtProperty from "./icons/pay-at-property.svg";
import PetFriendly from "./icons/pet-friendly.svg";
import Pool from "./icons/pool.svg";
import Restaurant from "./icons/restaurant.svg";
import Spa from "./icons/spa.svg";
import WheelChair from "./icons/wheelchair.svg";
import Wifi from "./icons/wifi.svg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Svg = () => {
  const [popular, setPopular] = useState([]);
  const [checked, setChecked] = useState(false);
  const [added, setAdded] = useState("");

  const resetCheckbox = () => {
    setPopular([]);
  };
  const done = () => {
    setAdded(popular.length + " Applied");
  };
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setChecked(checked);
    if (checked) {
      setPopular([...popular, value]);
    }
    console.log(popular);
  };
  return (
    <div className="more-filters">
      <h5>More filters</h5>
      <div className="select-filter">
        <div>{added}</div>
        <KeyboardArrowDownIcon style={{ float: "right" }} />
      </div>
      <div className="more-filters-dropdown">
        <h5>Popular filters</h5>
        <div className="checkbox-grid">
          <div className="svg">
            <img src={Cancellation} />
            <span>Free cancellation</span>
            <Checkbox
              className="checkbox"
              name="Free cancellation"
              checked={checked}
              value={"Free cancellation"}
              onChange={handleCheckboxChange}
            />
          </div>
          <div className="svg">
            <img src={Breakfast} />
            <span>Free breakfast</span>
            <Checkbox
              name="Free breakfast"
              value={"Free breakfast"}
              onChange={handleCheckboxChange}
            />
          </div>
          <div className="svg">
            <img src={Pool} />
            <span>Pool</span>
            <Checkbox
              name="Pool"
              value={"Pool"}
              onChange={handleCheckboxChange}
            />
          </div>
          <div className="svg">
            <img src={Beach} />
            <span>Beach</span>
            <Checkbox
              name="Beach"
              value={"Beach"}
              onChange={handleCheckboxChange}
            />
          </div>
          <div className="svg">
            <img src={Wifi} />
            <span>WiFi</span>
            <Checkbox
              name="Wifi"
              value={"WiFi"}
              onChange={handleCheckboxChange}
            />
          </div>
          <div className="svg">
            <img src={CarPark} />
            <span>Car park</span>
            <Checkbox
              name="Car park"
              value={"Car park"}
              onChange={handleCheckboxChange}
            />
          </div>
          <div className="svg">
            <img src={AirConditoner} />
            <span>Air conditioning</span>
            <Checkbox
              name="Air conditioning"
              value={"Air conditioning"}
              onChange={handleCheckboxChange}
            />
          </div>
          <div className="svg">
            <img src={Restaurant} />
            <span>Restaurant</span>
            <Checkbox
              name="Restaurant"
              value={"Restaurant"}
              onChange={handleCheckboxChange}
            />
          </div>
          <div className="svg">
            <img src={PetFriendly} />
            <span>Pet friendly</span>
            <Checkbox
              name="Pet friendly"
              value={"Pet friendly"}
              onChange={handleCheckboxChange}
            />
          </div>
          <div className="svg">
            <img src={PayAtProperty} />
            <span>Pay at property</span>
            <Checkbox
              name="Pay at property"
              value={"Pay at property"}
              onChange={handleCheckboxChange}
            />
          </div>
          <div className="svg">
            <img src={HotTub} />
            <span>Whirlpool/Hot tub</span>
            <Checkbox
              name="Whirlpool/Hot tub"
              value={"Whirlpool/Hot tub"}
              onChange={handleCheckboxChange}
            />
          </div>
          <div className="svg">
            <img src={Spa} />
            <span>Spa</span>
            <Checkbox
              name="Spa"
              value={"Spa"}
              onChange={handleCheckboxChange}
            />
          </div>
          <div className="svg">
            <img src={Gym} />
            <span>Gym</span>
            <Checkbox
              name="Gym"
              value={"Gym"}
              onChange={handleCheckboxChange}
            />
          </div>
          <div className="svg">
            <img src={WheelChair} />
            <span>Wheelchair accessible</span>
            <Checkbox
              name="Wheelchair accessible"
              value={"Wheelchair accessible"}
              onChange={handleCheckboxChange}
            />
          </div>
        </div>
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
            onClick={resetCheckbox}
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
  );
};

export default Svg;
