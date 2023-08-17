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
      "https://assets.ajio.com/medias/sys_master/root/20230602/ZUsA/6479582242f9e729d711451a/-473Wx593H-462133947-yellow-MODEL.jpg ",
    Brand: " WINERED",
    Model: " Embroidered V-neck Top",
    Price: "Rs.727",
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
      "https://assets.ajio.com/medias/sys_master/root/20230629/tYbQ/649cf2f3a9b42d15c92064b3/-473Wx593H-466111265-white-MODEL.jpg",
    Brand: "STYLE QUOTIENT  ",
    Model: " Round-Neck Top with Petal-Sleeves",
    Price: "Rs.549",
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
      "https://assets.ajio.com/medias/sys_master/root/20230621/Hca5/6492abb2d55b7d0c63946c17/-473Wx593H-463984451-yellow-MODEL.jpg ",
    Brand: " NEUDIS",
    Model: " Slim Fit Top with Boat-Neck",
    Price: "Rs.448",
  },
  {
    Imagepath:
      "https://assets.ajio.com/medias/sys_master/root/20230707/n2Ty/64a83d3beebac147fc5da82c/-473Wx593H-466342380-black-MODEL.jpg ",
    Brand: " SHEETAL ASSOCIATES    ",
    Model: " Floral Top with Puff Sleeves",
    Price: "Rs.380",
  },
  {
    Imagepath:
      "https://assets.ajio.com/medias/sys_master/root/20230525/qauA/646f27ea42f9e729d7c4aec8/-473Wx593H-464989769-red-MODEL.jpg",
    Brand: "WEDANI ",
    Model: " Floral Print Top with Puff Sleeves",
    Price: "Rs.349",
  },
  {
    Imagepath:
      "https://assets.ajio.com/medias/sys_master/root/20230522/PeOt/646b6fab42f9e729d7a092e8/-473Wx593H-466173767-navy-MODEL.jpg ",
    Brand: " ASHLEE",
    Model: " Floral Print Round-Neck Top",
    Price: "Rs.480",
  },
  {
    Imagepath:
      " https://assets.ajio.com/medias/sys_master/root/20230628/huf2/649bc19deebac147fc1f1240/-473Wx593H-465946005-black-MODEL.jpg",
    Brand: " GUFRINA",
    Model: " Floral Tunic with Bishop Sleeves",
    Price: "Rs.580",
  },
  {
    Imagepath:
      " https://assets.ajio.com/medias/sys_master/root/20230526/hrAx/646fe55042f9e729d7d745e4/-473Wx593H-465325266-beige-MODEL.jpg",
    Brand: " WEDANI",
    Model: " Camouflage Print Round-Neck Top",
    Price: "Rs.249",
  },
  {
    Imagepath:
      " https://assets.ajio.com/medias/sys_master/root/20230617/bffr/648d09e0d55b7d0c63713135/-473Wx593H-466283448-black-MODEL.jpg",
    Brand: " ANUTTARA FASHIONS    ",
    Model: " Embroidered Shirt with Mandarin Collar",
    Price: "Rs.495",
  },
  {
    Imagepath:
      " https://assets.ajio.com/medias/sys_master/root/20230602/e1Jx/64799cc3d55b7d0c6343e84d/-473Wx593H-462765645-peach-MODEL.jpg",
    Brand: " DIVENA",
    Model: " Floral Print Mandarin Collar Top",
    Price: "Rs.768",
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
