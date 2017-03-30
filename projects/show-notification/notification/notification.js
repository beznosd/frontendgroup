;(function(){

  window.showNotification = function(options) {

    var options = options || {
      type: 'success',
      bottom: false,
      text: 'Text of our notification',
      time: 3000
    };

    if (typeof options !== 'object' && Array.isArray(options) ) {
      alert('Please provide only objects');
      return;
    }

    var notification = document.createElement('div');
    notification.style.position = 'absolute';


    if ( options.bottom ) {
      notification.style.bottom = '0';
    } else {
      notification.style.top = '0';
    }

    if ( options.text ) {
      notification.textContent = options.text;
    } else {
      notification.textContent = 'Notification default text';
    }
    
    if (options.type && (options.type === 'success' || options.type === 'error')) {
      notification.className = 'notification ' + options.type;
    } else {
      notification.className = 'notification success';
    }
    
    document.body.appendChild(notification);

    if ( +options.time ) {
      var time = +options.time
    } else {
      var time = 3000;
    }

    setTimeout(function(){
      notification.parentNode.removeChild(notification);
    }, time);
  }

})();