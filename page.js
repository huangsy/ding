(function () {

  var ns = 'chromeEx'

  function setItem(key, val) {
    var storage = JSON.parse(localStorage[ns] || '{}');
    storage[key] = val;
    localStorage[ns] = JSON.stringify(storage);
  }

  function getItem(key) {
    return JSON.parse(localStorage[ns] || '{}')[key];
  }

  function $(selector) {
    fn = selector.indexOf('#') > -1 ? 'getElementById' : 'getElementsByClassName'
    return document[fn](selector.slice(1)) || []
  }

  $('#submission_password').value = '9527';
  $('.btn-primary')[0].click();
  chrome.storage.local.get('dingName', function (item) {
    var isNum = !/\D/.test(item.dingName);
    chrome.storage.local.get('list', function (item) {
      var list = item.list;
      var date = new Date();
      if (!isNum) return;
      var num = getItem('num');
      num = num + 1;
      setItem('num', num);
      document.forms['new_entry']['entry[field_1]'].value = list[num % list.length].name;
      document.forms['new_entry']['entry[field_9]'].value = 'RJfx';
      document.forms['new_entry']['entry[field_10]'].value = list[num % list.length].department;
      var filter = list[num % list.length].filter;
      if (filter && filter.indexOf(date.getDay()) < 0) return;
      $('.submit').length && $('.submit')[0].click();
    });
  })
})();

