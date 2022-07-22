import styled from '@emotion/styled'

import Space from './lib/space'
import FormItem from './lib/form_item'
import Input from './lib/input'
import Icon from './lib/icon'

const Container = styled.div`
  width: 535px;
  padding: 20px 30px;
  font-size: var(--font-size);
  font-family: var(--font-family);
  color: var(--text);
  background: var(--primary);
`

export default function App() {
  return (
    <Container>
      <Space.Y size={8}>
        <FormItem title="Your full given name:">
          <Input value="John Doe" />
        </FormItem>

        <Space.X size={4}>
          <FormItem title="Date of Brith" width={195}>
            <Input prefix={<Icon type="date" />} value="January 7, 1984" />
          </FormItem>

          <FormItem title="Country of residence or citizenship:">
            <Input value="Canada" />
          </FormItem>
        </Space.X>

        <FormItem title="What school do you plan to attend?">
          <Input value="University of British Columbia" />
        </FormItem>

        <FormItem title="Please take a moment to describe your intended area of study:">
          <Input.Text placeholder="Enter details here" rows={6} />
        </FormItem>
      </Space.Y>
    </Container>
  )
}
