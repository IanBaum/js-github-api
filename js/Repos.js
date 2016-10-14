var apiKey = require('./../.env').apiKey;

function Repos(){
}

Repos.prototype.getRepos = function(username){
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    $(".selectedUserName").text(response.login);
    $(".selectedUserAvatar").attr('src', response.avatar_url);
  }).fail(function(error){
    console.log(error.responseJSON.message);
    $(".selectedUserName").text("User not Found");
  });

  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    $(".selectedUserRepos").text("");
    for(var i=0; i<response.length;i++){
      $(".selectedUserRepos").append("<li class='repoName'>" + response[i].name + "<ul><li class='repoDate'>" + response[i].created_at +  "<li class='repoDesc'>" + response[i].description + "</li></ul>" + "</li>")
    }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.repoModule = Repos;
