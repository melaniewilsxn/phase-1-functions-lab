// Code your solution in this file!
function distanceFromHqInBlocks(n) {
    if (n>42) {
        return n-42;
    } else return 42-n;
}

function distanceFromHqInFeet(n) {
    return distanceFromHqInBlocks(n)*264;
}

function distanceTravelledInFeet(start, destination) {
    if (start>destination) {
        return (start-destination)*264;
    } else return ((destination-start)*264);
}

function calculatesFarePrice(start, destination) {
    if (start>destination) {
        if ((start-destination)*264<400){
            return 0;
        } else if ((start-destination)*264>400 && (start-destination)*264<2000) {
            return ((start-destination)*264-400)*0.02;
        } else if ((start-destination)*264>2000 && (start-destination)*264<2500) {
            return 25;
        } else return "cannot travel that far";
    } else if ((destination-start)*264<400) {
        return 0;
    } else if ((destination-start)*264>400 && (destination-start)*264<2000) {
        return ((destination-start)*264-400)*0.02;
    } else if ((destination-start)*264>2000 && (destination-start)*264<2500) {
        return 25;
    } else return "cannot travel that far";
}