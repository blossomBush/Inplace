'use strict';

/**
 * Created by DELL on 2018/12/12.
 */
$(function () {
  $.get('http://localhost:3000/item', function (data) {
    var dataList = JSON.parse(data);
    $('.project-item').append(template('list', { data: dataList }));
  });
});