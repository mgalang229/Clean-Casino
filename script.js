//DECLARATIONS
//HOME PAGE CARD
const firstCard = document.querySelector('.firstCard');
//3 MINI CARDS
const miniCards = document.querySelector('.miniCards');
const firstMiniCard = document.querySelector('#firstMiniCard');
const secondMiniCard = document.querySelector('#secondMiniCard');
const thirdMiniCard = document.querySelector('#thirdMiniCard');
//REVEAL BUTTON
const revealBtn = document.querySelector('#revealBtn');
const revealBtn2 = document.querySelector('#revealBtn2');
const revealBtn3 = document.querySelector('#revealBtn3');
//H4
const tapReveal = document.querySelector('h4');
//STARS
const miniStars = document.querySelector('.miniStars');
const miniStars2 = document.querySelector('.miniStars2');
const miniStars3 = document.querySelector('.miniStars3');
//SUPER EFFECT
const superEffect = document.querySelector('#superEffect');
const superEffect2 = document.querySelector('#superEffect2');
const superEffect3 = document.querySelector('#superEffect3');
const superEffect4 = document.querySelector('#superEffect4');

//EVENT FUNCTIONS
firstCard.addEventListener('click', openOffers);

function openOffers() {
    //firstCard.style.animation = 'cog3 1s';
    superEffect.style.display = 'block'
    firstCard.remove();
    setTimeout(overrideFirstCard, 10);
    setTimeout(tapRevealFunc,400);
}

function tapRevealFunc(){
    tapReveal.style.display = 'block';
    tapReveal.style.animation = 'fadeIn 2s';
}

function overrideFirstCard() {
    setTimeout(eraseSpin, 400);
    firstMiniCard.style.animation = 'slideInFromRight 0.6s';
    secondMiniCard.style.animation = 'slideInFromTop 0.6s';
    thirdMiniCard.style.animation = 'slideInFromLeft 0.6s';
    firstMiniCard.style.display = 'block';
    secondMiniCard.style.display = 'block';
    thirdMiniCard.style.display = 'block';
    tapReveal.style.animation = 'float 1.2s ease-out infinite';
}

function eraseSpin(){
    setTimeout(eraseSpin2, 80);
}
function eraseSpin2(){
    superEffect.style.display = 'none';
}

firstMiniCard.addEventListener('click', miniOffer1);

function miniOffer1() {
    miniCards.style.marginTop = '60px;'
    tapReveal.style.display = 'none';

    superEffect2.style.display = 'block';
    setTimeout(function(){
        superEffect2.style.display = 'none';
    }, 400);

    firstMiniCard.style.transform = 'rotate(0)';
    firstMiniCard.style.transition = 'all 1s ease-in-out';
    firstMiniCard.style.background = 'linear-gradient(yellow, white)';
    firstMiniCard.innerHTML = '<h3>$25M</h3>';

    firstMiniCard.appendChild(miniStars);
    setInterval(stars, 500);
    
    revealBtn.style.display = 'block';
    revealBtn.addEventListener('click', function() {
        miniCards.style.animation = 'fadeIn 2s';

        superEffect3.style.display = 'block';
        setTimeout(function(){
            superEffect3.style.display = 'none';
        }, 400);
        secondMiniCard.style.display = 'block';

        secondMiniCard.style.animation = 'cog2 0.6s';
        secondMiniCard.style.transform = 'rotate(0)';
        secondMiniCard.style.background = 'linear-gradient(yellow, white)';
        secondMiniCard.innerHTML = '<h3>TESLA</h3>';

        secondMiniCard.appendChild(miniStars2);
        setInterval(stars2, 500);

        revealBtn.remove();
        revealBtn2.style.display = 'block';
    });
    revealBtn2.addEventListener('click', function() {
        miniCards.style.animation = 'fadeIn 0.6s';
        thirdMiniCard.style.display = 'block';

        superEffect4.style.display = 'block';
        setTimeout(function(){
            superEffect4.style.display = 'none';
        }, 400);

        thirdMiniCard.style.animation = 'fadeIn 0.6s';
        thirdMiniCard.style.transform = 'rotate(0)';
        thirdMiniCard.style.background = 'linear-gradient(yellow, white)';
        thirdMiniCard.innerHTML = '<h3>VILLA</h3>';

        thirdMiniCard.appendChild(miniStars3);
        setInterval(stars3, 500);

        revealBtn2.remove();
        revealBtn3.style.display = 'block';
    });
    revealBtn3.addEventListener('click', function() {
        miniCards.style.animation = 'slideInFromBottom 0.6s';
        revealBtn3.style.marginTop = '50px';
        firstMiniCard.style.margin = '0';
        secondMiniCard.style.marginLeft = '20px';
        secondMiniCard.style.marginRight = '20px';
        thirdMiniCard.style.margin = '0';

        firstMiniCard.style.background = 'rgba(0,0,0,0.89)';
        secondMiniCard.style.background = 'rgba(0,0,0,0.89)';
        thirdMiniCard.style.background = 'rgba(0,0,0,0.89)';
        
        revealBtn3.style.animation = 'cog2 2s';
        revealBtn3.innerHTML = 'Nice offers!';

    });
    
}

secondMiniCard.addEventListener('click', miniOffer2);

