import { render, screen } from "@testing-library/react"
import PromotedLabel from "../PromotedLabel"
import Notes from "../Notes"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"

test("Testing HOC Promoted label componenr", () => {
    render(<Provider store={appStore}><PromotedLabel component={<Notes/>}/></Provider>)
    const heading = screen.getByText("Promoted");
    expect(heading).toBeInTheDocument();
})