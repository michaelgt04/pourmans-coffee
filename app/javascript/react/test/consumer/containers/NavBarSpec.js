import AnchorLink from 'consumer/components/AnchorLink';

describe('NavBar', () => {

  beforeEach(() => {
    spyOn(global, 'fetch').and.callFake(url => {
      if(url.endsWith('/api/v1/about')){
        return(createResponseFromFixture('about'))
      } else if (url.endsWith('/api/v1/events')){
        return(createResponseFromFixture('events'))
      } else if (url.endsWith('/api/v1/admin/products')) {
        return(createResponseFromFixture('products'))
      }
    })

		let fixture = window.__fixtures__['photos']

		spyOn($, 'ajax').and.callFake(object => {
      object.success(fixture)
    })

    wrapper = mountReactAppAt('/#products', function(rootDiv) {
      rootDiv.setAttribute("data-instagram", "12345")
    })
  })

  it('Does not render the nav Bar at the top of the page', () => {
      expect(wrapper.find(AnchorLink)).not.toBePresent();
  });

	xit('Renders the NavBar when it scrolls past the landing section', done => {
		setTimeout(() => {
			expect(wrapper.find(AnchorLink)).toBePresent();
			done();
		}, 0);
	});
});
