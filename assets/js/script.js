$(function(){


// Tweet Like & Counter
$(document).on('click', '.fa-heart', function(){
  $(this).addClass('tweet__like--red');
  $(this).removeClass('tweet__like')
  .siblings('.tweet__output').html(function (i, val){ return val*1+1})
})

// Close Pin
$('.dashboard').on('click', '.tweet__pin', function (event){
  event.stopPropagation();
  $(this).parent().fadeOut(900);
})

// Tweet Post
$('#image').on('change', function (){
  var image = $(this).val()
  $('.create__profile .create__img').attr('src', 'assets/img/profile-img/' + image);
});

$('.create__form').on('submit', function(event){
    event.preventDefault();

    var profile = $('#image').val();
    var username = $('.create__textarea--username').val();
    var tweet = $('.create__textarea--tweet').val();

    var html = `<li class="tweet">
      <div class="tweet__profile">
        <img src="assets/img/profile-img/${ profile }" class="tweet_img">
      </div>
      <div class="tweet__pin">
        <i class="fas fa-times-circle"></i>
      </div>
        <div class="tweet__username">
          <h2>${ username }</h2>
        </div>
          <div class="tweet__content">
            <p>${ tweet }</p>
          </div>
                <i class="fas fa-heart tweet__like tweet__like--btn"></i>
                <i class="tweet__output">0</i>
    </li>`

    $('.dashboard').append(html);

    $('#image').val('profile-blank.png')
    $('.create__textarea--username').val('');
    $('.create__textarea--tweet').val('');
    $('.create__profile .create__img').attr('src', 'assets/img/profile-img/profile-blank.png');
})
});
