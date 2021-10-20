import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
} from "@coreui/react";
import API from "../../api";

const Tables = () => {
  const [reclamations, setReclamations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await API.get(`appeal`);
        setReclamations(res.data.reverse().slice(0, 4));
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  return reclamations[0] ? (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>Последние обращения</CCardHeader>
            <CCardBody className="cardsList">
              {reclamations.map((e) => (
                <div className="card">
                  <img
                    className="card-img-top"
                    src={
                      e.photos[0]
                        ? e.photos[0]
                        : `https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg`
                    }
                    alt="Изображение титульное"
                  />
                  <div className="card-body">
                    {e.status === "open" ? (
                      <span className="badge mb-2 badge-danger">Открыто</span>
                    ) : null}
                    {e.status === "process" ? (
                      <span className="badge mb-2 badge-warning">В работе</span>
                    ) : null}
                    {e.status === "closed" ? (
                      <span className="badge mb-2 badge-success">Закрыто</span>
                    ) : null}
                    <h5 className="card-title">Обращение №{e.reqidenty}</h5>
                    <p className="card-text">
                      {e.text.length < 100
                        ? e.text
                        : `${e.text.substr(0, 100)}...`}
                    </p>
                    <Link to={`/reclamation/${e._id}`}>
                      <button className="btn btn-primary">
                        Перейти к запросу
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  ) : null;
};

export default Tables;
