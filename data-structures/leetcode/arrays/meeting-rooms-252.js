var canAttendMeetings = function (intervals) {
  if (intervals.length === 0) return true;
  intervals.sort((a, b) => a[0] - b[0]);
  let end = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < end) return false;
    start = intervals[i][0];
    end = intervals[i][1];
  }
  return true;
};

console.log(
  canAttendMeetings([
    [7, 10],
    [2, 4],
  ])
);
console.log(
  canAttendMeetings([
    [0, 30],
    [5, 10],
    [15, 20],
  ])
);
