import App from "../../../App";
import { render } from "@testing-library/react";

test('Lec12 : snapshot for App component', () => {
    const container = render(<App />)
    expect(container).toMatchSnapshot()
})