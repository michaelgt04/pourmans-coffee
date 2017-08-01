describe('test/admin/features/AdminAddsNewProductSpec', () => {
  beforeEach(() => {
    stubGlobalFetch({
      '/api/v1/admin/products':  { GET: 'products' },
      '/api/v1/products.json':  { POST: 'postProductResponse' }
    });

    wrapper = mountReactAppAt('/admin/products')
  })

  describe('when an admin adds a new product successfully', () => {
    it('submits the product and displays it on the page', done => {
      setTimeout(() => {
         fillIn('title', { with: 'a giant cookie' }, wrapper)
         fillIn('description', { with: 'really giant' }, wrapper)
         select('food', { from: 'group' }, wrapper)

         let submitButton = wrapper.find('.product-submit-button');

         simulateIfPresent(submitButton, 'submit');

          setTimeout(() => {
            expect(wrapper.text()).toMatch("a giant cookie")
            expect(wrapper.text()).toMatch("really giant")
            done ();
          }, 0)
      }, 0)
    })
  })

  describe('when an admin adds a new product unsuccessfully', () => {
    it('renders errors and does not submit the product', done => {
      setTimeout(() => {
        fillIn('title', { with: 'a giant cookie' }, wrapper)
        select('food', { from: 'group' }, wrapper)

        let submitButton = wrapper.find('.product-submit-button');

        simulateIfPresent(submitButton, 'submit');

        expect(wrapper.text()).toMatch("Please enter a description")
        expect(wrapper.text()).not.toMatch("a giant cookie")

        done();
      }, 0)
    })
  })
})
