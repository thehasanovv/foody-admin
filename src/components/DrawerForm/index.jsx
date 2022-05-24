import React from "react";
import {
  DrawerContainer,
  DTitle,
  DSubContainer,
  DSubTitle,
  Panel,
} from "./DrawerStyle";

export const DrawerForm = ({
  children,
  title,
  subTitle,
  subTitle2,
  setIsOpen,
  onSubmitHandler,
}) => {
  return (
    <>
      <DrawerContainer>
        {/* Title */}
        <DTitle>{title}</DTitle>
        {/* ===================================================== */}
        {/* SubTitle */}
        <DSubContainer>
          <DSubTitle>{subTitle}</DSubTitle>
          {/* Subtitle content */}
          <Panel>
            <input type="text" placeholder="Search" />
            <button type="submit">Search</button>
          </Panel>
        </DSubContainer>
        {/* ===================================================== */}
        {/* SubTitle2 */}
        <DSubContainer>
          <DSubTitle>{subTitle2}</DSubTitle>
          {/* Subtitle content */}
          <Panel>
            <div>
              {children}
              {/* It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like). It is a long established
              fact that a reader will be distracted by the readable content of a
              page when looking at its layout. The point of using Lorem Ipsum is
              that it has a more-or-less normal distribution of letters, as
              opposed to using 'Content here, content here', making it look like
              readable English. Many desktop publishing packages and web page
              editors now use Lorem Ipsum as their default model text, and a
              search for 'lorem ipsum' will uncover many web sites still in
              their infancy. Various versions have evolved over the years,
              sometimes by accident, sometimes on purpose (injected humour and
              the like). */}
            </div>
          </Panel>
        </DSubContainer>
        {/* ===================================================== */}
        {/* Button */}
        <DSubContainer>
          <button type="submit" onClick={() => setIsOpen()}>
            Close
          </button>
          <button type="submit" onClick={() => onSubmitHandler()}>
            Submit
          </button>
          {/* Buttons */}
        </DSubContainer>
      </DrawerContainer>
    </>
  );
};
