import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Cards from "./Cards";
import AppealBody from "./Body";
import API from "../../api";

const Appeal = () => {
  let location = useLocation();
  const [appeal, setAppeal] = useState({});

  useEffect(() => {
    const appealID = location.pathname.split("/").lastItem;

    const fetchData = async () => {
      try {
        const res = await API.get(`appeal/single/${appealID}`);
        setAppeal(res.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, [location.pathname]);

  return appeal._id ? (
    <div className="requestContainer">
      <Cards appeal={appeal} />
      <AppealBody appeal={appeal} />
    </div>
  ) : null;
};

export default Appeal;
