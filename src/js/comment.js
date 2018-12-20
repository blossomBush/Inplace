/**
 * Created by DELL on 2018/12/12.
 */
$(function () {
  $.get('http://localhost:3000/item', (data)=> {
    const dataList = JSON.parse(data)
    $('.project-item').append(template('list', {data: dataList}))
  })
})