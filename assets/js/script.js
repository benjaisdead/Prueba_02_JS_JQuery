$(function(){

// Tweet Like
$('.dashboard').on('click', '.tweet__like', function(event){
  $(this).addClass('tweet__like--red');
  $(this).removeClass('tweet__like')
  event.preventDefault();
  event.stopPropagation();
})

// Tweet Counter
  $('ul').on('click', 'a', function(event){
  event.stopPropagation()
  counter = $('div:last').text();
  counter = parseInt(counter);
  console.log(counter + 1);
  $('div:last').text(counter + 1)
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
              <a class="tweet__like--red tweet__like">
                <i class="fas fa-heart"></i>
              </a>
                <div class="tweet__counter">
                  0
                </div>
    </li>`

    $('.dashboard').append(html);

    $('#image').val('profile-blank.png')
    $('.create__textarea--username').val('');
    $('.create__textarea--tweet').val('');
    $('.create__profile .create__img').attr('src', 'assets/img/profile-img/profile-blank.png');
})
});
