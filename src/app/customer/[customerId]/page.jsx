import CustomerDetailsPage from "@/templates/CustomerDetailsPage";
import { getUserById } from "@/utils/Fetch";

const CustomerDetails = async ({ params }) => {
  const { customerId } = params;
  const customer = await getUserById(customerId);
  return <CustomerDetailsPage data={customer} />;
};

export default CustomerDetails;
