type CupcakeProps = {
  data: {
    id: number;
    name: string;
    accessory: string;
    color1: string;
    color2: string;
    color3: string;
  };
};

const Cupcake = ({ data }: CupcakeProps) => {
  return (
    <div className="cupcake">
      <h2>{data.name}</h2>
      <p>Accessory: {data.accessory}</p>
    </div>
  );
};

export default Cupcake;
