import React, { useState } from "react";
import {
  CAlert,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CButton,
  CCol,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CFormGroup,
  CTextarea,
  CLabel,
} from "@coreui/react";
import API from "../../api";

const Modal = (props) => {
  const [tgMessage, setTgMessage] = useState("");

  const { info, setInfo, appeal } = props;
  const { id, name } = appeal;

  const msgChangeHandler = (e) => {
    setTgMessage(e.target.value);
  };

  const msgSubmitHandler = async () => {
    try {
      await API.post(`/appealation/sendMessage`, {
        id,
        msg: tgMessage,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <CModal show={info} onClose={() => setInfo(!info)} color="info">
      <CModalHeader closeButton>
        <CModalTitle>Отправка сообщения пользователю {name}</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CFormGroup row>
          <CCol md="3">
            <CLabel htmlFor="textarea-input">Сообщение</CLabel>
          </CCol>
          <CCol xs="12" md="9">
            <CTextarea
              name="textarea-input"
              id="textarea-input"
              rows="9"
              placeholder="Введите ваше сообщение ..."
              onChange={msgChangeHandler}
            />
          </CCol>
        </CFormGroup>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={() => setInfo(!info)}>
          Отмена
        </CButton>
        <CButton
          color="info"
          onClick={() => {
            msgSubmitHandler();
            setInfo(!info);
          }}
        >
          Отправить
        </CButton>{" "}
      </CModalFooter>
    </CModal>
  );
};

export default Modal;
