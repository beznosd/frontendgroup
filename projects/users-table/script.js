var templateScript = $('#row').html();  

$.ajax({
  url: 'https://randomuser.me/api/?results=20',
  dataType: 'json',
  success: function(data) {
    renderUsers(data);
    generateChart(data);
  },
  beforeSend: function() {
    $('.loader').show();
  },
  complete: function() {
    $('.loader').hide();
  },
});

function generateChart(data) {
  var ctx = $('#myChart');

  var maleCount = 0;
  var femaleCount = 0;

  data.results.forEach(function(user) {
    if (user.gender === 'male') {
      maleCount++;
    } else {
      femaleCount++;
    }
  });

  var myChart = new Chart(ctx, {
      type: 'pie',
      data: {
          labels: ['Male', 'Female'],
          datasets: [
            {
                data: [maleCount, femaleCount],
                backgroundColor: [
                    "#7db5ec",
                    "#434348",
                ]
            }
          ]
      },
      options: {
        title: {
          display: true,
          text: 'Gender users'
        }
      }
  });

  
  $('.show-chart').click(function() {
    $('.popup').fadeIn();
    $('.dimmer').fadeIn();
  });

  $('.dimmer').on('click', function() {
    $('.popup').fadeOut();
    $('.dimmer').fadeOut();
  });
}

function renderUsers(data) {
  data.results.forEach(function(user) {
    var template = Handlebars.compile(templateScript);  
    var html = template(user);
    $('table').append(html);
  });

  $('.sign').click(function() {
    var $userInfo = $(this).closest('tr').next().find('.user-info');
    var isJustHide = false;

    // hide previous opened user
    $('.user-info').each(function() {
      if ($(this).hasClass('opened')) {
        $(this).removeClass('opened');
        $(this).slideUp(200);
        $(this).parents('tr').prev().find('.fa-minus').removeClass('fa-minus').addClass('fa-plus');

        if ($userInfo[0] === this) {
          isJustHide = true;
        }
      }
    });

    if (isJustHide) return;

    // show current user
    $userInfo.slideDown(200);
    $userInfo.addClass('opened');

    // change sign
    $(this).removeClass('fa-plus');
    $(this).addClass('fa-minus');
  });

  $('.search-input').keyup(search);
}

function search() {
  // Declare variables 
  var filter = this.value.toLowerCase();
  var table = document.getElementsByTagName('table')[0];
  var tr = table.getElementsByTagName('tr');
  var styleCounter = 0;

  // Loop through all table rows, and hide those who don't match the search query
  for (var i = 0; i < tr.length; i++) {
    var td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      if (td.innerHTML.toLowerCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        if (styleCounter % 2 === 0) {
          tr[i].style.background = "#eee";
        } else {
          tr[i].style.background = "#ccc";
        }
        styleCounter++;
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}