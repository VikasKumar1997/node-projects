var john = {
  score: [89, 120, 103]
};

var mike = {
  score: [116, 94, 112]
};

var mary = {
  score: [97, 110, 125]
};

function average() {
  let total_score = 0;

  for (let value of this.score) {
    total_score = total_score + value;
  }
  return total_score / 3;
}

var john_team_score = average.call(john);

var mike_team_score = average.call(mike);

var mary_team_score = average.call(mary);

if (john_team_score > mike_team_score && john_team_score > mary_team_score) {
  console.log("Winner of game is john scored ", john_team_score);
} else if (
  mike_team_score > john_team_score &&
  mike_team_score > mary_team_score
) {
  console.log("Winner of game is mike scored ", mike_team_score);
} else if (
  mary_team_score > mike_team_score &&
  mary_team_score > john_team_score
) {
  console.log("Winner of game is mary scored ", mary_team_score);
} else if (
  mike_team_score == john_team_score &&
  john_team_score == mary_team_score
) {
  console.log("sorry this match gets Draw");
}
