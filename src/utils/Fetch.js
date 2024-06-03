export const getUserById = async (id) => {
  const response = await fetch(`http://localhost:3000/api/customer/${id}`, {
    next: { revalidate: false },
  });
  if (!response.ok) throw new Error("Something went wrong.");
  const data = await response.json();
  return data;
};
