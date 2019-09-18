function CardEffectController() {
    var mouse = {
            X   : 0,
            Y   : 0,
            CX  : 0,
            CY  : 0
    };
    var block = {
        X   : mouse.X,
        Y   : mouse.Y,
        CX  : mouse.CX,
        CY  : mouse.CY
    };
    var imags = [
        'https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
        'https://images.pexels.com/photos/210546/pexels-photo-210546.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
        'https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
        'https://images.pexels.com/photos/210546/pexels-photo-210546.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'
    ];

    var blockElements = document.querySelectorAll('.block');
    blockElements.forEach(function (blockElement) {
        blockElement.addEventListener('mousemove', function(e) {
            var left = blockElement.getBoundingClientRect().left;
            var top = blockElement.getBoundingClientRect().top;
            mouse.X   = (e.pageX - left) - blockElement.offsetWidth / 2;
            mouse.Y   = (e.pageY - top) - blockElement.offsetHeight / 2;
        });

        blockElement.addEventListener('mouseleave', function() {
            mouse.X   = mouse.CX;
            mouse.Y   = mouse.CY;
        });
    });

    setInterval(function(){
        block.CY   += (mouse.Y - block.CY) / 12;
        block.CX   += (mouse.X - block.CX) / 12;

        var blockCircleElements = document.querySelectorAll('.block .circleLight');
        blockCircleElements.forEach(function (blockCircleElement) {
            blockCircleElement.style.background = 'radial-gradient(circle at ' + mouse.X + 'px ' + mouse.Y + 'px, #fff, transparent)';
            var blockElements = document.querySelectorAll('.block');
            blockElements.forEach(function (blockElement) {
                blockElement.style.transform = 'scale(1.03) translate(' + (block.CX * 0.05) + 'px, ' + (block.CY * 0.05) + 'px) rotateX(' + (block.CY * 0.05) + 'deg) rotateY(' + (block.CX * 0.05) + 'deg)';
            });
        });
    }, 20);

    var sliderItems = document.querySelectorAll('.slider .item');
    sliderItems.forEach(function (item, index) {
        if(index === 0){
            if (item.classList) {
                item.classList.add('active');
            } else {
                item.className += ' active';
            }
            var nextElement = item.nextElementSibling;
            if (nextElement && nextElement.classList) {
                nextElement.classList.add('next');
            } else if (nextElement) {
                nextElement.className += ' next';
            }
            var prevElement = item.previousElementSibling;
            if (prevElement && prevElement.classList) {
                prevElement.classList.add('prev');
            } else if (prevElement) {
                prevElement.className += ' prev';
            }
        }

        item.setAttribute('id', 'slide-' + index);
        var blurDiv = document.createElement('div');
        blurDiv.className = 'blur';
        blurDiv.style.backgroundImage = 'url(' + imags[index] + ');';
        var bgDiv = document.createElement('div');
        bgDiv.className = 'bg';
        bgDiv.style.backgroundImage = 'url(' + imags[index] + ');';

        item.insertBefore(bgDiv, item.firstChild);
        item.insertBefore(blurDiv, item.firstChild);

        var blockElements = item.querySelectorAll('.block');
        blockElements.forEach(function (blockElement) {
            blockElement.style.backgroundImage = 'url(' + imags[index] + ')';
        });

        var navigationDots = document.querySelectorAll('.navigations .dots');
        navigationDots.forEach(function (navigationDot, index) {
            var li = document.createElement('li');
            li.className = index === 0 ? 'active' : '';
            li.id = index;
            li.onclick = function () {
                var currentSlides = document.querySelectorAll('.slider #slide-' + this.id);
                currentSlides.forEach(function (currentSlide) {
                    if (currentSlide.classList) {
                        currentSlide.classList.add('active');
                    } else {
                        currentSlide.className += ' active';
                    }

                    if (currentSlide.nextElementSibling) {
                        if (currentSlide.nextElementSibling.classList) {
                            currentSlide.nextElementSibling.classList.add('next');
                        } else {
                            currentSlide.nextElementSibling.className += ' next';
                        }
                    }

                    if (currentSlide.previousElementSibling) {
                        if (currentSlide.previousElementSibling.classList) {
                            currentSlide.previousElementSibling.classList.add('prev');
                        } else {
                            currentSlide.previousElementSibling.className += ' prev';
                        }
                    }
                });

                var navigationDotsLis = document.querySelectorAll('.navigations .dots li');
                navigationDotsLis.forEach(function (navigationDotsLi) {
                    if (navigationDotsLi.classList) {
                        navigationDotsLi.classList.remove('active');
                    } else {
                        navigationDotsLi.className = navigationDotsLi.className.replace(new RegExp('(^|\\b)' + 'active'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
                    }
                });

                if (this.classList) {
                    this.classList.add('active');
                } else {
                    this.className += ' active';
                }

                var sliderItems = document.querySelectorAll('.slider .item');
                sliderItems.forEach(function (sliderItem) {
                    if (sliderItem.classList) {
                        sliderItem.classList.remove('.active');
                        sliderItem.classList.remove('.prev');
                        sliderItem.classList.remove('.next');
                    } else {
                        sliderItem.className = sliderItem.className.replace(new RegExp('(^|\\b)' + 'active prev next'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
                    }
                });

            };
            navigationDot.appendChild(li);
        });

    });

}

module.exports = [CardEffectController];