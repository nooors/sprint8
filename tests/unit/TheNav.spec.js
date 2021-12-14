import { shallowMount, mount } from "@vue/test-utils";
import TheNav from "@/components/TheNav.vue";

describe("TheNav.vue", () => {
  it("Renders the component", () => {
    const wrapper = shallowMount(TheNav, {
      stubs: ["router-link", "router-view"],
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});

test("Render apropiate text", () => {
  const wrapper = mount(TheNav, {
    stubs: ["router-view", "router-link"],
  });
  expect(wrapper.text()).toBe("HOMESTARSHIPS");
});
