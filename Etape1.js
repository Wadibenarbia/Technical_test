var openingHours = {
	monday: [
		{ begin: "10:00", end: "12:00" },
        { begin: "13:00", end: "18:00" },
	],
	tuesday: [
		{ begin: "10:00", end: "12:00" },
		{ begin: "13:00", end: "18:00" },
	],
	wednesday: [
		{ begin: "10:00", end: "12:00" },
		{ begin: "13:00", end: "18:00" },
	],
	thursday: [
		{ begin: "10:00", end: "12:00" },
		{ begin: "13:00", end: "18:00" },
	],
	friday: [],
	saturaday: [],
	sunday: [],
}

var daysSelected = {
	monday: true,
	tuesday: true,
	wednesday: true,
	thursday: true,
	friday: false,
	saturday: false,
	sunday: false,
}

var hoursToAdd = { begin: "9:00", end: "10:00" }
var daysSelected = {
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: false,
    saturday: false,
    sunday: true,
};
function insert_hour() {
    var hoursToAdd = { begin: "8:00", end: "9:00" };
    var daytrue =[];
    var i = 0;

    for (var bool in daysSelected) {
        if (daysSelected[bool]) {
            daytrue.push(bool);
        }
    }
    daytrue.forEach(function(element) {
        openingHours[element].push(hoursToAdd);
    });

    /* test de tri des données
    for (var day in openingHours) {
        while (i < (openingHours[day].length)) {
            console.log(i);
            if (openingHours[day][i].begin > hoursToAdd.begin) {
                openingHours[day].splice(i, 0, hoursToAdd);
                break;
            }
            i++;
        }

    }
    */
    for (var test in openingHours) {
        console.log(openingHours[test]);
    }
}
insert_hour();