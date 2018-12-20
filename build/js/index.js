'use strict';

/**
 * Created by DELL on 2018/12/10.
 */
$(function () {

  $.get('http://localhost:3000/leftNav', function (data) {
    var leftData = JSON.parse(data);
    $('.banner-nav').append(template('leftNav', { data: leftData }));
    $('.list-container').append(template('service', { data: leftData }));
  });

  //轮播图
  new Swiper('.swiper-container', {
    effect: 'fade',
    autoplay: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });

  // 头部动画
  var $header = $('.header');
  var headerHeight = $header.outerHeight();
  var ishide = false;
  $(window).scroll(function () {
    if (document.documentElement.scrollTop > headerHeight) {
      if (!ishide) {
        $header.hide().slideDown('slow').addClass('header-fixed');
        ishide = true;
        console.log(1111);
      }
    } else if (document.documentElement.scrollTop < headerHeight) {
      if (ishide) {
        $header.removeClass('header-fixed');
        ishide = false;
        console.log(222);
      }
    }
  });
});