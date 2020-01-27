import { renderHook } from "@testing-library/react-hooks";
import { useApi } from "../core/useApi";

jest.mock("../core/requests.ts", () => ({
  load: () =>
    Promise.resolve([
      { id: 1, region: "one" },
      { id: 2, region: "" }
    ])
}));

test("useApi", async () => {
  const wrapper = renderHook(() => useApi());
  expect(wrapper.result.current.isLoading).toBe(true);
  expect(wrapper.result.current.hasError).toBe(false);
  expect(wrapper.result.current.countries).toBe(null);

  await wrapper.waitForNextUpdate();

  expect(wrapper.result.current.isLoading).toBe(false);
  expect(wrapper.result.current.hasError).toBe(false);
  expect(wrapper.result.current.countries).toEqual([
    { id: 1, region: "one" },
    { id: 2, region: "Other" }
  ]);
});
