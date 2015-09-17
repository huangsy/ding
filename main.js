(function () {

  function $(selector) {
    fn = selector.indexOf('#') > -1 ? 'getElementById' : 'getElementsByClassName'
    return document[fn](selector.slice(1)) || []
  }

  chrome.storage.local.get('dingName', function (item) {
    $('#name').value = item.dingName || 4;
  });

  function jsonp(url) {
    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('body')[0].appendChild(script);
  }

  function open(val) {
    chrome.storage.local.set({'list': window.__list__});
    var val = typeof val === 'number' ? val : $('#name').value;
    var isNum = !/\D/.test(val);
    if (isNum) {
      chrome.storage.local.set({'dingName': val});
      var timer = setInterval(function () {
        if (--val <= 0) clearInterval(timer);
        chrome.tabs.create({
            url: 'https://jinshuju.net/f/7KN7gy'
        });
      }, 1000);
    } else {
      chrome.storage.local.set({'dingName': val});
      chrome.tabs.create({
          url: 'https://jinshuju.net/f/7KN7gy'
      });
    }
  }

  window.callback = function (data) {
    window.__list__ = data;
  }

  jsonp(chrome.extension.getURL('package.json'));
  $('#submit').onclick = open;
  chrome.tabs.onCreated.addListener(function () {
    var date = new Date();
    var today = date.toLocaleDateString();
    var dingDate = localStorage.getItem('dingDate');
    if (dingDate !== today && date.getDay() > 0 && date.getDay() < 6 && date.getHours() > 5 && date.getHours() < 12) {
      open(window.__list__.length);
      localStorage.setItem('dingDate', today);
    }
  });
  
})();

