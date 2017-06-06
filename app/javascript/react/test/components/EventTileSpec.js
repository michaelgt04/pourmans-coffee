import EventTile from 'components/EventTile';

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
    let wrapperText = wrapper.text()
    expect(wrapperText).toMatch('Tuesday');
    expect(wrapperText).toMatch('12:00');
    expect(wrapperText).toMatch('3:00');
    expect(wrapperText).toMatch('Dewey Square');
  })
})
