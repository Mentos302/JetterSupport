import React from "react";
import { CCard, CCardBody, CCardHeader, CCol } from "@coreui/react";

const Cards = (props) => {
  const { status, from, orderId, text, reqidenty, date, photos } = props.appeal;

  return (
    <div>
      <CCol>
        <CCard
          accentColor={(() => {
            if (status === "open") {
              return "danger";
            } else if (status === "process") {
              return "warning";
            } else if (status === "closed") {
              return "success";
            }
          })()}
        >
          <CCardHeader className="reqCardHeader">
            <div id="title">
              Обращение пользователя <b>{from.name}</b>
            </div>
            {orderId ? <div id="subtitle">к заказу № {orderId}</div> : null}
          </CCardHeader>
          <CCardBody>
            {text}

            <div className="mt-2 cardFooter">
              #{reqidenty} от {date}
            </div>
          </CCardBody>
        </CCard>
        {photos
          ? photos.map((e) => (
              <img className="reclamPhoto" src={e} alt="Изображение" />
            ))
          : null}
      </CCol>
    </div>
  );
};

export default Cards;
