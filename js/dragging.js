const slider = document.getElementsByClassName('c-slider')[0];
const timeline = new TimelineLite();

let canMove = false;
let touchDown = 0;
let prevX = 0;
let slides = document.getElementsByClassName('c-slide');
const slideWidth = slides[0].offsetWidth + 20;


const init = () => {
  slider.addEventListener('mousedown', handleMouse);
  slider.addEventListener('mouseup', handleMouse);
  slider.addEventListener('mousemove', handleMove);

  slider.addEventListener('touchstart', handleTouch);
  slider.addEventListener('touchmove', handleTouchMove);
};

/* Mouse handlers */
const handleMouse = e => {
  if (e.type === 'mouseup') {
    canMove = false;
  } else {
    canMove = true;
  }
};

const handleMove = e => {
  if (e.pageX < prevX && canMove) {
    /* to left */
    handleSwipeLeft();
    canMove = false;
  } else if (e.pageX > prevX && canMove) {
    /* to right */
    handleSwipeRight();
    canMove = false;
  }

  prevX = e.pageX;
};

/* Touch handlers */
const handleTouch = e => {
  touchDown = e.touches[0].clientX
}

const handleTouchMove = e => {
  if (!touchDown) {
    return
  }

  const touchUp = e.touches[0].clientX
  const touchDiff = touchDown - touchUp

  if (touchDiff > 0) {
    handleSwipeLeft();
  } else {
    handleSwipeRight();
  }

  touchDown = null
};

/* Swipe handlers */
const handleSwipeLeft = () => {
  timeline.fromTo(slider, 1,
    {
      x: '0px'
    },
    {
      x: `-${slideWidth}px`,
      ease: Power4.easeOut
    }
  );

  timeline.to(slider, 0.001,
    {
      x: '0px',
      onComplete: () => {
        slider.appendChild(slides[0]);
        slides = document.getElementsByClassName('c-slide');
      }
    }
  );
};

const handleSwipeRight = () => {
  timeline.to(slider, 0.001,
    {
      x: `-${slideWidth}px`,
      onComplete: () => {
        const first = slides[0];
        const last = slides[slides.length - 1];
        slider.insertBefore(last, first);
        slides = document.getElementsByClassName('c-slide');
      }
    }
  );

  timeline.to(slider, 1,
    {
      x: `0px`,
      ease: Power4.easeOut
    }
  );
};

init();