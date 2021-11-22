import { mount } from '@vue/test-utils'
import Greeting from 'components/Greeting.vue'

test('renders the correct message', () => {
  const wrapper = mount(Greeting, { props: { name: 'Bob Ross' } })

  expect(wrapper.text()).toBe('Hello, Bob Ross')
})