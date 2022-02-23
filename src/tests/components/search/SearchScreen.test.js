import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { SearchScreen } from "../../../components/search/SearchScreen";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { act } from "react-dom/test-utils";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  ui: {
    loading: false,
  },
  plato: {
    platoList: [],
  },
};

const store = mockStore(initState);
store.dispatch = jest.fn();

describe("Pruebas en <SearchScreen />", () => {
  test("Validación debe aparecer mensaje: Ingresa un nombre", async () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/search"]}>
          <SearchScreen />
        </MemoryRouter>
      </Provider>
    );

    await act(async () => {
      wrapper.find("form").prop("onSubmit")({
        preventDefault() {},
      });
    });

    expect(wrapper.html().includes("Enter a name")).toBe(true);
  });

  test("Validación debe aparecer mensaje de error", async () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/search"]}>
          <SearchScreen />
        </MemoryRouter>
      </Provider>
    );

    wrapper.find("input").simulate("change", {
      target: {
        name: "search",
        value: "a",
      },
    });

    await act(async () => {
      wrapper.find("form").prop("onSubmit")({
        preventDefault() {},
      });
    });

    expect(wrapper.html().includes("Enter more than 2 characters")).toBe(true);
  });
});
