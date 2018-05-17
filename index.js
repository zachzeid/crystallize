$(document).ready(() => {
  $('#skill-details').validate();
  // [
  //   {
  //     "group": "Fucks",
  //     "name": "Two-Handed Fucks",
  //     "is_viewable": true,
  //     "skill_hand": "str",
  //     "skill_health": 4,
  //     "skill_level": 0,
  //     "warrior_cost": 1,
  //     "rogue_cost": 2,
  //     "mage_cost": 3,
  //     "cleric_cost": 4,
  //     "prereqs": [
  //       ["skill 1", "skill 2"],
  //       ["skill 1", "skill 56"],
  //       ["skill 43", "skill fuck this noise"]
  //     ]
  //   }
  // ]
  $('#save-skill').click((event) => {
    if (!$('#skill-details').valid()) {
      alert('Yo fukd!');
      return;
    }
    $('#skill-details').validate();
    event.preventDefault();
    const skillName = $('#skill-name').val();
    const skillGroup = $('#skill-group').val();
    const isViewable = $('#is-viewable').prop('checked');
    const skillHand = $('#skill-hand').val();
    const skillHealth = parseInt($('#skill-health').val(), 10);
    const skillLevel = parseInt($('#max-skill-level').val(), 10);
    const warriorCost = parseInt($('#warrior-skill-cost').val(), 10);
    const rogueCost = parseInt($('#rogue-skill-cost').val(), 10);
    const mageCost = parseInt($('#mage-skill-cost').val(), 10);
    const clericCost = parseInt($('#cleric-skill-cost').val(), 10);
    const prereqs = [];
    const skill = {
      skillName,
      skillGroup,
      isViewable,
      skillHand,
      skillHealth,
      skillLevel,
      warriorCost,
      rogueCost,
      mageCost,
      clericCost,
      prereqs,
    };
    console.log(skill);
  });
  $('#delete-skill').click((event) => {
    console.log('deleting skill');
    event.preventDefault();
  });

  $('#add-skill-select-main').click((event) => {
    console.log('Adding skill to main skill list');
    event.preventDefault();
  });
  $('#del-skill-select-main').click((event) => {
    console.log('Removing skill from main skill list');
    event.preventDefault();
  });

  $('#add-prereq-or').click((event) => {
    console.log('Adding pre-req from skill');
    event.preventDefault();
  });

  $('#del-prereq-or').click((event) => {
    console.log('Removing pre-req from skill');
    event.preventDefault();
  });
  $('#del-skill-from-prereq-skill-list').click((event) => {
    console.log('Removing skill from pre-req list');
    event.preventDefault();
  });
  $('#add-skill-prereq-and').click((event) => {
    console.log('Add skill to pre-req list');
    event.preventDefault();
  });
  $('#import-json').click((event) => {
    console.log('Importing JSON into Crystallize.');
    event.preventDefault();
  });
  $('#export-json').click((event) => {
    console.log('Exporting JSON from Crystallize');
    event.preventDefault();
  });
});
