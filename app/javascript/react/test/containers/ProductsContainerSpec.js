import ProductTile from 'components/ProductTile';
import ProductDisplay from 'components/ProductDisplay';

describe('ProductsContainer', () => {

  beforeEach(() => {
    spyOn(global, 'fetch').and.callFake(url => {
      if(url.endsWith('/api/v1/about')){
        return(createResponseFromFixture('about'))
      } else if (url.endsWith('/api/v1/events')){
        return(createResponseFromFixture('events'))
      } else if (url.endsWith('/api/v1/products')) {
        return(createResponseFromFixture('products'))
      }
    })

		let fixture = window.__fixtures__['photos']

		spyOn($, 'ajax').and.callFake(object => {
      object.success(fixture)
    })

    wrapper = mountReactAppAt('/', function(rootDiv) {
      rootDiv.setAttribute('data-instagram', "12345")
    })
  })

  it('renders ProductTile components', done => {
    setTimeout(() => {
      expect(wrapper.find(ProductDisplay).find(ProductTile)).toBePresent();
      done();
    }, 0);
  });
});
