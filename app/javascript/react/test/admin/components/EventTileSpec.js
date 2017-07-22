import EventTile from 'admin/components/EventTile';

describe('EventTile', () => {

  beforeEach(() => {
  
    wrapper = shallow(
      <EventTile
        key={1}
        id={1}
        day={'Tuesday'}
        startTime={'9:30am'}
        endTime={'11:00pm'}
        location={'Dewey Square'}
        note={'Every other week'}
      />
    )
  })

  it('renders the appropriate information about the event', () => {
    expect(wrapper.text()).toMatch('9:30am');
    expect(wrapper.text()).toMatch('11:00pm');
    expect(wrapper.text()).toMatch('Dewey Square');
    expect(wrapper.text()).toMatch('Every other week');
  })
})
