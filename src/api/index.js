// my imports
import axios from "axios";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// my imports
const baseURL = "https://coded-pets-api-crud.eapi.joincoded.com/";
const instance = axios.create({
  baseURL: baseURL,
});

export default instance;

// const queryClient = new QueryClient();

// function App() {
//   return (
//     // Provide the client to your App
//     <QueryClientProvider client={queryClient}>
//       // Your Content
//     </QueryClientProvider>
//   );
// }
