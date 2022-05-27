import styled from "styled-components";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Lang = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [flag, setFlag] = useState("en");
  const open = Boolean(anchorEl);
  const { i18n } = useTranslation();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    let lang = localStorage.getItem("lang") || "en";
    setFlag(lang);
    i18n.changeLanguage(lang);
  }, [flag, i18n]);

  const handleClose = (flag) => {
    if (flag === "az" || flag === "en" || flag === "fr") {
      setFlag(flag);
      localStorage.setItem("lang", flag);
    }
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        id="dropdownBtn"
        aria-controls={open ? "dropdown" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <img src={`/images/${flag}-flag.svg`} />
      </Button>
      <Menu
        id="dropdown"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        disableScrollLock={true}
        MenuListProps={{
          "aria-labelledby": "dropdownBtn",
        }}
      >
        <MenuItem onClick={handleClose.bind(null, "en")}>
          <img src="/images/en-flag.svg" alt="english flag" />
        </MenuItem>
        <MenuItem onClick={handleClose.bind(null, "az")}>
          <img src="/images/az-flag.svg" alt="azerbaijan flag" />
        </MenuItem>
        <MenuItem onClick={handleClose.bind(null, "fr")}>
          <img src="/images/fr-flag.svg" alt="french flag" />
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Lang;
