import DayTile from 'components/DayTile';

describe('EventsContainer', () => {

  beforeEach(() => {
    spyOn(global, 'fetch').and.callFake(url => {
      return(createResponseFromFixture('events'))
    })

    wrapper = mountReactAppAt('/')

  })

  it('renders DayTile components', done => {
    setTimeout(() => {
      expect(wrapper.find(DayTile)).toBePresent();
      done();
    }, 0);
  });
});
