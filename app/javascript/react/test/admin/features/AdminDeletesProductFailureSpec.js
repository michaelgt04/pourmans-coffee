describe('test/admin/features/AdminDeletsProductSpec', () => {
  beforeEach(() => {
    stubGlobalFetch({
      '/api/v1/products':  { GET: 'products' },
      '/api/v1/products/4.json':  { DELETE: ['deleteProductResponse', 500] }
    });

    spyOn(window, 'confirm').and.returnValue(true)

    wrapper = mountReactAppAt('/admin/products')
  })

  describe('when an admin deletes a product successfully', () => {
    it('does not delete the product and displays an error message', done => {
      setTimeout(() => {
        let deleteButton = wrapper.find('.delete-button').first()

         expect(wrapper.text()).toMatch("Coconut Cold Brew")
         simulateIfPresent(deleteButton, 'click');

         setTimeout(() => {
           expect(wrapper.text()).toMatch("Coconut Cold Brew")
           expect(wrapper.text()).toMatch("There was a problem deleting this product")
           done();
         },0)
      }, 0)
    })
  })
})
