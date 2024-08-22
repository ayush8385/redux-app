import { render, screen } from "@testing-library/react"
import Dashboard from "../Dashboard"
import RootNaviagtor from "../RootNavigator"

test("Dashboard Loaded", () => {
    render(<RootNaviagtor><Dashboard/></RootNaviagtor>);
    const homebutton = screen.getByText('Home');
    expect(homebutton).toBeInTheDocument();
})

test("Dashboard Button Loaded", () => {
    render(<RootNaviagtor><Dashboard/></RootNaviagtor>);
    const allButtons = screen.getAllByRole('button');
    expect(allButtons.length).toBe(3);
})