describe('test/admin/features/AdminAddsNewProductSpec', () => {
  beforeEach(() => {
    stubGlobalFetch({
      '/api/v1/products':  { GET: 'products' },
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
})
