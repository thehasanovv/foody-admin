import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
    box-sizing: border-box;
    }

    body{
        margin: 0;
        padding: 0;
        background:${({ theme }) => theme.body};
        color:${({ theme }) => theme.text};
        transition:all .5s linear;
        font-family:'Roboto', sans-serif;
    }
    
    .isActive {
      background: ${(props) => props.theme.bgSidebarHover};
    }

    .btn-primary{
        background:${({ theme }) => theme.primary};
        color:${({ theme }) => theme.body};
        padding: .5rem 1.5rem !important;
        font-size:1rem;
        border-radius:1rem;
        cursor:pointer;
        outline:none;
        border:none;
    }
    
    ::-webkit-scrollbar {
    width: 5px;
    }

    ::-webkit-scrollbar-thumb {
    background: #C74FEB;
    border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb:hover {
    background: #ce68ed;
    }

`;
export const lightTheme = {
  body: "#fff",
  text: "#121212",
  primary: "#6200ee",
  bgSidebar: "#C74FEB",
  bgSidebarHover: "#ce68ed",
  cSidebarText: "#FCDDEC",
  //primary button properties
  bgPrimaryButton: "#c035a2",
  bgPrimaryButtonHover: "#c74feb",
  cPrimaryButton: "#000",
  //sidebar Icons text color
  cSidebarText: "#fff",
  bgSidebar: "#1e1e30",
  bgSidebarHover: "#27283c",
  // table colors
  bgTable: "#000",
  cTableText: "#fff",
};

export const darkTheme = {
  body: "#1e1e30",
  text: "#C7C7C7",
  secondaryText: "#8E8E93",
  primary: "#27283C",
  secondary: "",
  bgSidebar: "#C74FEB",
  bgSidebarHover: "#ce68ed",
  cSidebarText: "#FCDDEC",
  //primary button properties
  bgPrimaryButton: "#c035a2",
  bgPrimaryButtonHover: "#c74feb",
  cPrimaryButton: "#fff",
  //sidebar Icons text color
  cSidebarText: "#fff",
  bgSidebar: "#c74feb",
  bgSidebarHover: "#ce68ed",
  // table colors
  bgTable: "#fff",
  cTableText: "black",
};
