import AutocompleteComponent from './index'

export default {
  title: 'garana/ServiceComponents/AutocompleteComponent',
  component: AutocompleteComponent,
}

const Template = (args) => <AutocompleteComponent {...args} />

export const AutocompleteComponentSB = Template.bind({})

AutocompleteComponentSB.args = {
  optionsArray: [],
  optionHeading: 'Recent Searches',
}
