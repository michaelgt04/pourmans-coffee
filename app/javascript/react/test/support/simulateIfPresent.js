let simulateIfPresent = (wrapper, ...args) => {
  !wrapper.exists() ? expect(wrapper).toBePresent() : wrapper.simulate(...args);
};

export default simulateIfPresent;
