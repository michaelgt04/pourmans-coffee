import AboutTile from 'components/AboutTile';

describe('AboutUsContainer', () => {

  beforeEach(() => {
    spyOn(global, 'fetch').and.callFake(url => {
      return(createResponseFromFixture('about'))
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
