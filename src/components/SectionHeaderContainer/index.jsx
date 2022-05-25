import styled from "styled-components";

const SectionHeaderContainer = ({ children }) => {
  return <SectionHeader>{children}</SectionHeader>;
};

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  height: 73px;
  background: #27283c;
  border-radius: 14px;
  margin-bottom: 1rem;

  & h2 {
    font-weight: 500;
    font-size: 20px;
    letter-spacing: 0.01em;
    color: #c7c7c7;
  }
`;

export default SectionHeaderContainer;
