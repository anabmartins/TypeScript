// Just numbers
var boat;
(function (boat) {
    boat[boat["engine"] = 2] = "engine";
    boat[boat["bow"] = 3] = "bow";
    boat[boat["stern"] = 4] = "stern";
})(boat || (boat = {}));
var numberOfEngine = boat.engine;
console.log(numberOfEngine);
