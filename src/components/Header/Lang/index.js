import styled from "styled-components";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

const Lang = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [flag, setFlag] = useState("en");
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (flag) => {
    setFlag(flag);
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

const ContainerLang = styled.div``;
export default Lang;