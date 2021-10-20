import React, { useState, useEffect } from "react";
import { CWidgetDropdown, CRow, CCol } from "@coreui/react";
import ChartLineSimple from "../../views/charts/ChartLineSimple";
import API from "../../api";

export default () => {
  const [counter, setCounter] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await API.get(`counter`);
        setCounter(res.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  return counter.usersData ? (
    <CRow>
      <CCol sm="12" lg="6">
        <CWidgetDropdown
          color="gradient-primary"
          header={counter.usersData.quantity || "0"}
          text="Пользователя(ей)"
          footerSlot={
            <ChartLineSimple
              pointed
              className="c-chart-wrapper mt-3 mx-3"
              style={{ height: "70px" }}
              dataPoints={counter.usersData.history.reverse()}
              pointHoverBackgroundColor="primary"
              label="новые пользователи"
              labels="day"
            />
          }
        ></CWidgetDropdown>
      </CCol>

      <CCol sm="12" lg="6">
        <CWidgetDropdown
          color="gradient-warning"
          header={counter.appealsData.quantity || "0"}
          text="Открытых обращений"
          footerSlot={
            <ChartLineSimple
              pointed
              className="mt-3 mx-3"
              style={{ height: "70px" }}
              dataPoints={counter.appealsData.history.reverse()}
              pointHoverBackgroundColor="warning"
              options={{ elements: { line: { tension: 0.00001 } } }}
              label="новых обращений"
              labels="day"
            />
          }
        ></CWidgetDropdown>
      </CCol>
    </CRow>
  ) : null;
};
