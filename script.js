/**
 * Created by vicman on 2/23/16.
 */
'use strict';

var ENUM_OPT = {
    1 : 'Piedra',
    2 : 'Papel',
    3 : 'Tijera'
};

var results = {
    win : 0,
    lost : 0,
    tie : 0
};

var takeAction = function(userOption){
    var pcOption = getPcOption();

    if (userOption === 'Piedra'){
        if(pcOption === 'Tijera'){
            results.win++;
        }
        else if(pcOption === 'Papel'){
            results.lost++;
        }
        else{
            results.tie++;
        }
    }
    else if (userOption === 'Papel'){
        if(pcOption === 'Tijera'){
            results.lost++;
        }
        else if(pcOption === 'Piedra'){
            results.win++;
        }
        else{
            results.tie++;
        }
    }
    else if (userOption === 'Tijera'){
        if(pcOption === 'Piedra'){
            results.lost++;
        }
        else if(pcOption === 'Papel'){
            results.win++;
        }
        else{
            results.tie++;
        }
    }

    document.getElementById('win').innerHTML = results.win;
    document.getElementById('lost').innerHTML = results.lost;
    document.getElementById('tie').innerHTML = results.tie;
};


var getPcOption = function(){
    var random = Math.random() * 3;
    var optNum = Math.ceil(random);

    return ENUM_OPT[optNum];
};