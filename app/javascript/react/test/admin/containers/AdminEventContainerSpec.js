import DayTile from 'admin/components/DayTile';

describe('AdminEventsContainer', () => {

  beforeEach(() => {
    spyOn(global, 'fetch').and.callFake(url => {
      return(createResponseFromFixture('events'))
    })

    wrapper = mountReactAppAt('/admin/events')
  })

  it('renders DayTile components for each day of the week', () => {
    expect(wrapper.find(DayTile)).toBePresent();
    expect(wrapper.find(DayTile).length).toEqual(7)
  })
});
