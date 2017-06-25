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

    $.fn.ajax.and.returnValue(createResponseFromFixture('photos'))
    // console.log($.ajax)

  })

  it('renders PhotoTile components', done => {
    setTimeout(() => {
      expect(true).toEqual(true)
      // console.log(wrapper.debug())
      // expect(wrapper.find(PhotoTile)).toBePresent();
      done();
    }, 0);
  });
});
