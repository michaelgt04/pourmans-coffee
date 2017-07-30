describe('test/admin/features/AdminAddsNewEventSpec', () => {
  beforeEach(() => {
    stubGlobalFetch({
      '/api/v1/events':  { GET: 'events' },
      '/api/v1/events.json':  { POST: 'postEventResponse' }
    });

    wrapper = mountReactAppAt('/admin/events')
  })

  describe('when an admin adds a new event successfully', () => {
    it('submits the event and displays it on the page', done => {
      setTimeout(() => {
         select('Monday', { from: 'day' }, wrapper)
         fillIn('startTime', { with: '9:30am' }, wrapper)
         fillIn('endTime', { with: '12:00pm' }, wrapper)
         fillIn('location', { with: 'Post Office Square' }, wrapper)
         fillIn('note', { with: 'Every other week' }, wrapper)

         let submitButton = wrapper.find('.event-submit-button');

         simulateIfPresent(submitButton, 'submit');

         setTimeout(() => {
            expect(wrapper.text()).toMatch("Monday")
            expect(wrapper.text()).toMatch("9:30am")
            expect(wrapper.text()).toMatch("12:00pm")
            expect(wrapper.text()).toMatch("Dewey Square")
            expect(wrapper.text()).toMatch("Every other week")
            done ();
          }, 0)
      }, 0)
    })
  })

  describe('when an admin adds a new product unsuccessfully', () => {
    it('renders an error when they do not specify required fields and does not submit the product', done => {
      setTimeout(() => {
        let submitButton = wrapper.find('.event-submit-button');

        simulateIfPresent(submitButton, 'submit');

        expect(wrapper.text()).toMatch("Please enter a day!")
        expect(wrapper.text()).toMatch("Please enter a start time!")
        expect(wrapper.text()).toMatch("Please enter an end time!")
        expect(wrapper.text()).toMatch("Please enter a location!")
        expect(wrapper.text()).not.toMatch("cookie")
        done();
      }, 0)
    })

    it('renders an error when a user does not provide a time of day (am or pm) and does not submit the product', done => {
      setTimeout(() => {
        select('Monday', { from: 'day' }, wrapper)
        fillIn('startTime', { with: '9:30' }, wrapper)
        fillIn('endTime', { with: '12:00pm' }, wrapper)
        fillIn('location', { with: 'Post Office Square' }, wrapper)
        fillIn('note', { with: 'Every other week' }, wrapper)

        let submitButton = wrapper.find('.event-submit-button');

        simulateIfPresent(submitButton, 'submit');

        expect(wrapper.text()).toContain("Please provide a time of day (am or pm)!")
        expect(wrapper.text()).not.toMatch("Post Office Square")
        done();
      }, 0)
    })

    it('renders an error when a user does not provide a valid time format and does not submit the product', done => {
      setTimeout(() => {
        select('Monday', { from: 'day' }, wrapper)
        fillIn('startTime', { with: '9:0am' }, wrapper)
        fillIn('endTime', { with: '12:00pm' }, wrapper)
        fillIn('location', { with: 'Post Office Square' }, wrapper)
        fillIn('note', { with: 'Every other week' }, wrapper)

        let submitButton = wrapper.find('.event-submit-button');

        simulateIfPresent(submitButton, 'submit');

        expect(wrapper.text()).toContain("Please provide a valid time format (e.g. 9:00am)")
        expect(wrapper.text()).not.toMatch("Post Office Square")
        done();
      }, 0)
    })
  })
})
