$(document).ready(function() {
  $('#save-skill').click(function() {
    console.log('saving skill');

  });
  $('#delete-skill').click(function(){
    console.log('deleting skill');
  });

  $('#main-skill-select').click(function(){
    console.log('Adding skill')
  });

  $('#add-prereq-or').click(function(){
    console.log('Adding pre-req from skill');
  });

  $('#del-prereq-or').click(function(){
    console.log('Removing pre-req from skill');
  });
  $('#del-skill-prereq-and').click(function(){
    console.log('Removing skill from pre-req list');
  });
  $('#add-skill-prereq-and').click(function(){
    console.log('Adding skill to pre-req list');
  });
  $('#import-json').click(function(){
    console.log('Importing JSON into Crystallize.');
  });
  $('#export-json').click(function(){
    console.log('Exporting JSON from Crystallize');
  });


});
