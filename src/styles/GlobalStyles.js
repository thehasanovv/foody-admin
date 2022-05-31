import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
    box-sizing: border-box;
    }

    html {
      overflow-y: scroll;
    }

    body{
        margin: 0;
        padding: 0;
        background:${({ theme }) => theme.body};
        color:${({ theme }) => theme.text};
        transition:all 0.3s linear;
        font-family:'Roboto', sans-serif;
    }
    
    a{
      text-decoration: none;
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

export const fonts = {
  small: "12px",
  medium: "18px",
  large: "28px",
};
export const lightTheme = {
  body: "#fff",
  text: "#121212",
  primary: "#b4b4b4",
  bgSidebarHover: "#ce68ed",
  cSidebarText: "#FCDDEC",
  //primary button properties
  bgPrimaryButton: "#c035a2",
  bgPrimaryButtonHover: "#c74feb",
  cPrimaryButton: "#000",
  //sidebar Icons text color
  cSidebarText: "#000",
  bgSidebar: "#b4b4b4",
  bgSidebarHover: "#f0f0f0",
  // table colors
  bgTable: "#000",
  cTableText: "#fff",
  // Dsahboard card panel colors
  bgDashboardCard: "#e6e6e6",
  //Drawer colors
  bgDrawer: "#e6e6e6",
  bgDrawerSecond: "#bebebe",
  // card colors
  bgCard: "#c8c8c8",
  Cardshadow:
    "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;",
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
  // Dsahboard card panel colors
  bgDashboardCard: "#27283C",
  //Drawer colors
  bgDrawer: "#38394e",
  bgDrawerSecond: "#43445a",
  // card colors
  bgCard: "#fff",
  Cardshadow:
    "rgba(255 ,255, 255, 0.03) 0px 2px 1px, rgba(255,255, 255, 0.03) 0px 4px 2px, rgba(255,255, 255, 0.03) 0px 8px 4px, rgba(255,255,255, 0.03) 0px 16px 8px, rgba(255, 255, 255, 0.03) 0px 32px 16px;",
};
