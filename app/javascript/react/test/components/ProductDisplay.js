import ProductTile from 'components/ProductTile';
import ProductDisplay from 'components/ProductDisplay';

describe('ProductDisplay', () => {

  beforeEach(() => {
    let products = [
      {
        "id": 4,
        "title": "Coconut Cold Brew",
        "description": "The best coffee you've ever had.",
        "group": "drink"
      },
      {
        "id": 5,
        "title": "Nitro Cold Brew",
        "description": "Amazingly smooth.",
        "group": "drink"
      }
    ]

    wrapper = shallow(
      <ProductDisplay
        content={products} 
      />
    )
  })

  it('renders a collection of ProductTile components', () => {
    expect(wrapper.find(ProductTile)).toBePresent();
    expect(wrapper.find(ProductTile).length).toEqual(2)
  })
})
