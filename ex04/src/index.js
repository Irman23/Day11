var monitorsListArray = ["Apple", "Peach", "Berry"];

function myMonitorsFunction(arr) {
    var newMonitorsList = [...arr];
    var list = [];
    var monitorsList = [];

    for(let i = 0; i< newMonitorsList.length; i++){
        list.push(newMonitorsList[i], i + 1);
        monitorsList.push(list);
        list = [];
    }
    return monitorsList;
}
console.log(myMonitorsFunction(monitorsListArray));
module.exports = myMonitorsFunction;