// import { useState, useEffect } from "react";
import styled from "styled-components";
import ControlButtons from "./ControlButtons";

const StepsStages = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0 auto;
  width: 96%;
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: relative;

    &:first-child {
      align-items: flex-start;
    }

    &:last-child {
      align-items: flex-end;
    }

    h3 {
      font-size: 1.1em;
      color: #cecec9;
      margin-bottom: 0.5em;
    }
    &:first-child h3 {
      color: #4d8721;
    }

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.2em;
      color: #fff;
      position: absolute;
      width: 1.5em;
      height: 1.5em;
      margin: 2px 0;
      border-radius: 50%;
      background-color: #fff;
      border: 7px solid #cecec9; /* Increased border-width to 4px */
      top: 0;
      left: 50%;
      transform: translate(-50%, 150%);
    }

    &:first-child span {
      left: 0;
      transform: translate(-8%, 150%);
      background-color: #4d8721;
      border-color: #4d8721;
    }

    &:nth-child(2) span {
      background-color: #fff;
      z-index: 1;
    }

    &:last-child span {
      left: auto;
      right: 0;
      transform: translate(10%, 150%);
    }

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 9px;
      background-color: #cecec9;
      top: calc(150% + 1.5em / 2); /* Adjusted the top value */
      left: 50%;
      transform: translateX(-49%);
      z-index: 1;
    }
    &:first-child::before {
      width: 100%;
      left: 65%;
      background-color: #4d8721;
    }
    &:last-child::before {
      width: 110%;
      left: 25%;
    }
  }
`;

const ProgressSteps = () => {
  return (
    <>
      <StepsStages>
        <li>
          <h3>Preparing Order</h3>
          <span></span>
        </li>
        <li>
          <h3>Shipped</h3>
          <span></span>
        </li>
        <li>
          <h3>Delivered</h3>
          <span></span>
        </li>
      </StepsStages>
      <ControlButtons />
    </>
  );
};

export default ProgressSteps;
