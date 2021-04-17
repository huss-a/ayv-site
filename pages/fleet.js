import React, { useState, useEffect } from "react";
import { Container, Form } from "react-bootstrap";
import FleetCard from "../components/Fleet/Card";
import FleetList from "../data/FleetList";
import Head from "next/head";

const fleet = () => {
  const [sort, setSort] = useState("range");
  const [order, setOrder] = useState([1, -1]);
  function sortFleet(e) {
    e.preventDefault();
    const sortDropdownInput = e.target.value;
    let sortArg;
    switch (sortDropdownInput) {
      case "Range":
        sortArg = "range";
        break;
      case "Max Passengers":
        sortArg = "maxPax";
        break;
      case "Wingspan":
        sortArg = "wingspan";
        break;
      case "Max Cargo":
        sortArg = "maxCargo";
        break;
      default:
        sortArg = "range";
    }
    setSort(sortArg);
  }

  function getSort(sortArg) {
    let sort;
    switch (sortArg) {
      case "range":
        sort = "Range";
        break;
      case "wingspan":
        sort = "Wingspan";
        break;
      case "maxCargo":
        sort = "Max Cargo";
        break;
      case "maxPax":
        sort = "Max Passengers";
        break;
      default:
        sort = "Range";
    }

    return sort;
  }

  function sortFleetOrder(e) {
    const sortOrder = e.target.value;
    switch (sortOrder) {
      case "Ascending":
        setOrder([1, -1]);
        break;
      case "Descending":
        setOrder([-1, 1]);
        break;
      default:
        setOrder([1, -1]);
    }
  }
  useEffect(() => {
    document.getElementById("nav-fleet").classList.add("active");
    return () => document.getElementById("nav-fleet").classList.remove("active");
  }, []);

  return (
    <>
      <Head>
        <title>Finnair Virtual | Fleet</title>
        <meta name="description" content="Finnair Virtual - Fleet" />
      </Head>

      <Container>
        <h1 className="mt-4">The AYVA Fleet</h1>
        <span>
          Sort By:{"  "}
          <Form.Control as="select" custom onChange={sortFleet}>
            <option>Range</option>
            <option>Wingspan</option>
            <option>Max Passengers</option>
            <option>Max Cargo</option>
          </Form.Control>
        </span>
        <span>
          {"  "}Order: {"  "}
          <Form.Control as="select" custom onChange={sortFleetOrder}>
            <option>Ascending</option>
            <option>Descending</option>
          </Form.Control>
        </span>
        <p className="text-muted p-2">
          Sorted by {getSort(sort)} in{" "}
          {order[0] === 1 ? "Ascending" : "Descending"}
        </p>
        <hr />
        <div className="fleet-grid mt-4">
          {FleetList.sort((a, b) =>
            a.specs[sort] > b.specs[sort] ? order[0] : order[1]
          ).map((aircraft) => (
            <FleetCard aircraft={aircraft} key={aircraft.name} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default fleet;