function miniOffer2() {
    tapReveal.style.display = 'none';

    secondMiniCard.style.animation = 'fadeIn 0.6s';
    secondMiniCard.style.transform = 'rotate(0)';
    secondMiniCard.style.background = 'linear-gradient(yellow, white)';
    secondMiniCard.innerHTML = '<h3>FORD</h3>';

    secondMiniCard.appendChild(miniStars2);
    setInterval(stars2, 500);

    revealBtn.style.display = 'block';
    revealBtn.addEventListener('click', function() {
        miniCards.style.animation = 'fadeIn 0.6s';
        firstMiniCard.style.display = 'block';

        firstMiniCard.style.animation = 'slideInFromLeft 0.6s';
        firstMiniCard.style.transform = 'rotate(0)';
        firstMiniCard.style.background = 'linear-gradient(yellow, white)';
        firstMiniCard.innerHTML = '<h3>$67M</h3>';

        firstMiniCard.appendChild(miniStars);
        setInterval(stars, 500);

        revealBtn.remove();
        revealBtn2.style.display = 'block';
    });
    revealBtn2.addEventListener('click', function() {
        miniCards.style.animation = 'fadeIn 0.6s';
        thirdMiniCard.style.display = 'block';

        thirdMiniCard.style.animation = 'slideInFromRight 0.6s';
        thirdMiniCard.style.transform = 'rotate(0)';
        thirdMiniCard.style.background = 'linear-gradient(yellow, white)';
        thirdMiniCard.innerHTML = '<h3>HOUSE</h3>';

        thirdMiniCard.appendChild(miniStars3);
        setInterval(stars3, 500);

        revealBtn2.remove();
        revealBtn3.style.display = 'block';
    });
    revealBtn3.addEventListener('click', function() {
        miniCards.style.animation = 'slideInFromBottom 0.6s';
        revealBtn3.style.marginTop = '50px';
        firstMiniCard.style.margin = '0';
        secondMiniCard.style.marginLeft = '20px';
        secondMiniCard.style.marginRight = '20px';
        thirdMiniCard.style.margin = '0';

        firstMiniCard.style.background = 'rgba(0,0,0,0.89)';
        secondMiniCard.style.background = 'rgba(0,0,0,0.89)';
        thirdMiniCard.style.background = 'rgba(0,0,0,0.89)';

        revealBtn3.style.animation = 'cog2 2s';
        revealBtn3.innerHTML = 'Lucky choice!';

    });
}

thirdMiniCard.addEventListener('click', miniOffer3);

function miniOffer3() {
    tapReveal.style.display = 'none';

    thirdMiniCard.style.animation = 'slideInFromRight 0.6s';
    thirdMiniCard.style.transform = 'rotate(0)';
    thirdMiniCard.style.background = 'linear-gradient(yellow, white)';
    thirdMiniCard.innerHTML = '<h3>ESTATE</h3>';

    thirdMiniCard.appendChild(miniStars3);
    setInterval(stars3, 500);

    revealBtn.style.display = 'block';
    revealBtn.addEventListener('click', function() {
        miniCards.style.animation = 'fadeIn 0.6s';
        firstMiniCard.style.display = 'block';

        firstMiniCard.style.animation = 'slideInFromLeft 0.6s';
        firstMiniCard.style.transform = 'rotate(0)';
        firstMiniCard.style.background = 'linear-gradient(yellow, white)';
        firstMiniCard.innerHTML = '<h3>$100M</h3>';

        firstMiniCard.appendChild(miniStars);
        setInterval(stars, 500);

        revealBtn.remove();
        revealBtn2.style.display = 'block';
    });
    revealBtn2.addEventListener('click', function() {
        miniCards.style.animation = 'fadeIn 0.6s';
        secondMiniCard.style.display = 'block';

        secondMiniCard.style.animation = 'fadeIn 0.6s';
        secondMiniCard.style.transform = 'rotate(0)';
        secondMiniCard.style.background = 'linear-gradient(yellow, white)';
        secondMiniCard.innerHTML = '<h3>GOLD</h3>';

        secondMiniCard.appendChild(miniStars2);
        setInterval(stars2, 500);

        revealBtn2.remove();
        revealBtn3.style.display = 'block';
    });
    revealBtn3.addEventListener('click', function() {
        miniCards.style.animation = 'slideInFromBottom 0.6s';
        revealBtn3.style.marginTop = '50px';
        firstMiniCard.style.margin = '0';
        secondMiniCard.style.marginLeft = '20px';
        secondMiniCard.style.marginRight = '20px';
        thirdMiniCard.style.margin = '0';

        firstMiniCard.style.background = 'rgba(0,0,0,0.89)';
        secondMiniCard.style.background = 'rgba(0,0,0,0.89)';
        thirdMiniCard.style.background = 'rgba(0,0,0,0.89)';

        revealBtn3.style.animation = 'cog2 2s';
        revealBtn3.innerHTML = 'Good job!';
        
    });
}
function stars(){
        miniStars.style.animation = 'cog2 2s';
        miniStars.style.display = 'block';
}
function stars2(){
        miniStars2.style.animation = 'cog2 2s';
        miniStars2.style.display = 'block';
}
function stars3(){
        miniStars3.style.animation = 'cog2 2s';
        miniStars3.style.display = 'block';
}
