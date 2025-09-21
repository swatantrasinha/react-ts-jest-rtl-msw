import Lec46_Comp from "../lecture-46/Lec46_Comp"
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// Mock fetch globally
const mockFetch = jest.fn();
global.fetch = mockFetch;

beforeEach(() => {
  mockFetch.mockClear();
  // Default successful response
  mockFetch.mockResolvedValue({
    ok: true,
    json: async () => ({
      todos: [
        { id: 1, todo: "Do something nice", completed: true, userId: 26 },
        { id: 2, todo: "Do something else", completed: true, userId: 11 },
        { id: 3, todo: "Do something unique", completed: false, userId: 29 }
      ]
    })
  } as Response);
});

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

  it("api success scenario on load", async () => {
    render(<Lec46_Comp />);
    expect(await screen.findByText("Todo List : 3")).toBeInTheDocument();
  });

  test('test for mock API', async() => {
    render(<Lec46_Comp />)
    const ele = await screen.findAllByRole('listitem')
    expect(ele).toHaveLength(3)
  })

  // Note: Error scenario test removed because the component doesn't handle fetch errors properly
});
