(function () {
  function $(selector) {
    fn = selector.indexOf('#') > -1 ? 'getElementById' : 'getElementsByClassName'
    return document[fn](selector.slice(1)) || []
  }

  chrome.storage.local.get('dingName', function (item) {
    $('#name').value = item.dingName || '黄诗喻';
  });

  $('#submit').onclick = function () {
    chrome.storage.local.set({'dingName': $('#name').value});
    chrome.tabs.create({
      url: 'https://jinshuju.net/f/euwlb5',
    });  
  }
})();

