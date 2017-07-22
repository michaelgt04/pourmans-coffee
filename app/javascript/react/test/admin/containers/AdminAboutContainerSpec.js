import AboutTile from 'admin/components/AboutTile';

describe('AdminAboutContainer', () => {

  beforeEach(() => {
    spyOn(global, 'fetch').and.callFake(url => {
      return(createResponseFromFixture('about'))
    })

    wrapper = mountReactAppAt('/admin/about')
  })

  it('renders the AboutTile component', () => {
    expect(wrapper.find(AboutTile)).toBePresent();
  })
});
