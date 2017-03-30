success.onclick = function(){
  showNotification({
    type: 'success',
    text: 'Some message Some message!',
  });
};

error.onclick = function(){
  showNotification({
    type: 'error',
    bottom: true,
    text: 'Text of our notification',
    time: 3000
  });
};