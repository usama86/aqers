import ButtonComponent from './index'
export default {
  title: 'garana/BaseComponents/Button',
  component: ButtonComponent,
  argTypes: {},
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ButtonComponent {...args} />

// export const Base = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const TransButton = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TransButton.args = {
  typeB: true,
  children: <>Trans Button</>,
  variant: 'contained',
  path: null,
  onClick: () => {},
}

export const CustomButton = Template.bind({})
CustomButton.args = {
  typeB: false,
  children: <>Custom Button</>,
  variant: 'contained',
  path: null,
  onClick: () => {},
}
