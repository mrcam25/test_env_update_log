function forwardToTable() {

    var stringDB = document.getElementById("DB").value;
    var stringDB_purpose = document.getElementById("DB-purpose").value ;
    var stringDB_owner = document.getElementById("DB-owner").value ;
    var stringIoU = document.getElementById("IoU").value;
    var stringChanges = document.getElementById("userChanges").value;
    var stringDate = document.getElementById("date").value;
    var stringTime = document.getElementById("time").value;

    if (stringDB &&
        stringDB_purpose &&
        stringDB_owner &&
        stringIoU &&
        stringChanges &&
        stringDate &&
        stringTime) {
            
            
            if (stringDB === "Apprentice Test DB") {

                var row = 1;
                
                var display1 = document.getElementById("a_table");

                var newRow = display1.insertRow(row);

                var cell1 = newRow.insertCell(0);
                var cell2 = newRow.insertCell(1);
                var cell3 = newRow.insertCell(2);
                var cell4 = newRow.insertCell(3);
                var cell5 = newRow.insertCell(4);
                var cell6 = newRow.insertCell(5);
                var cell7 = newRow.insertCell(6);

                cell1.innerHTML = stringDB;
                cell2.innerHTML = stringDB_purpose;
                cell3.innerHTML = stringDB_owner;
                cell4.innerHTML = stringIoU;
                cell5.innerHTML = stringChanges;
                cell6.innerHTML = stringDate;
                cell7.innerHTML = stringTime;

                var call1x = cell1.innerHTML;
                var call2x = cell2.innerHTML;
                var call3x = cell3.innerHTML;
                var call4x = cell4.innerHTML;
                var call5x = cell5.innerHTML;
                var call6x = cell6.innerHTML;
                var call7x = cell7.innerHTML;

                row++;

                return;
            
            }

            else if (stringDB === "Live Test DB01") {

                var row = 1;

                var display2 = document.getElementById("table01");

                var newRow = display2.insertRow(row);

                var cell1 = newRow.insertCell(0);
                var cell2 = newRow.insertCell(1);
                var cell3 = newRow.insertCell(2);
                var cell4 = newRow.insertCell(3);
                var cell5 = newRow.insertCell(4);
                var cell6 = newRow.insertCell(5);
                var cell7 = newRow.insertCell(6);

                cell1.innerHTML = stringDB;
                cell2.innerHTML = stringDB_purpose;
                cell3.innerHTML = stringDB_owner;
                cell4.innerHTML = stringIoU;
                cell5.innerHTML = stringChanges;
                cell6.innerHTML = stringDate;
                cell7.innerHTML = stringTime;

                row++;
                return;

            }

            else if (stringDB === "Live Test DB02"){

                var row = 1;

                var display3 = document.getElementById("table02");

                var newRow = display3.insertRow(row);

                var cell1 = newRow.insertCell(0);
                var cell2 = newRow.insertCell(1);
                var cell3 = newRow.insertCell(2);
                var cell4 = newRow.insertCell(3);
                var cell5 = newRow.insertCell(4);
                var cell6 = newRow.insertCell(5);
                var cell7 = newRow.insertCell(6);

                cell1.innerHTML = stringDB;
                cell2.innerHTML = stringDB_purpose;
                cell3.innerHTML = stringDB_owner;
                cell4.innerHTML = stringIoU;
                cell5.innerHTML = stringChanges;
                cell6.innerHTML = stringDate;
                cell7.innerHTML = stringTime;

                row++;
                return;

            }} 

    
} ;

function focusAfterClick() {
    document.getElementById("DB").focus();
}