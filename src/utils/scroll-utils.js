export function smoothScrollTo(targetId) {
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    const targetOffset = targetElement.getBoundingClientRect().top;
    const initialOffset = window.pageYOffset;
    const duration = 700; // Adjust the duration as needed (in milliseconds)

    let startTime;

    function scrollAnimation(currentTime) {
      if (!startTime) {
        startTime = currentTime;
      }

      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easeInOutCubic = (t) =>
        t < 0.5 ? 4 * t ** 3 : 1 - Math.pow(-2 * t + 2, 3) / 2;
      const interpolatedOffset =
        initialOffset + targetOffset * easeInOutCubic(progress);

      window.scrollTo(0, interpolatedOffset);

      if (progress < 1) {
        requestAnimationFrame(scrollAnimation);
      }
    }

    requestAnimationFrame(scrollAnimation);
  }
}
