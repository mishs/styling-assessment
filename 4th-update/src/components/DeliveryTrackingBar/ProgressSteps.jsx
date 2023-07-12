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
      color: #4a154b;
      margin-bottom: 0.5em;
    }
    span {
      width: 1.5em;
      height: 1.5em;
      margin: 2px 0;
      border-radius: 50%;
      background-color: #f3e7f3;
      border: 7px solid #4a154b; /* Increased border-width to 4px */
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.2em;
      color: #4a154b;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, 150%);
    }

    /* target first span */
    &:first-child span {
      left: 0;
      transform: translate(-8%, 150%);
      background-color: green;
    }

    /* target last span */
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
      background-color: lightgrey;
      top: calc(132% + 1.5em / 2); /* Adjusted the top value */
      left: 50%;
      transform: translateX(-50%);
      z-index: -1;
    }
    &:first-child::before {
      width: 100%;
      left: 65%;
      background-color: green;
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

// import styled from "styled-components";
// import ControlButtons from "./ControlButtons";

// const StepsStages = styled.ul`
//   display: flex;
//   justify-content: space-between;
//   list-style: none;
//   padding: 0;
//   margin: 0 auto;
//   width: 96%;
//   li {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     width: 100%;
//     position: relative;
//     h3 {
//       font-size: 1.2em;
//       color: #4a154b;
//       margin-bottom: 0.5em;
//       text-align: center;
//       &:first-child {
//         text-align: left;
//       }
//       &:last-child {
//         text-align: right;
//       }
//     }
//     span {
//       width: 1.5em;
//       height: 1.5em;
//       margin: 5px 0;
//       border-radius: 50%;
//       background-color: white; /* Changed background-color to white */
//       border: 7px solid #4a154b;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       font-size: 1.2em;
//       color: #4a154b;
//       position: absolute;
//       top: 0;
//       left: 50%;
//       transform: translate(-50%, 150%);
//     }
//     &::before {
//       content: "";
//       position: absolute;
//       width: calc(
//         100% - 1.5em - 14px
//       ); /* Adjusted width to account for span size and border */
//       height: 9px;
//       background-color: lightgrey;
//       top: calc(132% + 1.5em / 2);
//       left: 50%;
//       transform: translateX(-50%);
//       z-index: -1;
//     }
//     &:first-child::before {
//       width: calc(
//         50% - 1.5em / 2 - 7px
//       ); /* Adjusted width to account for half of span size and border */
//       left: calc(
//         50% + 1.5em / 4 + 3.5px
//       ); /* Adjusted position to account for half of span size and border */
//     }
//     &:last-child::before {
//       width: calc(
//         50% - 1.5em / 2 - 7px
//       ); /* Adjusted width to account for half of span size and border */
//       left: calc(
//         50% - 1.5em / 4 - 3.5px
//       ); /* Adjusted position to account for half of span size and border */
//     }
//   }
// `;

// const ProgressSteps = () => {
//   return (
//     <>
//       <StepsStages>
//         <li>
//           <h3>Preparing Order</h3>
//           <span></span> {/* Removed numbers */}
//         </li>
//         <li>
//           <h3>Shipped</h3>
//           <span></span> {/* Removed numbers */}
//         </li>
//         <li>
//           <h3>Delivered</h3>
//           <span></span> {/* Removed numbers */}
//         </li>
//       </StepsStages>
//       <ControlButtons />
//     </>
//   );
// };

// export default ProgressSteps;
