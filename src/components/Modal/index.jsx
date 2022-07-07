import * as React from "react";
import Modal from "@mui/material/Modal";
import { useContext } from "react";
import { DrawerContext } from "../../contextApi/DrawerContext";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import {
  ModalBody,
  ModalTitle,
  ModalSubTitle,
  ModalButtonGroup,
  ModalButtonCancel,
  ModalButtonAccept,
} from "./ModalStyled";

export const ModalContent = ({ title, subtitle, rm }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { openDeleteModal, setOpenDeleteModal, deleteProductModalID } =
    useContext(DrawerContext);

  const handleClose = () => {
    setOpenDeleteModal(false);
  };

  const handleDelete = () => {
    setOpenDeleteModal(false);
    dispatch(rm(deleteProductModalID));
    // setDeleteProductModalID("");
  };

  return (
    <Modal
      open={openDeleteModal}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
      disableScrollLock={true}
    >
      <ModalBody>
        <ModalTitle>{title}</ModalTitle>
        <ModalSubTitle>{subtitle}</ModalSubTitle>
        <ModalButtonGroup>
          <ModalButtonCancel onClick={handleClose}>
            {t("cancel")}
          </ModalButtonCancel>
          <ModalButtonAccept onClick={handleDelete}>
            {t("delete")}
          </ModalButtonAccept>
        </ModalButtonGroup>
      </ModalBody>
    </Modal>
  );
};
