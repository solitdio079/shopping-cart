import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./routes/layout";
import App from "./App";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<App/>} />
      </Route>
    </Routes>
  );
}
