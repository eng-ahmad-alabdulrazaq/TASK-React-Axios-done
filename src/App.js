import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
//my imports
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//my imports
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="font-mono">
        <Navbar />
        <Outlet />
      </div>
    </QueryClientProvider>
  );
}

export default App;
