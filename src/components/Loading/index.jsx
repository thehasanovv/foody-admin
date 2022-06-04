import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <LoadingContainer>
      <img src="/images/loading.gif" />
    </LoadingContainer>
  );
};

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90%;

  & img {
    border-radius: 50%;
    width: 150px;
  }
`;
export default Loading;
