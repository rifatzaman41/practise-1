var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

function findLongestName(names) {
    var longestName = names[0];
    for (var i = 1; i < names.length; i++) {
        if (names[i].length > longestName.length) {
            longestName = names[i];
        }
    }
    return longestName;
}

var longestFriendName = findLongestName(friends);
console.log("The friend with the longest name is: " + longestFriendName);
