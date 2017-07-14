import ProductTile from 'components/ProductTile';

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

    wrapper = mountReactAppAt('/', function(rootDiv) {
      rootDiv.setAttribute('data-instagram', "12345")
    })
  })

  it('renders ProductTile components', done => {
    setTimeout(() => {
      expect(wrapper.find(ProductTile)).toBePresent();
      done();
    }, 0);
  });
});
