import LandingSection from 'consumer/components/LandingSection';

describe('LandingSection', () => {

  beforeEach(() => {
    wrapper = shallow(
      <LandingSection />
    )
  })

  it('renders an image tag with the Pourmans Logo', () => {
    expect(wrapper.find('img')).toBePresent();
    expect(wrapper.find('img')).toHaveProp('src', 'https://res.cloudinary.com/duor0bzmo/image/upload/v1496790582/Pourman_s_Logo_yzyag0.png')
  })

  it('renders a font awesome down arrow for navigation', () => {
    expect(wrapper.find('i')).toBePresent();
  })
})
