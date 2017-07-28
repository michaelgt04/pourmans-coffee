import EventTile from 'consumer/components/EventTile';
import DayTile from 'consumer/components/DayTile';

describe('DayTile', () => {

  beforeEach(() => {
    let event = [{
      id: 1,
      day: "Tuesday",
      start_time: "12:00",
      end_time: "3:00",
      location: "Dewey Square"
    }]

    wrapper = shallow(
      <DayTile
        events={event}
        day="Tuesday"
      />
    )
  })

  it('renders the name of the day', () => {
    expect(wrapper.text()).toMatch('Tuesday');
  })

  it('renders EventTile components', () => {
    expect(wrapper.find(EventTile)).toBePresent();
  })
})
