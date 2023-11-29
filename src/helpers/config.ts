export const getBaseUrl = (): string => {
  console.log(process.env.SERVER_URL);
  return (
    process.env.SERVER_URL ||
    "https://backend-ordain.vercel.app/api/v1"
    // "http://localhost:5000/api/v1"
  );
};
