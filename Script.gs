function doGet() {
  
 return HtmlService.createHtmlOutputFromFile('index');
  
}




function myFunction(user,pass,type) {
  // if sign in check is called for
  var app = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = app.getSheetByName("Sheet1");
  var info = sheet.getDataRange().getValues();
  var activePlayer;
  
  
  if (type == 4){
    for (var z = 0; z < info.length; z++){
      if (info[z][0] == user && info[z][1] == pass){
       return info[z][0];
        activePlayer = z;
        var stop = "yes";
      }     
    }
    if (stop != "yes"){ 
      return 0;
    }
  }
  
  
  // if sign in function is called
  if (type == 0){
   sheet.appendRow([user,pass]);
  }
  
  
  // if find match function is called
  if (type == 6){
    var correctValues = [];
    var arrayLoop = 0;
    
    for (var w = 0; w < info.length; w++){
      if (info[w][0] == user){
        activePlayer = w;
      }     
    }
    
    if (info[activePlayer][2] != "inGame"){
    
    var stringActivePlayer = (activePlayer + 1).toString();
    sheet.getRange("C" + stringActivePlayer).setValue("searching");
    for (var y = 0;y < info.length; y++){
      if (info[y][2] == "searching" && info[y][0] != info[activePlayer][0]){
        correctValues[arrayLoop] = y;
        arrayLoop = arrayLoop + 1;
      }
    }
    if (correctValues.length > 1){
    var pone = correctValues[0];
    var ptwo = correctValues[1];
    
    var stringPone = (pone + 1).toString();
    var stringPtwo = (ptwo + 1).toString();
    sheet.getRange("C" + stringPone).setValue("inGame");
    sheet.getRange("D" + stringPone).setValue(info[activePlayer][0]);
    sheet.getRange("E" + stringPone).setValue(info[ptwo][0]);
    
    sheet.getRange("C" + stringPtwo).setValue("inGame");
    sheet.getRange("D" + stringPtwo).setValue(info[activePlayer][0]);
    sheet.getRange("E" + stringPtwo).setValue(info[pone][0]);
    
    sheet.getRange("C" + stringActivePlayer).setValue("inGame");
    sheet.getRange("D" + stringActivePlayer).setValue(info[pone][0]);
    sheet.getRange("E" + stringActivePlayer).setValue(info[ptwo][0]);
      
      
      if (info[activePlayer][5] == ""){
        var sheetName = "game " + Math.floor(Math.random() * Math.floor(200));
        sheet.getRange("F" + stringActivePlayer).setValue(sheetName);
        sheet.getRange("F" + stringPone).setValue(sheetName);
        sheet.getRange("F" + stringPtwo).setValue(sheetName);
        if (app.getSheetByName(sheetName) == null){
         var gameSheet = app.insertSheet(sheetName); 
         gameSheet.appendRow(['RedCubeOne','700px','20px']);
         gameSheet.appendRow(['RedCubeTwo','700px','40px']);
         gameSheet.appendRow(['RedCubeThree','700px','60px']);
        }
      }
    
    return [info[pone][0],info[ptwo][0]];
    }
    else{
      return "not enough players";
    }
  }
    else {
      return [info[activePlayer][3],info[activePlayer][4]];
      if (info[activePlayer][5] == ""){
        var sheetName = "game " + Math.floor(Math.random() * Math.floor(200));
        sheet.getRange("F" + stringActivePlayer).setValue(sheetName);
        sheet.getRange("F" + stringPone).setValue(sheetName);
        sheet.getRange("F" + stringPtwo).setValue(sheetName);
        if (app.getSheetByName(sheetName) == null){
         var gameSheet = app.insertSheet(sheetName); 
          gameSheet.appendRow(['gameObject','propertyA','propertyB'])
          gameSheet.appendRow(['RedCubeOne','50px','60px']);
          gameSheet.appendRow(['RedCubeTwo','50px','60px']);
          gameSheet.appendRow(['RedCubeThree','50px','60px'])
          gameSheet.appendRow(['RedCubeFour','50px','60px']);
          gameSheet.appendRow(['RedCubeFive','50px','60px']);
          gameSheet.appendRow(['RedCubeSix','50px','60px']);
          gameSheet.appendRow(['BlueCubeOne','50px','60px']);
          gameSheet.appendRow(['BlueCubeTwo','50px','60px']);
          gameSheet.appendRow(['BlueCubeThree','50px','60px']);
          gameSheet.appendRow(['BlueCubeFour','50px','60px']);
          gameSheet.appendRow(['BlueCubeFive','50px','60px']);
          gameSheet.appendRow(['BlueCubeSix','50px','60px']);
          gameSheet.appendRow(['BlackCubeOne','50px','60px']);
          gameSheet.appendRow(['BlackCubeTwo','50px','60px']);
          gameSheet.appendRow(['BlackCubeThree','50px','60px']);
          gameSheet.appendRow(['BlackCubeFour','50px','60px']);
          gameSheet.appendRow(['BlackCubeFive','50px','60px']);
          gameSheet.appendRow(['BlackCubeSix','50px','60px']);
          gameSheet.appendRow(['GreenCubeOne','50px','60px']);
          gameSheet.appendRow(['GreenCubeTwo','50px','60px']);
          gameSheet.appendRow(['GreenCubeThree','50px','60px']);
          gameSheet.appendRow(['GreenCubeFour','50px','60px']);
          gameSheet.appendRow(['GreenCubeFive','50px','60px']);
          gameSheet.appendRow(['GreenCubeSix','50px','60px']);
        }
      }
    }
  }
  
  
  
  
  //initialize game state
  if (type == 7){
  for (var hello = 0; hello < info.length; hello++){
      if (info[hello][0] == user){
        var update = hello;
      }     
    }
  var stringUpdate = (update + 1).toString();
  sheet.getRange("C" + stringUpdate).setValue("lobby");
  sheet.getRange("D" + stringUpdate).setValue("");
  sheet.getRange("E" + stringUpdate).setValue("");
    if (info[update][5] != ""){
     sheet.getRange("F" + stringUpdate).setValue(""); 
      
      
    }
  }
  
  // set up InGame 
  if (type == 8){
  for (var newUsr = 0; newUsr < info.length; newUsr++){
      if (info[newUsr][0] == user){
        var e = newUsr;
      }     
    }
  stringUpdate = (e + 1).toString();
  sheet.getRange("C" + stringUpdate).setValue("inGame");
  }
  
  
  
  
  if (type == 9){
  
   var random =  Math.floor(Math.random * Math.floor(3));
    if (random == 0){
      gameSheet.getDataRange("B25").setValue(info[pone][0]);
    }
    if (random == 1){
      gameSheet.getDataRange("B25").setValue(info[ptwo][0]); 
    }
    else{
     gameSheet.getDataRange("B25").setValue(info[activePlayer][0]);
    }
    var turn  = gameSheet.getDataRange("B25").getValue();
    return turn;
    
    
  }
  
  
  

}
