$(document).ready(() => {
  const prereqs = [];
  let currentPrereq = null;

  function updateCurrentPrereqs() {
    // stuff
    // 1.  This function should update current selection in Choose Existing prereq
    // based on the value of the prereqs[currentPrereq]
    // Cases:
    // if list is empty; set value to "(no skills selected)"
    // if list has items; set value to prereqs[currentPrereq]
    // e.g. if prereqs[currentPrereq] = ['1', '2', '3']; then list will be
    // 1, 2, 3 in dropdown.
    if (prereqs[currentPrereq].length === 0) {
      $('#skill-prereq option:selected').text('(no skill selected)');
    } else {
      $('#skill-prereq option:selected').text(prereqs[currentPrereq].join(', '));
    }
  }

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

  $('#skill-choice').change(() => {
    const skillChoice = $('#skill-choice').val();

    if (!skillChoice) {
      return;
    }

    $('#prereq-skill-list').append(`<option>${skillChoice}</option>`);
    // it is not over 9000 for a reason
    // This is a simple way to have auto scrolldown by having a BIG number of pixels
    // as this changes the size of the text area, and forces the scroll button
    // to be at the bottom of a text area.
    $('#prereq-skill-list').scrollTop(9000);

    $('#skill-choice option:selected').attr('disabled', 'disabled');
    $('#skill-choice').val('');
    prereqs[currentPrereq].push(skillChoice);
    updateCurrentPrereqs();
  });

  $('#add-prereq-or').click((event) => {
    $('#prereq-skill-list').prop('disabled', false);
    $('#del-skill-from-prereq-skill-list').prop('disabled', false);
    $('#skill-choice').prop('disabled', false);
    currentPrereq = prereqs.push([]) - 1;
    $('#skill-prereq').append('<option></option>');
    updateCurrentPrereqs();
    event.preventDefault();
  });

  $('#del-prereq-or').click((event) => {
    console.log('Removing pre-req from skill');
    event.preventDefault();
  });

  $('#del-skill-from-prereq-skill-list').click((event) => {
    const selectedSkillChoice = $('#prereq-skill-list option:selected').val();
    $('#prereq-skill-list option:selected').remove();
    $(`#skill-choice option:contains('${selectedSkillChoice}')`).removeAttr('disabled');
    const index = prereqs[currentPrereq].indexOf(selectedSkillChoice);
    if (index !== -1) {
      prereqs[currentPrereq].splice(index, 1);
    }
    updateCurrentPrereqs();
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
