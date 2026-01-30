import { render } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";

export function renderWithRouter(ui, route = "/") {
  return render(
    <MemoryRouter initialEntries={[route]}>
      {" "}
      <Routes>
        <Route element={ui}>
          <Route index element={<div>Outlet</div>} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
}
