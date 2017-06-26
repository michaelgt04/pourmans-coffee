import PhotoTile from 'components/PhotoTile';

describe('InstaFeedContainer', () => {

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

    let json = window.__fixtures__['photos']

    spyOn($, 'ajax').and.callFake(params => {
      params.success(json)
    })
  })

  it('renders PhotoTile components', done => {
    setTimeout(() => {
      // setTimeout(() => {
        expect(wrapper.find(PhotoTile)).toBePresent();
        done();

      // }, 0)
      // expect(true).toEqual(true)
      // console.log(wrapper.debug())
    }, 0);
  });
});
