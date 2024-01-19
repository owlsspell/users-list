import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserDetail from "./UserDetail";

test("check loading", async () => {
  render(<UserDetail />);
  const Loading = screen.queryByText(<div>Loading...</div>);
  screen.debug()
  expect(Loading).toBeNull();
});
