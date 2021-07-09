 var $table = $('#table');

$.get(
    "https://gist.githubusercontent.com/Reason0x6/8cda7cdce846941a4d9956606ad255e2/raw",
    
    function(db) {
       $table.bootstrapTable({
         columns: [{
           field: 'start_time',
           title: 'Start'
         },
           {
           field: 'team1',
           title: 'Team 1'
         }, {
           field: 'score',
           title: ''
         }, {
           field: 'team2',
           title: 'Team 2'
         }, {
           field: 'id',
           title: 'Game ID'
         }],
         data: JSON.parse(db)
    });
    }
);

 var $tables = $('#results');

$.get(
    "https://gist.githubusercontent.com/Reason0x6/2ef9ade8af06347df6cb7dc8c2708b90/raw",
    
    function(outcome) {
       $tables.bootstrapTable({
         columns: [{
           field: 'start_time',
           title: 'Start'
         },
           {
           field: 'team1',
           title: 'Team 1'
         },
           {
          field: 'score',
          title: 'Score'
         }, {
           field: 'team2',
           title: 'Team 2'
         }, {
           field: 'id',
           title: 'Game ID'
         }],
         data: JSON.parse(outcome)
    });
   
    }
);
var valid = 1;
var i = 1;
var Name = [];
var Rounds = [];
var currRow = "";
while(valid < 10){
 var data = null
 var voting_url = "https://spreadsheets.google.com/feeds/cells/1notCppP0AXospf6d8bgxpZyjFw6ThDh1is-8rEjCxTQ/" + i + "/public/full?alt=json";
 i++;
 
 data= $.get( voting_url, "json", function(outcome) {
    var running = [];
    Feed = outcome.feed.entry;
    for(var i = 0; i < 100; i++){
        
        if(Feed[i] != null && (Feed[i].gs$cell.row != "1")){
            if( Feed[i].gs$cell.inputValue == "noDataParse"){
                return;
            }
            if(Feed[i].gs$cell.inputValue == "Team 2"){
                break;
            }
            if(Feed[i].gs$cell.col == "2" && !(Name.includes(Feed[i].gs$cell.inputValue))){
                Name.push(Feed[i].gs$cell.inputValue);
                running.push(Feed[i].gs$cell.inputValue);
            }else{
                if(!((Feed[i].gs$cell.inputValue).includes("/"))){
                        running.push(Feed[i].gs$cell.inputValue);
                }
                
            }
        }
        
    }
compile(Name,  running);
});
 
 valid++;
}



function compile(x,y){
    var currName = "";
    var list = [];
    var count = [];
    var a = 0;
    var z = [];
    z = x;
    var w = [];
    w = y;


    w.forEach(function(value){
       if(z.includes(value)){
            if(a != 0){

              list.push({
               key: currName,
               value: count});
            }
            count = [];
            currName = value;
            a++;
            
        }
        else{
            count.push(value);
        }
    });
   Rounds.push({
        key: "Bruh IDK",
        value: list
   });
}

setTimeout(console.log(Rounds),40);
