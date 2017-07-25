describe('test/admin/features/AdminDeletsProductSpec', () => {
  beforeEach(() => {
    stubGlobalFetch({
      '/api/v1/products':  { GET: 'products' },
      '/api/v1/products.json':  { DELETE: 'deleteProductResponse' }
    });

    spyOn(window, 'confirm').and.returnValue(true)

    wrapper = mountReactAppAt('/admin/products')
  })

  describe('when an admin deletes a product successfully', () => {
    it('removes the product from the page', done => {
      setTimeout(() => {
         expect(wrapper.text()).toMatch("Coconut Cold Brew")

         console.log(wrapper.text())

         let deleteButton = wrapper.find('.delete-button').first()

         simulateIfPresent(deleteButton, 'click');

         setTimeout(() => {
           console.log(wrapper.text())
           expect(wrapper.text()).not.toMatch("Coconut Cold Brew")
           done();
         },0)
      }, 0)
    })
  })
})
