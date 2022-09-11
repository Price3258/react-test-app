import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("the counter starts at 0", () => {
    render(<App />);
    const counterElement = screen.getByTestId("counter");
    expect(counterElement).toHaveTextContent(0);
});

test("minus button has correct text", () => {
  render(<App />);
  const minusButtonElement = screen.getByTestId("minus-button");
  expect(minusButtonElement).toHaveTextContent("-")
});

test("plus button has correct text", () => {
  render(<App />);
  const plusButtonElement = screen.getByTestId("plus-button");
  expect(plusButtonElement).toHaveTextContent("+")
});

test("When the plus button is pressed, the counter is changes to 1", () => {
  render(<App />);
  const plusButtonElement = screen.getByTestId("plus-button");
  fireEvent.click(plusButtonElement);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(1)
});

test("When the minus button is pressed, the counter is changes to -1", () => {
  render(<App />);
  const plusButtonElement = screen.getByTestId("minus-button");
  fireEvent.click(plusButtonElement);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(-1)
});

test("on/off button has blue color", ()=> {
  render(<App/>);
  const buttonElement = screen.getByTestId("on/off-button");
  expect(buttonElement).toHaveStyle({backgroundColor:'blue'});
})

test("prevent the minus,plus button from being pressed when the on/off button is clicked",()=>{
  render(<App/>);
  const onfOffButtonElement = screen.getByTestId("on/off-button");
  fireEvent.click(onfOffButtonElement);
  const plusButtonElement = screen.getByTestId('plus-button');
  expect(plusButtonElement).toBeDisabled();
})