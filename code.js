/*change string time into numbers*/
function parseTime(time) {
    strArr = time.split(':');
    return [parseInt(strArr[0]), parseInt(strArr[1])];
}

function calcDiff(strTime1, strTime2) {
    var time1 = parseTime(strTime1);
    var time2 = parseTime(strTime2);
    var minDiff, hoursDiff;
    if (time2[1] !== 0) {
        minDiff = 60 - time2[1];
        hoursDiff = 24 - (time2[0] + 1);
    } else {
        minDiff = 0;
        hoursDiff = 24 - time2[0];
    }

    minDiff += time1[1];
    hoursDiff += time1[0];

    if (minDiff >= 60) {
        minDiff -= 60;
        hoursDiff++;
    }

    return hoursDiff + ':' + minDiff;
}

function halfTime(strTime) {
    time = parseTime(strTime);

    time[1] = Math.floor(time[1] / 2);

    if (time[0] % 2 !== 0) {
        time[1] += 30;
    }

    time[0] = Math.floor(time[0] / 2);

    return time[0] + ':' + time[1];
}

function addTime(strTime1, strTime2) {
    var time1 = parseTime(strTime1);
    var time2 = parseTime(strTime2);
    var min = time1[1] + time2[1];
    var hours = time1[0] + time2[0];
    if (min >= 60) {
        min -= 60;
        hours++;
    }
    if (min < 10) {
        return hours + ':0' + min;
    } else {
        return hours + ':' + min;
    }
}

function calcMidNight(maghrib, fajr) {
    var midNight = addTime(maghrib, halfTime(calcDiff(fajr, maghrib)));
    return midNight;
}

/* adding the mid-night time to each row in the table */
var prayerArr = document.getElementsByClassName('ptrow');
for (var i = 0; i < prayerArr.length; i++) {
    var row = prayerArr[i];
    var fajr = prayerArr[i].children[1].innerText;
    var maghrib = prayerArr[i].children[5].innerText;
    var midNight = calcMidNight(maghrib, fajr);

    var td = document.createElement('td');
    td.className = 'wUml3 fU9nkc';
    var myDiv = document.createElement('div');
    myDiv.innerText = midNight;
    myDiv.className = 'M5Qt2d';
    td.appendChild(myDiv);
    row.appendChild(td);
}

/* adding 'Mid-Night to the heading of the table' */
for (var i = 0; i < document.querySelectorAll('table.bvYrdf').length; i++) {
    var headTdSmall = document.createElement('td');
    headTdSmall.className = 'GrGc6 dp1XAc';
    var headDiv = document.createElement('div');
    headDiv.className = 'M5Qt2d';
    headDiv.innerText = 'Mid-Night';
    headTdSmall.appendChild(headDiv);
    document.querySelectorAll('table.bvYrdf')[i].firstElementChild.firstElementChild.appendChild(headTdSmall);
}
function changeSize() {
    /* adjusting width of the table */
    document.getElementsByClassName('kp-blk fm06If Wnoohf OJXvsb')[0].style.width = '730px';
}
changeSize();