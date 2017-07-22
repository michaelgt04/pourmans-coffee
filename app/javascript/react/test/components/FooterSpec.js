import Footer from 'components/Footer';

describe('Footer', () => {

  beforeEach(() => {
    wrapper = shallow(
      <Footer />
    )
  })

  it('renders the facebook icon', () => {
    expect(wrapper.find('.fa-facebook-square')).toBePresent();
  })

  it('renders the instagram icon', () => {
    expect(wrapper.find('.fa-instagram')).toBePresent();
  })

  it('displays the contact email', () => {
    expect(wrapper.text()).toMatch("pourmanscoffee@gmail.com")
  })

  it('displays the contact phone number', () => {
    expect(wrapper.text()).toMatch("439-7245")
  })
})
