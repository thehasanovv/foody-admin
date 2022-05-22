import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body{
        background:${({ theme }) => theme.body};
        color:${({ theme }) => theme.text};
        transition:all .5s linear;
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
    border-radius: 10px;
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
};