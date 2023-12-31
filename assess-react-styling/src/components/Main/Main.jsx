import DeliveryTrackingBar from "../DeliveryTrackingBar";
import { Description } from "./MainStyles";

const Main = () => {
  return (
    <div>
      <DeliveryTrackingBar />
      <Description>
        Arriving by <span>&nbsp;Thursday, May 28.</span>
      </Description>
    </div>
  );
};

export default Main;
