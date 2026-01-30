import { describe, it, expect,vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductCard from "../components/ProductCard/ProductCard";
import { CartContext } from "../utils/CartContext";
function renderWithCart(ui, { cart = [], setCart = vi.fn() } = {}) {
  return render(
    <CartContext.Provider value={[cart, setCart]}>
      {ui}
    </CartContext.Provider>
  );
}
const item = {
    category: "men's clothing",
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    id: 1,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    price: 109.95,
    rating: { rate: 3.9, count: 120 },
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
};
  
describe("Product Card", () => {
  it("Display quantity container elements", () => {
    renderWithCart(<ProductCard item={item} />);
    expect(screen.getByText("-")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByText("+")).toBeInTheDocument()
  });

  it("increment the input value", async()=>{
    const user = userEvent.setup()

    renderWithCart(<ProductCard item={item} />)
    const plusButton = screen.getByText("+")
    const textInput = screen.getByRole("textbox")

    expect(textInput.value).toBe("0")
    await user.click(plusButton)
    expect(textInput.value).toBe("1")
    await user.click(plusButton)
    expect(textInput.value).toBe("2")

  })
  it("derement the input value", async()=>{
    const user = userEvent.setup()

    renderWithCart(<ProductCard item={item} />)
    const plusButton = screen.getByText("+")
    const minusButton = screen.getByText("-")
    const textInput = screen.getByRole("textbox")

    expect(textInput.value).toBe("0")
    await user.click(plusButton)
    expect(textInput.value).toBe("1")
    await user.click(minusButton)
    await user.click(minusButton)
    expect(textInput.value).toBe("0")

  })
});
