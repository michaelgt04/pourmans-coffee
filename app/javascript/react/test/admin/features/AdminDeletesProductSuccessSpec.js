describe('test/admin/features/AdminDeletsProductSpec', () => {
  beforeEach(() => {
    stubGlobalFetch({
      '/api/v1/products':  { GET: 'products' },
      '/api/v1/products/4.json':  { DELETE: 'deleteProductResponse' }
    });

    spyOn(window, 'confirm').and.returnValue(true)

    wrapper = mountReactAppAt('/admin/products')
  })

  describe('when an admin deletes a product successfully', () => {
    it('removes the product from the page', done => {
      setTimeout(() => {
        let deleteButton = wrapper.find('.delete-button').first()

         expect(wrapper.text()).toMatch("Coconut Cold Brew")
         simulateIfPresent(deleteButton, 'click');

         setTimeout(() => {
           expect(wrapper.text()).not.toMatch("Coconut Cold Brew")
           done();
         },0)
      }, 0)
    })
  })
})
