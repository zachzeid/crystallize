$(document).ready(function () {
  $('#save-skill').click(function (event) {
    console.log('saving skill');
    event.preventDefault();
  });
  $('#delete-skill').click(function (event) {
    console.log('deleting skill');
    event.preventDefault();
  });

  $('#main-skill-select').click(function (event) {
    console.log('Adding skill')
    event.preventDefault();
  });

  $('#add-prereq-or').click(function (event) {
    console.log('Adding pre-req from skill');
    event.preventDefault();
  });

  $('#del-prereq-or').click(function (event) {
    console.log('Removing pre-req from skill');
    event.preventDefault();
  });
  $('#del-skill-prereq-and').click(function (event) {
    console.log('Removing skill from pre-req list');
    event.preventDefault();
  });
  $('#add-skill-prereq-and').click(function (event) {
    console.log('Adding skill to pre-req list');
    event.preventDefault();
  });
  $('#import-json').click(function (event) {
    console.log('Importing JSON into Crystallize.');
    event.preventDefault();
  });
  $('#export-json').click(function (event) {
    console.log('Exporting JSON from Crystallize');
    event.preventDefault();
  });


});
