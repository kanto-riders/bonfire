import { shallow } from 'vue-test-utils'
import { createRenderer } from 'vue-server-renderer'

import Card from '../../components/Card.vue'

describe('Card', () => {
  test('render', done => {
    const renderer = createRenderer()
    const wrapper = shallow(Card, {})
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw err
      expect(str).toMatchSnapshot()
      done()
    })
  })
})
