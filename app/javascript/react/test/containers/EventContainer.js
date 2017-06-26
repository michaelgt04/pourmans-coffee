import DayTile from 'components/DayTile';

describe('EventsContainer', () => {

  beforeEach(() => {
    spyOn(global, 'fetch').and.callFake(url => {
      if(url.endsWith('/api/v1/events')){
        return(createResponseFromFixture('events'))
      } else if(url.endsWith('/api/v1/about')) {
        return(createResponseFromFixture('about'))
      }
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
