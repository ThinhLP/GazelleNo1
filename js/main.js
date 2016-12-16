var isShow = false;
var isHover = false;
$('#banner-left, #left-nav').hover(function () {
    $('#banner-left').addClass('banner-left-hover');
    $('#banner-left-edge').addClass('banner-left-edge-hover');
    $('#banner-bike').addClass('banner-bike-hover');
    $('#left-nav').css('left', '13%');
    $('#right-nav').css('right', '12%');
}, function () {
    $('#banner-left').removeClass('banner-left-hover');
    $('#banner-left-edge').removeClass('banner-left-edge-hover');
    $('#banner-bike').removeClass('banner-bike-hover');
    $('#left-nav').css('left', '10%');
    $('#right-nav').css('right', '15%');
});
$('#banner-right-background, #right-nav').hover(function () {
    $('#banner-right-background').css('opacity', '0.1');
}, function () {
    $('#banner-right-background').css('opacity', '0.3');
});
$('#menu').on('click', function () {
    if (isHover) {
        $('.menu-bar').css('transform', 'rotate(0deg)');
    }
    if (!isShow) {
        // Show menu
        $('.menu-title').hide();
        $(this).css('width', '45px');
        $('.menu-bar-mid').hide();
        $('.menu-bar-top').css('transform', 'translateY(9px) rotate(45deg)');
        $('.menu-bar-bot').css('transform', 'rotate(-45deg)');
        isShow = true;
        $('#overlay').show();
        $('#menu-dialog-content').show();
        $('#background-header').hide();
        $('#header-logo').hide();
        $('body').css('overflow', 'hidden');
    }
    else {
        // Hide menu
        $('.menu-title').show();
        $(this).css('width', '90px');
        $('.menu-bar-mid').show();
        $('.menu-bar-top').css('transform', 'translateY(0px) rotate(0deg)');
        $('.menu-bar-bot').css('transform', 'rotate(0deg)');
        isShow = false;
        $('#overlay').hide();
        $('#background-header').show();
        $('#header-logo').show();
        $('#menu-dialog-content').hide();
        $('body').css('overflow', 'visible');
    }
});
$('#menu').hover(function () {
    if (isShow) {
        $('.menu-bar').css('transform', 'translate(-5px, 4px) rotate(-90deg)');
        isHover = true;
    }
}, function () {
    if (isShow) {
        $('.menu-bar').css('transform', 'rotate(0deg)');
        isHover = false;
    }
});
$(function () {
    setTimeout(function () {
        $('#banner-wrapper').css('opacity', '1');
    }, 1000);
    setTimeout(function () {
        $('#banner-bike').css('opacity', '1');
    }, 2000);
    setTimeout(function () {
        $('#banner-title').css('opacity', '1');
    }, 2500);
    setTimeout(function () {
        $('#banner-title').css('top', '230px');
    }, 3000);
});