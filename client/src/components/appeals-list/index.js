import AppealsList from "./AppealsList";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import API from "../../api";

const Dashboard = () => {
  const location = useLocation();
  const [appeals, setAppeals] = useState([]);

  const category = location.pathname.split("/").lastItem;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const path = category == "appeal" ? "" : category;

        const res = await API.get(`appeal/${path}`);
        setAppeals(res.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  return <AppealsList appeals={appeals} />;
};

export default Dashboard;
