  let position = 0;
  const slidesToShow = 3;
  const slidesToScroll = 1;
  const container = document.querySelector('.slider-container');
  const item = document.querySelectorAll('.slide');
  const track = document.querySelector('.slider-track');
  const btnPrev = document.querySelector('.slide-prev');
  const btnNext = document.querySelector('.slide-next');
  const itemsCount = item.length;
  const itemWidth = container.clientWidth / slidesToShow;
  const movePosition = slidesToScroll * itemWidth;

  /*item.each(function(index, item){
    $(item).css({
      width: item.width(),
    });
  });*/

  btnPrev.addEventListener('click', () => {
    const itemsLeft = itemsCount - Math.abs(position) / itemWidth;
    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    console.log(position);

    setPosition();
    checkBtns();
  });

  btnNext.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    console.log(position);

    setPosition();
    checkBtns();
  });

  const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
  };

  const checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
  };

  checkBtns();