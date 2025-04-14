import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import App from "~/app.vue";

describe("App", () => {
  it("mounts successfully", async () => {
    // Try with shallow mount or with stubs for child components
    const wrapper = mount(App, {
      global: {
        stubs: {
          // Stub any problematic child components
          NuxtLayout: true,
          NuxtPage: true,
        },
      },
    });
    expect(wrapper.vm).toBeDefined();
  });
});
