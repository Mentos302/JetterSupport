import React from "react";
import { Link } from "react-router-dom";
import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react";

const AppealList = (props) => {
  const { appeals } = props;

  //   appeals.sort((a, b) => (a.status === "open" ? -1 : 1));

  return (
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>Последние обращения</CCardHeader>
          <CCardBody>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Имя клиента</th>
                  {appeals.length ? (
                    appeals[0].orderId ? (
                      <th scope="col">Номер заказа</th>
                    ) : null
                  ) : null}
                  <th scope="col">Дата обращения</th>
                  <th scope="col">Статус</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {appeals.length
                  ? appeals.map((e) => (
                      <tr key={e._id}>
                        <th scope="row">{e.reqidenty}</th>
                        <td>{e.from.name}</td>
                        {e.orderId ? <th scope="row">{e.orderId}</th> : null}
                        <td>{e.date.split("T")[0]}</td>

                        <td>
                          <ReqStatus status={e.status} />
                        </td>
                        <td>
                          <Link to={`/appeal/${e._id}`}>
                            <button className="btn btn-primary">
                              Перейти к запросу
                            </button>
                          </Link>
                        </td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </table>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

const ReqStatus = (props) => {
  switch (props.status) {
    case "open":
      return <button className="btn btn-danger">Открыто</button>;
    case "process":
      return <button className="btn btn-warning">В работе</button>;
    case "closed":
      return <button className="btn btn-success">Закрыто</button>;
    default:
      console.log(`k`);
  }
};

export default AppealList;
