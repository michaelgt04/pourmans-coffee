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
         fillIn('startTime', { with: '9:00am' }, wrapper)
         fillIn('endTime', { with: '12:00pm' }, wrapper)
         fillIn('location', { with: 'Square' }, wrapper)
         fillIn('note', { with: 'Every other week' }, wrapper)

         let submitButton = wrapper.find('.event-submit-button');

         simulateIfPresent(submitButton, 'submit');

         setTimeout(() => {
            expect(wrapper.text()).toMatch("Monday")
            expect(wrapper.text()).toMatch("9:00am")
            expect(wrapper.text()).toMatch("12:00pm")
            expect(wrapper.text()).toMatch("Dewey Square")
            expect(wrapper.text()).toMatch("Every other week")
            done ();
          }, 0)
      }, 0)
    })
  })

  fdescribe('when an admin adds a new product unsuccessfully', () => {
    it('renders an error when they do not specify a day and does not submit the product', done => {
      setTimeout(() => {
         fillIn('startTime', { with: '9:00am' }, wrapper)
         fillIn('endTime', { with: '12:00pm' }, wrapper)
         fillIn('location', { with: 'Square' }, wrapper)
         fillIn('note', { with: 'Every other week' }, wrapper)

         let submitButton = wrapper.find('.event-submit-button');

         simulateIfPresent(submitButton, 'submit');

        expect(wrapper.text()).toMatch("Please enter a day!")
        expect(wrapper.text()).not.toMatch("a giant cookie")

        done();
      }, 0)
    })
  })
})
