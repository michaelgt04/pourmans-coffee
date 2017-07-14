import ProductTile from 'components/ProductTile';

describe('ProductTile', () => {
  let wrapper,
      product,
      handleHover,
      handleLeave

  product =
    {
      "id": 1,
      "title": "Coconut Cold Brew",
      "description": "obviously the best",
      "img_url": "http://nitrocoldbrew.coffeebean.com/images/NitroCB_1920x1080.jpg"
    }

  handleHover = jasmine.createSpy('handleHover spy')
  handleLeave = jasmine.createSpy('handleLeave spy')

  beforeEach(() => {
    wrapper = shallow(
      <ProductTile
        key={product.id}
        product={product}
        title="Coconut Cold Brew"
        displayText="obviously the best"
        handleHover={handleHover}
        handleLeave={handleLeave}
      />
    )
  })

  it('renders an image with the photo url', () => {
    expect(wrapper.find('img')).toBePresent();
    expect(wrapper.find('img')).toHaveProp('src', 'http://nitrocoldbrew.coffeebean.com/images/NitroCB_1920x1080.jpg')
  })

  it('displays the product description', () => {
    expect(wrapper.text()).toMatch('obviously the best');
  })

  it('triggers the handleHover function when the tile is hovered', () => {
    wrapper.simulate('mouseEnter')
    expect(handleHover).toHaveBeenCalled()
  })

  it('triggers the handleLeave function when the tile is unfocused', () => {
    wrapper.simulate('mouseLeave');

    expect(handleLeave).toHaveBeenCalled();
  })
})
