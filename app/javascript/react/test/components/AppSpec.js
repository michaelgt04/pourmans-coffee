import LandingSection from 'consumer/components/LandingSection';
import EventsContainer from 'consumer/containers/EventsContainer';
import App from 'consumer/components/App';

describe('App', () => {

  beforeEach(() => {
    wrapper = shallow(
      <App />
    )
  })

  it('renders the landing section component', () => {
    expect(wrapper.find(LandingSection)).toBePresent()
  })

  it('renders EventsContainer component', () => {
    expect(wrapper.find(EventsContainer)).toBePresent()
  })
})
