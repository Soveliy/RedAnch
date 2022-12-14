// briks.js

// Bricks

const initBricks = () => {

    const brickSections = document.querySelectorAll('.js-bricks');
    if (!brickSections) return;

    brickSections.forEach((brickSection) => {

        const bricksBricks = brickSection.querySelectorAll('.js-bricks__brick');
        const bricksContents = brickSection.querySelectorAll('.js-bricks__content');

        bricksBricks.forEach((bricksBrick, bricksBrickIndex) => {

            bricksBrick.addEventListener('click', (event) => {

                event.preventDefault();

                bricksBricks.forEach((bricksBrick) => {
                    bricksBrick.classList.remove('bricks__brick--active');
                });

                bricksBrick.classList.add('bricks__brick--active');

                bricksContents.forEach((bricksContent) => {
                    if (bricksContent.dataset.contentName == bricksBrick.dataset.contentName) {
                        bricksContent.classList.add('bricks__content--active');
                    } else {
                        bricksContent.classList.remove('bricks__content--active');
                    }
                });

            });

            if (bricksBrickIndex == 0) {
                bricksBrick.click();
            }

        });

    });

};

initBricks();