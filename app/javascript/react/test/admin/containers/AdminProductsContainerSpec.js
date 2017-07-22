import GroupTile from 'admin/components/GroupTile';

describe('AdminProductsContainer', () => {

  beforeEach(() => {
    spyOn(global, 'fetch').and.callFake(url => {
      return(createResponseFromFixture('products'))
    })

    wrapper = mountReactAppAt('/admin/products')
  })

  it('renders GroupTile components for each group', () => {
    expect(wrapper.find(GroupTile)).toBePresent();
    expect(wrapper.find(GroupTile).length).toEqual(2)
  })
});
