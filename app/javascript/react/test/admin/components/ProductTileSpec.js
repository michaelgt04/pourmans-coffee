import ProductTile from 'admin/components/ProductTile';

describe('ProductTile', () => {

  beforeEach(() => {

    let product =
      {
        "id": 1,
        "title": "brownie",
        "description": "yummy",
        "group": "noms"
      }

    wrapper = shallow(
      <ProductTile
        product={product}
      />
    )
  })

  it('renders the title and description of the product', () => {
    expect(wrapper.text()).toMatch("brownie")
    expect(wrapper.text()).toMatch("yummy")
  })
})
