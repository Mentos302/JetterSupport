import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  CAlert,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CButton,
} from "@coreui/react";
import Modal from "./Modal";
import API from "../../api";

const AppealBody = (props) => {
  let history = useHistory();
  const [info, setInfo] = useState(false);
  const [pdfMessage, setPdfMessage] = useState(false);

  const { status, photos, videos, documents, _id } = props.appeal;

  const changeStatus = async (status) => {
    try {
      await API.put(`appeal/status`, {
        id: _id,
        status,
      });
      props.setAppeal({ ...props.appeal, status });
    } catch (e) {
      console.log(e);
    }
  };

  const deleteHandler = async (id) => {
    try {
      await API.delete(`/appeal/${id}`);

      history.push("/home");
    } catch (e) {
      console.log(e);
    }
  };

  const getPDF = async (id) => {
    try {
      setPdfMessage(true);
      const { data } = await API.get(`/appeal/pdf/${id}`);
      window.open(`${data}`);
      setPdfMessage(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div className="reqBtns">
        <CDropdown className="m-1">
          <CDropdownToggle
            split
            color={(() => {
              switch (status) {
                case "open":
                  return "danger";
                case "process":
                  return "warning";
                case "success":
                  return "success";
              }
            })()}
            size="lg"
          >
            {(() => {
              switch (status) {
                case "open":
                  return "Открыто";
                case "process":
                  return "В работе";
                case "success":
                  return "Закрыто";
              }
            })()}
          </CDropdownToggle>
          <CDropdownMenu>
            {status === "closed" ? (
              <CDropdownItem disabled>Закрыто</CDropdownItem>
            ) : (
              <CDropdownItem onClick={() => changeStatus(`closed`)}>
                Закрыто
              </CDropdownItem>
            )}
            {status === "process" ? (
              <CDropdownItem disabled>В работе</CDropdownItem>
            ) : (
              <CDropdownItem onClick={() => changeStatus(`process`)}>
                В работе
              </CDropdownItem>
            )}
            {status === "open" ? (
              <CDropdownItem disabled>Открыто</CDropdownItem>
            ) : (
              <CDropdownItem onClick={() => changeStatus(`open`)}>
                Открыто
              </CDropdownItem>
            )}
          </CDropdownMenu>
        </CDropdown>
        <CButton
          color="info"
          onClick={() => setInfo(!info)}
          className="tgResponseBtn mr-1"
        >
          Ответить
        </CButton>
      </div>
      <div className="card">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Прикрепленные материалы</b>
          </li>
          <li className="list-group-item">
            Фотографии
            <span className="badge badge-primary ml-1">{photos.length}</span>
            <div className="filesList mt-2">
              {photos.length
                ? photos.map((e, i) => (
                    <a rel="noreferrer" target="_blank" href={e}>
                      Файл #{i + 1}
                    </a>
                  ))
                : null}
            </div>
          </li>
          <li className="list-group-item">
            Видео
            <span className="badge badge-primary ml-1">{videos.length}</span>
            <div className="filesList mt-2">
              {videos.length
                ? videos.map((e, i) => (
                    <a rel="noreferrer" target="_blank" href={e}>
                      Файл #{i + 1}
                    </a>
                  ))
                : null}
            </div>
          </li>
          <li className="list-group-item">
            Документы
            <span className="badge badge-primary ml-1">{documents.length}</span>
            <div className="filesList mt-2">
              {documents.length
                ? documents.map((e, i) => (
                    <a rel="noreferrer" target="_blank" href={e}>
                      Файл #{i + 1}
                    </a>
                  ))
                : null}
            </div>
          </li>
          <li className="pdfButton">
            {pdfMessage ? (
              <div className="p-3">
                <CAlert color="danger">
                  Ожидайте, готовлю для вас отчёт...
                </CAlert>
              </div>
            ) : (
              <>
                <button
                  onClick={() => getPDF(_id)}
                  className="btn btn-danger m-3"
                >
                  Скачать отчёт в PDF
                </button>
                <button
                  onClick={() => deleteHandler(_id)}
                  className="btn btn-secondary mt-3"
                >
                  Удалить рекламацию
                </button>
              </>
            )}
          </li>
        </ul>
      </div>
      <Modal info={info} setInfo={setInfo} appeal={props.appeal} />
    </div>
  );
};

export default AppealBody;
