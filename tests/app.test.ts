import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import App from '../app.vue'

describe('App', () => {
  it('mounts successfully', () => {
    const wrapper = mount(App)
    expect(wrapper.vm).toBeDefined()
  })
})
