import App from "./App";
import renderWithRedux from "./utils/renderWithRedux";

//jest.mock("react-dom", () => ({ render: jest.fn() }));

// test("it should renders", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<App />, div);
//   global.document.id = (id) => id === "root" && div;
//   expect(ReactDOM.render).toHaveBeenCalled();
// });

test("it should render the App component with Redux", () => {
  const div = document.createElement("div");
  renderWithRedux(<App />, div);
  global.document.id = (id) => id === "root" && div;
});
