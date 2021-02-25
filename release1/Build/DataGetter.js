var data =  [];

function getDataFromUnity(json) {
    data = JSON.parse(json);
}

function copy(e) {    
    var sigle = ["AL", "PE", "IN", "LV", "LF", "DIPA", "LABI", "LUBI", "DIMA", "LABS", "LUBS", "LAGI", "LUGI", "LAGS", "PG", "DIPI", "DISE", "DSE", "AS", "ACC", "CC", "CP"];
    var ind = [
                [8, 6],
                [76, 75],
                [4, -1],
                [13, 14],
                [79, 80],
                [85, 84],
                [25, 26],
                [23, 24],
                [81, 82],
                [37, 38],
                [35, 36],
                [29, 30],
                [31, 32],
                [41, 42],
                [43, 44],
                [19, 20],
                [7, 5],
                [0, 1],
                [77, 78],
              ];

    if (e.ctrlKey && e.key === 'c') {
        if(data != "") {
            var text = "";

            for(var j=0; j<3; j++) {
                switch(j) {
                    case 0:
                        text += "--Come ti vedi--";
                        break;

                    case 1:
                        text += "--Come ti vedono gli altri--";
                        break;

                    case 2:
                        text += "--Come vorresti essere--";
                        break;
                }

                text += "\n";

                for(var i=0; i<19; i++) {
                    text += sigle[i] + ": " + getReal(data[j][ind[i][0]], data[j][ind[i][1]]) + "\n";
                }
    
                text += sigle[19] + ": " + data[j][86] + "\n";
                text += sigle[20] + ": " + data[j][87] + "\n";
                text += sigle[21] + ": " + data[j][88] + "\n";

                text += "\n";
            }

            navigator.clipboard.writeText(text).then(function() {
                console.log('Async: Copying to clipboard was successful!');
            }, function(err) {
                console.error('Async: Could not copy text: ', err);
            });
        }
    }
}

function getReal(mag, min) {
    if(min > 0 && mag == 0) {
        return "-" + min;
    } else {
        return mag;
    }
}

document.addEventListener('keyup', copy, false);