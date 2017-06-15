import AboutTile from 'components/AboutTile';

describe('AboutTile', () => {

  beforeEach(() => {
    let about = [{
      id: 1,
      blurb: "dope!"
    }]

    wrapper = shallow(
      <AboutTile
        about={about[0]}
      />
    )
  })

  it('an h2 with the About Us section header', () => {
    expect(wrapper.find('h2')).toBePresent();
    expect(wrapper.text()).toMatch('About Us');
  })

  it('renders a p tag with the about us blurb', () => {
    expect(wrapper.find('p')).toBePresent();
    console.log(wrapper.text())
    expect(wrapper.text()).toMatch('dope!')
  })
})
