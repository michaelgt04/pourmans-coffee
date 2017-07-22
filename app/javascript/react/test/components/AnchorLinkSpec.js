import AnchorLink from 'components/AnchorLink';

describe('AnchorLink', () => {
  let onClick;
  beforeEach(() => {
    onClick = jasmine.createSpy('onclick spy')

    wrapper = shallow(
      <AnchorLink
        anchor={"#dopecoffee"}
        text="coffee tho"
        handleClick={onClick}
      />
    )
  })

  it('a link to the specificied anchor', () => {
    expect(wrapper.find('a')).toBePresent();
    expect(wrapper.find('a')).toHaveProp('href', '#dopecoffee');
  })

  it('renders the text of the link name', () => {
    expect(wrapper.text()).toMatch('coffee tho')
  })
})
