import Card from "@/modules/Card";
import { v4 as uuidv4 } from "uuid";

const HomePage = ({ customers }) => {
  return (
    <div>
      {customers.map((customer) => (
        <Card key={uuidv4()} customer={customer} />
      ))}
    </div>
  );
};

export default HomePage;
