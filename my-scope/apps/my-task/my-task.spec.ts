import { render } from "@testing-library/vue";
import MyTask from "./my-task.vue";

it("should render with the correct text", () => {
  const { getByText } = render(MyTask);
  const rendered = getByText(/App/);
  expect(rendered).toBeTruthy();
});
