import React from "react";
import styled from "styled-components";
import { ChartBar } from "../../components/Chards/Bar";
import { ChartDonut } from "../../components/Chards/Donut";
import { ChartLine } from "../../components/Chards/Line";

const Dashboard = () => {
  return (
    <DashboardList>
      <DashboardCardStyled width={65} margin={20}>
        <ChartDonut />
      </DashboardCardStyled>
      <DashboardCardStyled width={32}>
        <ChartLine />
      </DashboardCardStyled>
      <DashboardCardStyled width={32} margin={20}>
        <NotFoundTitle>There are no risks assigned.</NotFoundTitle>
      </DashboardCardStyled>
      <DashboardCardStyled width={65}>
        <ChartBar />
      </DashboardCardStyled>
    </DashboardList>
  );
};
export default React.memo(Dashboard);

const DashboardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

const DashboardCardStyled = styled.div`
  position: relative;
  width: ${({ width }) => (width ? `${width}%` : "100%")};
  height: 472px;
  background-color: ${({ theme }) => theme.colors.darkBlue_3};
  border-radius: 14px;
  margin-bottom: 20px !important;
  padding: 20px !important;
  margin-right: ${({ margin }) => (margin ? `${margin}px` : "0px")};

  @media screen and (max-width: 1200px) {
    width: 100%;
    margin-right: 0px;
  }
`;

const NotFoundTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 12%;
  transform: translate (-50%, -50%);
`;

// const DashboardList = styled(Grid).attrs(() => ({
//   container: true,
//   spacing: 1,
// }))`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: flex-end;
// `;

// const DashboardCardStyled = styled(Grid).attrs(({ col }) => ({
//   item: true,
//   xs: 12,
//   md: col,
// }))`
//   position: relative;
//   width: ${({ width }) => (width ? `${width}px` : "100%")};
//   height: 472px;
//   background-color: ${({ theme }) => theme.colors.darkBlue_3};
//   border-radius: 14px;
//   margin-bottom: 20px !important;
//   padding: 20px !important;

//   &:nth-child(odd) {
//     margin-right: 20px !important;
//   }
// `;

// const NotFoundTitle = styled.p`
//   position: absolute;
//   top: 50%;
//   left: 20%;
//   transform: translate (-50%, -50%);
// `;
