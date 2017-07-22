import DayTile from 'admin/components/DayTile';
import EventTile from 'admin/components/EventTile';

describe('DayTile', () => {

  beforeEach(() => {

    let events = [
      {
        "id": 1,
        "day": "Tuesday",
        "start_time": "11:30am",
        "end_time": "6:30pm",
        "location": "Dewey Square",
        "note": "Every other week"
      }
    ]

    wrapper = shallow(
      <DayTile
        key={events.day}
        day={'Tuesday'}
        events={events}
      />
    )
  })

  it('renders the group name', () => {
    expect(wrapper.text()).toMatch('Tuesday');
  })

  it('renders ProductTile components', () => {
    expect(wrapper.find(EventTile)).toBePresent();
  })
})
