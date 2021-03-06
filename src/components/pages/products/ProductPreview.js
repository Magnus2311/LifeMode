import React from "react";
import { Link } from "react-router-dom";
import { Translator } from "../../../services/languages/Laguage";

const ProductPreview = (props) => {
  const {
    id,
    name,
    carbohydrates,
    fats,
    calories,
    proteins,
    image,
  } = props.product;

  return (
    // <>
    //   <Card className="product-item">
    //     <Card.Body>
    //       <Card.Header className="text-center card-header" as="h5">
    //         {<Translator getString={name} />}
    //       </Card.Header>
    //       <Card.Img
    //         variant="bottom"
    //         src={image}
    //         style={{ marginBottom: "10px" }}
    //       />
    //       <Container fluid className="text-center products-info">
    //         <Row>
    //           <div className="col-6">
    //             <div>{<Translator getString="Carbohydrates" />}</div>
    //             <div>{carbohydrates}</div>
    //           </div>
    //           <div className="col-6">
    //             <div>{<Translator getString="Fats" />}</div>
    //             <div>{fats}</div>
    //           </div>
    //           <div className="col-6">
    //             <div>{<Translator getString="Calories" />}</div>
    //             <div>{calories}</div>
    //           </div>
    //           <div className="col-6">
    //             <div>{<Translator getString="Proteins" />}</div>
    //             <div>{protein}</div>
    //           </div>
    //         </Row>
    //       </Container>
    //     </Card.Body>
    //   </Card>
    // </>

    <div className="product">
      {/* <div className="rank">{id}</div> */}
      <div className="front">
        <img className="thumbnail" src={image} alt="" />
        <h3 className="product-name">{<Translator getString={name} />}</h3>
        <div className="stats">
          <p className="receipts-count">5432</p>
          <div className="receipts">
            <img src={image} alt="" />
            <img src={image} alt="" />
            <img src={image} alt="" />
          </div>
        </div>
      </div>

      <div className="back">
        <div className="product-info">
          <p className="product-data-info">
            {carbohydrates}
            <span>
              <Translator getString="Carbohydrates" />
            </span>
          </p>
          <p className="product-data-info">
            {fats}
            <span>
              <Translator getString="Fats" />
            </span>
          </p>
          <p className="product-data-info">
            {calories}
            <span>
              <Translator getString="Calories" />
            </span>
          </p>
          <p className="product-data-info">
            {proteins}
            <span>
              <Translator getString="Proteins" />
            </span>
          </p>
        </div>
        <Link className="to-receipts" href={`/receipts/${id}`}>
          <Translator getString="Receipts" />
        </Link>
        <div className="receipts">
          <div className="receipt">
            <div className="icon">
              <img src={image} alt="" />
            </div>
            <p className="name">Receipt 1</p>
            <p className="number"></p>
          </div>
          <div className="receipt">
            <div className="icon">
              <img src={image} alt="" />
            </div>
            <p className="name">Receipt 1</p>
            <p className="number"></p>
          </div>
        </div>
      </div>

      <div className="background"></div>
    </div>
  );
};

export default ProductPreview;
