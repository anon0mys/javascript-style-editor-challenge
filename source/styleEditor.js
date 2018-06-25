$(document).ready(function(){
  $('#style_editor').submit(function(event) {
    event.preventDefault()
    style_page();
  })
});

const style_page = () => {
  let selector = $("input[name = 'selector']").val()
  let property = $("input[name = 'property']").val()
  let value = $("input[name = 'value']").val()
  $(selector).css(property, value)
}
