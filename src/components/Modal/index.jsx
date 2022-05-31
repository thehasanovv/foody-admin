import * as React from "react";
import Modal from "@mui/material/Modal";
import { useTranslation } from "react-i18next";
import {
  ModalBody,
  ModalTitle,
  ModalSubTitle,
  ModalButtonGroup,
  ModalButtonCancel,
  ModalButtonAccept,
} from "./ModalStyled";

export const ModalContent = ({ title, subtitle, modalOpen }) => {
  const [open, setOpen] = React.useState(false);
  const { t } = useTranslation();

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <ModalBody>
        <ModalTitle>{t("title delete")}</ModalTitle>
        <ModalSubTitle>{t("subtitle product delete")}</ModalSubTitle>
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
