import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AgGrid from "./components/ag-grid";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div
        style={{
          display: "flex",
          padding: "16px",
          width: "80vw",
          height: "80vh",
        }}
      >
        <AgGrid />
      </div>
    </QueryClientProvider>
  );
}

export default App;
