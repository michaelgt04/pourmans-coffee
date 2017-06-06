import EventTile from 'components/EventTile';

describe('EventsContainer', () => {

  beforeEach(() => {
    spyOn(global, 'fetch').and.callFake(url => {
      return(createResponseFromFixture('events'))
    })

    wrapper = mountReactAppAt('/')

  })

  it('renders EventTile components', done => {
    setTimeout(() => {
      expect(wrapper.find(EventTile)).toBePresent();
      done();
    }, 0);
  });
});
