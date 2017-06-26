import AboutTile from 'components/AboutTile';

describe('AboutUsContainer', () => {

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

  it('renders AboutTile components', done => {
    setTimeout(() => {
      expect(wrapper.find(AboutTile)).toBePresent();
      done();
    }, 0);
  });
});
