import { Wrapper, DetailsColumn } from "./HeaderStyles";

const Header = () => {
  return (
    <Wrapper>
      {/* <Border>. . . . . . . . . . . . . . . . . . . . . . . . . . . . .</Border> */}
      <h1>
        Order: <span>#125654852</span>
      </h1>
      <DetailsColumn>
        <h2>Estimated Delivery:</h2>
        <h2>Thursday, May 28</h2>
      </DetailsColumn>
    </Wrapper>
  );
};

export default Header;
