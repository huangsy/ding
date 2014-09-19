(function () {
  function $(selector) {
    fn = selector.indexOf('#') > -1 ? 'getElementById' : 'getElementsByClassName'
    return document[fn](selector.slice(1)) || []
  }
  $('#submission_password').value = '9527';
  $('.btn-primary').length && $('.btn-primary')[0].click();
  chrome.storage.local.get('dingName', function (item) {
    $('#entry_field_1').value = item.dingName;
    $('.submit').length && $('.submit')[0].click();
  })
})();

