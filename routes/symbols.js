var arrayShuffle=require("array-shuffle");
var assert = require('assert');
var Model = require('../includes/module.js');
var callback_func = function(req,res,next){
  // symbols array
  var symbols_json = [
    {"symbol":"glyphicon glyphicon-cloud","name":"Cloud"},
    {"symbol":"glyphicon glyphicon-glass","name":"Glass"},
    {"symbol":"glyphicon glyphicon-music","name":"Music"},
    {"symbol":"glyphicon glyphicon-heart","name":"Heart"},
    {"symbol":"glyphicon glyphicon-star","name":"Star"},
    {"symbol":"glyphicon glyphicon-user","name":"Person"},
    {"symbol":"glyphicon glyphicon-film","name":"Film"},
    {"symbol":"glyphicon glyphicon-home","name":"Home"},
    {"symbol":"glyphicon glyphicon-road","name":"Road"},
    {"symbol":"glyphicon glyphicon-flag","name":"Flag"},
    {"symbol":"glyphicon glyphicon-book","name":"Book"},
    {"symbol":"glyphicon glyphicon-leaf","name":"Leaf"},
    {"symbol":"glyphicon glyphicon-plane","name":"Plane"},
    {"symbol":"glyphicon glyphicon-fire","name":"Fire"},
    {"symbol":"glyphicon glyphicon-bullhorn","name":"Horn"},
    {"symbol":"glyphicon glyphicon-phone","name":"Phone"},
    {"symbol":"glyphicon glyphicon-hourglass","name":"Sun Glass"}
  ];
  var ix=0;var output_image={};
  // duplicate symbols
  var symbols_json_all=symbols_json.concat(symbols_json,symbols_json,symbols_json,symbols_json,symbols_json);
  // suffle json array
  symbols_json_all = arrayShuffle(symbols_json_all);
  symbols_json=[];
  // make all 9 series to the same symbol
  for(var symbols_x in symbols_json_all){
    ix++;
    if(ix==9){
      output_image = symbols_json_all[symbols_x];
    }
    if(ix%9==0){
      symbols_json.push(output_image);
    }else{
      symbols_json.push(symbols_json_all[symbols_x]);
    }
  }
  res.render("symbols",{title_text:"Magic Paper",symbols_json:symbols_json})
}
module.exports=callback_func;
