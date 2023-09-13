import { Box } from "@chakra-ui/react";
import { Carousel } from "antd";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "500px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const CarouselTest: React.FC = () => {
  return (
    <Carousel autoplay={true} autoplaySpeed={1500} dots={false}>
      <Box>
        <h3 style={contentStyle}>Page 1</h3>
      </Box>
      <Box>
        <h3 style={contentStyle}>Page 2</h3>
      </Box>
      <Box>
        <h3 style={contentStyle}>Page 3</h3>
      </Box>
      <Box>
        <h3 style={contentStyle}>Page 4</h3>
      </Box>
    </Carousel>
  );
};

export default CarouselTest;
