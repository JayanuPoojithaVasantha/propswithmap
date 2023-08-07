import "./App.css";
import {
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
  Button,
  CardText,
} from "reactstrap";
const tops = [
  {
    Imagepath:
      "https://assets.ajio.com/medias/sys_master/root/20230626/i0mt/64999570eebac147fc0912e5/-473Wx593H-466308794-maroon-MODEL.jpg ",
    Brand: "CHOKHI DHANI ",
    Model: "Embroidered Round-Neck Top",
    Price: "Rs.375",
  },
  {
    Imagepath:
      "https://assets.ajio.com/medias/sys_master/root/20230626/g0Gk/6499bf5ba9b42d15c9f48cf9/-473Wx593H-466310092-black-MODEL3.jpg ",
    Brand: "SHEETAL ASSOCIATES",
    Model: " Graphic Print Round-Neck Top",
    Price: "Rs.360",
  },
  {
    Imagepath:
      "https://assets.ajio.com/medias/sys_master/root/20230629/EzdW/649d0423eebac147fc38af40/-473Wx593H-466173772-white-MODEL9.jpg ",
    Brand: " ASHLEE",
    Model: "Embroidered Round-Neck Top",
    Price: "Rs.490",
  },
  {
    Imagepath:
      "https://assets.ajio.com/medias/sys_master/root/20230624/irUM/6496faefa9b42d15c9eedb98/-473Wx593H-465564804-red-MODEL.jpg ",
    Brand: " KIBO",
    Model: " Floral Print Smocked Top",
    Price: "Rs.666",
  },
  {
    Imagepath:
      "https://assets.ajio.com/medias/sys_master/root/20230707/aU9c/64a73ee9eebac147fc5ae4d2/-473Wx593H-466338841-black-MODEL5.jpg ",
    Brand: "  CHOKHI DHANI",
    Model: " Embroidered Top with Bracelet Sleeves",
    Price: "Rs.375",
  },
  {
    Imagepath:
      "https://assets.ajio.com/medias/sys_master/root/20230624/cBHE/64961be3a9b42d15c9d1dbfb/-473Wx593H-465155418-maroon-MODEL.jpg ",
    Brand: " KIBO",
    Model: " Fitted Crop Wrap Top",
    Price: "Rs.525",
  },
  {
    Imagepath:
      "https://assets.ajio.com/medias/sys_master/root/20230624/1Pso/64962859a9b42d15c9d40d8c/-473Wx593H-465140452-blue-MODEL.jpg",
    Brand: " KIBO",
    Model: " Floral Print V-Neck Top",
    Price: "Rs.612",
  },
  {
    Imagepath:
      "https://assets.ajio.com/medias/sys_master/root/20230622/MHf0/6493f730d55b7d0c63a03575/-473Wx593H-466295064-white-MODEL.jpg ",
    Brand: " FERY LONDON    ",
    Model: " Square-Neck Smocked Top",
    Price: "Rs.580",
  },
  {
    Imagepath:
      " https://assets.ajio.com/medias/sys_master/root/20230706/u2EB/64a6fed4eebac147fc5aae34/-473Wx593H-420325862-pink-MODEL.jpg",
    Brand: " HAWT",
    Model: "Floral Print Top",
    Price: "Rs.150",
  },
  {
    Imagepath:
      "https://assets.ajio.com/medias/sys_master/root/20230628/DrlV/649ba5d1eebac147fc1bb702/-473Wx593H-465806766-black-MODEL.jpg ",
    Brand: " AAYUSIKA    ",
    Model: " Polka-Dot V-Neck Peplum Top",
    Price: "Rs.600",
  },
  {
    Imagepath:
      "https://assets.ajio.com/medias/sys_master/root/20230624/cBHE/64961be3a9b42d15c9d1dbfb/-473Wx593H-465155418-maroon-MODEL.jpg ",
    Brand: " KIBO",
    Model: " Fitted Crop Wrap Top",
    Price: "Rs.525",
  },
];

function App() {
  return (
    <div>
      <Container>
        <Row>
          {tops.map((ajio, index) => {
            return (
              <Col key={index} className="col-4">
                <Card className="my-2 mx-2">
                  <img
                    src={ajio.Imagepath}
                    alt={ajio.Imagepath}
                    height={400}
                    width={400}
                  />
                  <CardBody className="text-en center-text">
                    <CardTitle style={{ color: "green" }} tag="h6">
                      {ajio.Brand}
                    </CardTitle>
                    <CardTitle style={{ fontFamily: "unset" }} tag="h5">
                      {ajio.Model}
                    </CardTitle>
                    <CardText>{ajio.Price}</CardText>
                    <Button color="success">BUY</Button>
                    <Button color="primary">Add to Card</Button>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default App;
