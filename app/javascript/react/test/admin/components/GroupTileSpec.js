import GroupTile from 'admin/components/GroupTile';
import ProductTile from 'admin/components/ProductTile';

describe('GroupTile', () => {

  beforeEach(() => {

    let products = [
      {
        "title": "brownie",
        "description": "yummy",
        "group": "noms"
      }
    ]

    wrapper = shallow(
      <GroupTile
        key="noms"
        name="Noms"
        products={products}
      />
    )
  })

  it('renders the group name', () => {
    expect(wrapper.text()).toMatch('Noms');
  })

  it('renders ProductTile components', () => {
    expect(wrapper.find(ProductTile)).toBePresent();
  })
})
