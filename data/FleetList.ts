import A350 from "../images/fleet-img/A350.jpg";
import A330 from "../images/fleet-img/A330.jpg";
import A340 from "../images/fleet-img/A340.jpg";
import A321 from "../images/fleet-img/A321.jpg";
import A320 from "../images/fleet-img/A320.jpg";
import A319 from "../images/fleet-img/A319.jpg";
import DH8D from "../images/fleet-img/DH8D.jpg";
import E190 from "../images/fleet-img/E190.jpg";
import _757 from "../images/fleet-img/757.jpg";

import { Fleet } from "../types/FleetList";

const fleet: Fleet[] = [
  {
    name: "Airbus A350-900",
    role: "Long Hauls",
    specs: {
      wingspan: 64.75,
      maxPax: 440,
      maxCargo: 41000,
      range: 8100,
    },
    img: A350,
  },
  {
    name: "Airbus A330-300",
    role: "Medium & Long Hauls",
    specs: {
      wingspan: 60,
      maxPax: 287,
      maxCargo: 20000,
      range: 6350,
    },
    img: A330,
  },
  {
    name: "Airbus A340-600",
    role: "Medium & Long Hauls",
    specs: {
      wingspan: 63.5,
      maxPax: 370,
      maxCargo: 20000,
      range: 7883,
    },
    img: A340,
  },
  {
    name: "Boeing 757-200",
    role: "Medium Hauls",
    specs: {
      wingspan: 38,
      maxPax: 204,
      maxCargo: 14000,
      range: 3900,
    },
    img: _757,
  },
  {
    name: "Airbus A321-200",
    role: "Short & Medium Hauls",
    specs: {
      wingspan: 34,
      maxPax: 239,
      maxCargo: 10400,
      range: 3213,
    },
    img: A321,
  },
  {
    name: "Airbus A320-200",
    role: "Short Hauls",
    specs: {
      wingspan: 35.8,
      maxPax: 175,
      maxCargo: 8400,
      range: 3300,
    },
    img: A320,
  },
  {
    name: "Airbus A319-100",
    role: "Regional & Short Hauls",
    specs: {
      wingspan: 34,
      maxPax: 136,
      maxCargo: 8400,
      range: 3726,
    },
    img: A319,
  },
  {
    name: "Embraer E190",
    role: "Regional Flights",
    specs: {
      wingspan: 27.82,
      maxPax: 115,
      maxCargo: 4000,
      range: 2850,
    },
    img: E190,
  },
  {
    name: "Bombardier Dash8-Q400",
    role: "Regional Flights",
    specs: {
      wingspan: 27.4,
      maxPax: 89,
      maxCargo: 6880,
      range: 1100,
    },
    img: DH8D,
  },
];

export default fleet;
