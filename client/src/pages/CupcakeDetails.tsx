import { useLoaderData } from "react-router-dom";

interface DetailsI {
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
  name: string;
}

function CupcakeDetails() {
  const dataCup = useLoaderData() as DetailsI;

  return (
    <>
      <div className="cupcake-container">
        <div className="cupcake">
          <div className={`accessory ${dataCup.accessory}`} />
          <div className="cream">
            <div
              className="cream-1"
              style={{
                backgroundColor: dataCup.color1,
              }}
            />
            <div
              className="cream-2"
              style={{
                backgroundColor: dataCup.color2,
              }}
            />
            <div
              className="cream-3"
              style={{
                backgroundColor: dataCup.color3,
              }}
            />
          </div>
          <div className="bottom">
            <div className="bottom-in">
              <div className="face">
                <div className="eyes">
                  <div className="left-eye" />
                  <div className="right-eye" />
                </div>
                <div className="mouth" />
              </div>
            </div>
          </div>
        </div>

        <div className="cupcake-name">{dataCup.name}</div>
      </div>
    </>
  );
}

export default CupcakeDetails;
