import DayTile from 'components/DayTile';

describe('EventsContainer', () => {

  beforeEach(() => {
    spyOn(global, 'fetch').and.callFake(url => {
      if(url.endsWith('/api/v1/about')){
        return(createResponseFromFixture('about'))
      } else if (url.endsWith('/api/v1/events')){
        return(createResponseFromFixture('events'))
      }
    })

    wrapper = mountReactAppAt('/', function(rootDiv) {
      rootDiv.setAttribute("data-instagram", "12345")
    })

  })

  it('renders DayTile components', done => {
    setTimeout(() => {
      expect(wrapper.find(DayTile)).toBePresent();
      done();
    }, 0);
  });
});
