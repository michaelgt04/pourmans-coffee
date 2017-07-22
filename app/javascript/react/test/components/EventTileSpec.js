import EventTile from 'consumer/components/EventTile';

describe('EventTile', () => {

  beforeEach(() => {
    let event = {
      id: 1,
      day: "Tuesday",
      start_time: "12:00",
      end_time: "3:00",
      location: "Dewey Square"
    }

    wrapper = shallow(
      <EventTile
        event={event}
      />
    )
  })

  it('renders the expected information', () => {
    expect(wrapper.text()).toMatch('12:00');
    expect(wrapper.text()).toMatch('3:00');
    expect(wrapper.text()).toMatch('Dewey Square');
  })
})
