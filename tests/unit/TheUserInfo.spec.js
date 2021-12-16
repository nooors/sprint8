import { mount } from "@vue/test-utils";
import TheUserInfo from "@/components/TheUserInfo.vue";
import TheButton from "@/components/TheButton.vue";

describe("TheUserInfo component", () => {
  test("Renders the comoponent", () => {
    const wrapper = mount(TheUserInfo);
    expect(wrapper.html()).toMatchSnapshot();
  });
  test("Render correct data", () => {
    const wrapper = mount(TheUserInfo, {
      propsData: {
        name: "Jhon",
        surname: "Doe",
        displayName: "DoePlayer",
        email: "doejhon@email.com",
      },
    });
    expect(wrapper.props().name).toBe("Jhon");
    expect(wrapper.props().surname).toBe("Doe");
    expect(wrapper.props().displayName).toBe("DoePlayer");
    expect(wrapper.props().email).toBe("doejhon@email.com");
  });
});
