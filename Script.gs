function doGet() {
  
 return HtmlService.createHtmlOutputFromFile('index');
  
}

function myFunction(user,pass,type) {
  var sheet = SpreadsheetApp.getActiveSheet();
  if (type == 4){
    var info = sheet.getDataRange().getValues();
    for (var z = 0; z < info.length; z++){
      if (info[z][0] == user && info[z][1] == pass){
       return 1;
        var stop = "yes";
      }     
    }
    if (stop != "yes"){ 
      return 0;
    }
  }
  else{
   sheet.appendRow([user,pass]);
  }
}




 






