let water = 0, calories = 0, steps = 0, sleep = 0, workout = 0, meditation = 0;

const maxValues = {
  water: 4,
  calories: 600,
  steps: 10000,
  sleep: 8,
  workout: 2,
  meditation: 30
};

function updateProgress(id, value, max) {
  let percent = Math.min((value / max) * 100, 100);
  $(`#${id}Progress`).css('width', percent + '%').text(Math.floor(percent) + '%');
}

$('#addWater').click(() => {
  water += 0.5;
  $('#water').text(water.toFixed(1) + ' L');
  updateProgress('water', water, maxValues.water);
});

$('#removeWater').click(() => {
  if (water >= 0.5) {
    water -= 0.5;
    $('#water').text(water.toFixed(1) + ' L');
    updateProgress('water', water, maxValues.water);
  }
});

$('#addCalories').click(() => {
  calories += 100;
  $('#calories').text(calories + ' kcal');
  updateProgress('calories', calories, maxValues.calories);
});

$('#removeCalories').click(() => {
  if (calories >= 100) {
    calories -= 100;
    $('#calories').text(calories + ' kcal');
    updateProgress('calories', calories, maxValues.calories);
  }
});

$('#addSteps').click(() => {
  steps += 500;
  $('#steps').text(steps + ' steps');
  updateProgress('steps', steps, maxValues.steps);
});

$('#removeSteps').click(() => {
  if (steps >= 500) {
    steps -= 500;
    $('#steps').text(steps + ' steps');
    updateProgress('steps', steps, maxValues.steps);
  }
});

$('#addSleep').click(() => {
  sleep += 1;
  $('#sleep').text(sleep + ' hrs');
  updateProgress('sleep', sleep, maxValues.sleep);
});

$('#removeSleep').click(() => {
  if (sleep >= 1) {
    sleep -= 1;
    $('#sleep').text(sleep + ' hrs');
    updateProgress('sleep', sleep, maxValues.sleep);
  }
});

$('#addWorkout').click(() => {
  workout += 1;
  $('#workout').text(workout + ' hrs');
  updateProgress('workout', workout, maxValues.workout);
});

$('#removeWorkout').click(() => {
  if (workout >= 1) {
    workout -= 1;
    $('#workout').text(workout + ' hrs');
    updateProgress('workout', workout, maxValues.workout);
  }
});

$('#addMeditation').click(() => {
  meditation += 5;
  $('#meditation').text(meditation + ' min');
  updateProgress('meditation', meditation, maxValues.meditation);
});

$('#removeMeditation').click(() => {
  if (meditation >= 5) {
    meditation -= 5;
    $('#meditation').text(meditation + ' min');
    updateProgress('meditation', meditation, maxValues.meditation);
  }
});
