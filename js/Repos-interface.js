var Repos = require('./../js/Repos.js').repoModule;

$(document).ready(function(){
  var currentRepos = new Repos;
  $('#getRepos').click(function(){
    var user = $('#userName').val();
    currentRepos.getRepos(user);
  });
});
