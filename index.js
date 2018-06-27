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
      $('#choose-existing-prereq option:selected').text('(no skill selected)');
    } else {
      $('#schoose-existing-prereq option:selected').text(prereqs[currentPrereq].join(', '));
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

  $('#add-new-skill').click((event) => {
    console.log('Adding skill to main skill list');
    event.preventDefault();
  });

  $('#delete-selected-skill').click((event) => {
    console.log('Removing skill from main skill list');
    event.preventDefault();
  });

  $('#add-prereq-skill').change(() => {
    const skillChoice = $('#add-prereq-skill').val();

    if (!skillChoice) {
      return;
    }

    $('#prereq-skills').append(`<option>${skillChoice}</option>`);
    // it is not over 9000 for a reason
    // This is a simple way to have auto scrolldown by having a BIG number of pixels
    // as this changes the size of the text area, and forces the scroll button
    // to be at the bottom of a text area.
    $('#prereq-skills').scrollTop(9000);

    $('#add-prereq-skill option:selected').attr('disabled', 'disabled');
    $('#add-prereq-skill').val('');
    prereqs[currentPrereq].push(skillChoice);
    updateCurrentPrereqs();
  });

  $('#add-new-prereq').click((event) => {
    // This happens when "Add New Prereq" is FIRST selected, otherwise
    // it's mostly moot after that.
    $('#prereq-skills').prop('disabled', false);
    $('#delete-selected-prereq-skill').prop('disabled', false);
    $('#add-prereq-skill').prop('disabled', false);
    if (currentPrereq !== null && prereqs[currentPrereq].length === 0) {
      alert('select a skill fool');
    } else {
      currentPrereq = prereqs.push([]) - 1;
      $('#choose-existing-prereq').append('<option></option>');

      $('#prereq-skills option').remove();
      $('#add-prereq-skill option').removeAttr('disabled');
      updateCurrentPrereqs();
    }
    event.preventDefault();
  });

  $('#delete-selected-prereq-skill').click((event) => {
    const selectedSkillChoice = $('#prereq-skills option:selected').val();
    $('#prereq-skills option:selected').remove();
    $(`#add-prereq-skill option:contains('${selectedSkillChoice}')`).removeAttr('disabled');
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
