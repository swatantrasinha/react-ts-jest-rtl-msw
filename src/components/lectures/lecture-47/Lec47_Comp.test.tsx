import { HttpResponse, http } from "msw";
import Lec46_Comp from "../lecture-46/Lec46_Comp"

import { server } from "../../../test/mocks/server";
// import { render, screen, userEvent } from "../../utils/test-utils";
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// Establish API mocking before all tests.
beforeAll(() => server.listen())

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())

// Clean up after the tests are finished.
afterAll(() => server.close())

describe("App", () => {
  it("checking whether vite and react text is available", () => {
    render(<Lec46_Comp />);
    const text = screen.getByText("Vite + React");
    expect(text).toBeInTheDocument();
  });
  it("should increment count on click", async () => {
    render(<Lec46_Comp />);
    userEvent.click(screen.getByRole("button"));
    expect(await screen.findByText(/count is 1/i)).toBeInTheDocument();
  });

  it("api success secnario on load", async () => {
    render(<Lec46_Comp />);
    expect(await screen.findByText("Todo List : 3")).toBeInTheDocument();
  });

    test('test for mock API', async() => {
   render(<Lec46_Comp />)
   const ele = await screen.findAllByRole('listitem')
   expect(ele).toHaveLength(3)
 })

  it("api error scenario on load", () => {
    render(<Lec46_Comp />);
    server.use(
      http.get("https://dummyjson.com/todos", () => {
        return new HttpResponse(null, { status: 401 });
      })
    );
    expect(screen.queryByText("Todo List")).not.toBeInTheDocument();
  });
});
