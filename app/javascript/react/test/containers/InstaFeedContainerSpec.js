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
    let json = window.__fixtures__['photos']
    //
    // jasmine.Ajax.install();
    //
    // let request = jasmine.Ajax.request.mostRecent();
    //
    // console.log(json)
    // console.log(request)
    // request.respondWith(json)

    spyOn($, 'ajax').and.callFake(params => {
      params.success(json)
    })

    wrapper = mountReactAppAt('/', function(rootDiv) {
      rootDiv.setAttribute("data-instagram", "12345")
    })


  })

  afterEach(() => {
    jasmine.Ajax.uninstall()
  })

  it('renders PhotoTile components', done => {



    // setTimeout(() => {
    //     expect(wrapper.find(PhotoTile)).toBePresent();
    //     done();
    // }, 0);
  });
});
