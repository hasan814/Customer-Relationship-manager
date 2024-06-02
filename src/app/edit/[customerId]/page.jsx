import CustomerEditPage from "@/templates/CustomerEditPage";
import { getUserById } from "@/utils/Fetch";

export const generateMetadata = async ({ params }) => {
  const { customerId } = params;
  const customer = await getUserById(customerId);
  return { title: customer.lastName, description: customer.products };
};

const Details = async ({ params }) => {
  const { customerId } = params;
  const customer = await getUserById(customerId);

  return <CustomerEditPage data={customer} id={customerId} />;
};

export default Details;
