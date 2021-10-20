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

  return counter.usersQuantity ? (
    <CRow>
      <CCol sm="12" lg="6">
        <CWidgetDropdown
          color="gradient-primary"
          header={counter.usersQuantity}
          text="Пользователя(ей)"
          footerSlot={
            <ChartLineSimple
              pointed
              className="c-chart-wrapper mt-3 mx-3"
              style={{ height: "70px" }}
              dataPoints={counter.usersHistory.reverse()}
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
          header={JSON.stringify(counter.reclamOpens)}
          text="Открытых рекламаций"
          footerSlot={
            <ChartLineSimple
              pointed
              className="mt-3 mx-3"
              style={{ height: "70px" }}
              dataPoints={counter.reclamHistory.reverse()}
              pointHoverBackgroundColor="warning"
              options={{ elements: { line: { tension: 0.00001 } } }}
              label="новых запросов"
              labels="day"
            />
          }
        ></CWidgetDropdown>
      </CCol>
    </CRow>
  ) : null;
};
