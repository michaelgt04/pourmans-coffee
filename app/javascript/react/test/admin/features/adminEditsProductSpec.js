describe('test/admin/features/AdminEditsProductSpec', () => {
  beforeEach(() => {
    stubGlobalFetch({
      '/api/v1/admin/products':  { GET: 'products' },
      '/api/v1/products/4.json':  { PATCH: 'patchProduct' },
      '/api/v1/products/4':  { GET: 'productShow' },
    });

    wrapper = mountReactAppAt('/admin/products')
  })

  describe('an admin clicks the edit button', () => {
    it('populates the form with the item information', done => {
      setTimeout(() => {
        let editButton = wrapper.find('.edit-button').first()
         simulateIfPresent(editButton, 'click');

          setTimeout(() => {
            let titleField = wrapper.findWhere(n => {
              return n.type() === 'input' && n.props().name === 'title';
            });

            expect(titleField.props().value).toMatch('Coconut Cold Brew')
            done();
          }, 0)
      }, 0)
    })

    it('renders the cancel button', done => {
      setTimeout(() => {
        let editButton = wrapper.find('.edit-button').first()
         simulateIfPresent(editButton, 'click');

          setTimeout(() => {
            expect(wrapper.find('.cancel-edit-button')).toBePresent()
            done();
          }, 0)
      }, 0)
    })
  })

  describe('an admin successfully edits a product', () => {
    it('updates the page and clears the form', done => {

      setTimeout(() => {
        let editButton = wrapper.find('.edit-button').first()
         simulateIfPresent(editButton, 'click');

          setTimeout(() => {
            let submitButton = wrapper.find('.product-submit-button');

            fillIn('description', { with: 'I am an updated description' }, wrapper)
            simulateIfPresent(submitButton, 'submit');

            setTimeout(() => {

              expect(wrapper.text()).toMatch('I am an updated description')
              done();
            }, 0)
          }, 0)
      }, 0)
    })
  })

  describe('an admin unsuccessfully edits a product', () => {
    it('does not update the page and renders an error', done => {

      setTimeout(() => {
        let editButton = wrapper.find('.edit-button').first()
         simulateIfPresent(editButton, 'click');

          setTimeout(() => {
            let submitButton = wrapper.find('.product-submit-button');

            fillIn('description', { with: '' }, wrapper)
            simulateIfPresent(submitButton, 'submit');

            setTimeout(() => {
              expect(wrapper.text()).not.toMatch('I am an updated description')
              expect(wrapper.text()).toMatch('Please enter a description!')
              done();
            }, 0)
          }, 0)
      }, 0)
    })
  })
})
