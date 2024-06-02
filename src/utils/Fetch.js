export const getUserById = async (slug) => {
  const response = await fetch(`http://localhost:3000/api/customer/${slug}`, {
    next: { revalidate: 3600 },
  });
  if (!response.ok) throw new Error("Something went wrong.");
  const data = await response.json();
  return data;
};
