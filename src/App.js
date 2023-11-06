import { BrowserRouter } from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout";
import MainRoutes from "./pages/MainRoutes";
import "../src/style/main.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <MainLayout>
          <MainRoutes />
        </MainLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
