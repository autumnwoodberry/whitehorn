import HelloWorld from '@/components/HelloWorld'
import { mount } from 'vue-test-utils'

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const wrapper = mount(HelloWorld)

    expect(wrapper.find('.hello h1').text()).to.equal('Welcome to Your Vue.js App')
  })
})
