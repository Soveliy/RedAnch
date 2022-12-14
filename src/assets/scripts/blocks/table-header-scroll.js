function throttle(func, ms) {
  let isThrottled = false;
  let savedArgs = null;
  let savedThis = null;

  return function wrapper () {
    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments);
    isThrottled = true;

    setTimeout(function() {
      isThrottled = false;
      
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }
}

window.addEventListener('scroll', function () {
  const { scrollY } = window;
  const headerHeight = document.querySelector('.header').offsetHeight
  const element = document.querySelector('[data-sticke-element]') 
  const wrapper = element.parentElement
  const startOffset = wrapper.getBoundingClientRect().top + scrollY
  const endOffset = wrapper.getBoundingClientRect().top + wrapper.clientHeight + scrollY - headerHeight

  if (scrollY + headerHeight > startOffset) {
      element.classList.add('fixed')
      element.style.width = wrapper.clientWidth + 'px'
      element.style.top = headerHeight + 4 + 'px'
      wrapper.style.display = 'block'
      wrapper.style.paddingTop = element.clientHeight + 'px'
  } else {
      element.classList.remove('fixed')
      element.style.top = 0
      element.style.width = 'auto'
      wrapper.style.paddingTop = '0'
  }

  if (scrollY + headerHeight >= endOffset + element.clientHeight) {
      element.classList.add('stopped')
      element.style.top = wrapper.clientHeight + element.clientHeight + 'px'
  } else {
      element.classList.remove('stopped')
  }
})