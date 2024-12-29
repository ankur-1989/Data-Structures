/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  const people = [];
  for (let i = 0; i < names.length; i++) {
    people[i] = { name: names[i], height: heights[i] };
  }
  people.sort((a, b) => b.height - a.height);
  return people.map((p) => p.name);
};
