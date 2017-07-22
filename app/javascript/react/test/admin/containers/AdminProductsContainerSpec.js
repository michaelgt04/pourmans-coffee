import GroupTile from 'admin/components/GroupTile';

describe('AdminProductsContainer', () => {

  beforeEach(() => {
    spyOn(global, 'fetch').and.callFake(url => {
      return(createResponseFromFixture('products'))
    })

    wrapper = mountReactAppAt('/admin/products')
  })

  it('renders GroupTile components', () => {
    expect(wrapper.find(GroupTile)).toBePresent();
  })
});
