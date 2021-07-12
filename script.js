var $table = $('#table');

var complted = [];

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
         },{
          field: 'winner',
           title: 'Winner'
         }],
         data: JSON.parse(outcome)
    });
     completed = JSON.parse(outcome);
    }
);
var overall = [];
var keys = [];
var points = [];
var valid = 1;
var k = 1;
var Name = [];
var Rounds = [];
var currRow = "";

while(valid < 10){
    
 var data = null
 var voting_url = "https://spreadsheets.google.com/feeds/cells/1notCppP0AXospf6d8bgxpZyjFw6ThDh1is-8rEjCxTQ/" + k + "/public/full?alt=json";
 k++;
 
 data= $.get( voting_url, "json", function(outcome) {
    var running = [];
     
    var colcount = 0;
    Feed = outcome.feed.entry;
      var gm = []
     for(var len = 0; len <= 35; len++){
            if(Feed[len].gs$cell.row != "1"){
               colcount = len;
                break;
               }
         gm.push(Feed[len].gs$cell.inputValue);
     }
    
     console.log(gm);
    for(var i = 0; i < (len+1)*6; i++){
        
            if(Feed[i] != null && Feed[i].gs$cell.row != "1"){
                
                if( Feed[i].gs$cell.inputValue == "noDataParse"){
                    return;
                }
                if(Feed[i].gs$cell.inputValue == "Team 2"){
                    break;
                }
                if(Feed[i].gs$cell.col == "2" && !(Name.includes(Feed[i].gs$cell.inputValue))){
                    Name.push(Feed[i].gs$cell.inputValue);
                    running.push({
                                game: Feed[i].gs$cell.col,
                                input: Feed[i].gs$cell.inputValue
                            });
                }else{
                    if(!((Feed[i].gs$cell.inputValue).includes("/"))){
                        
                            running.push({
                                game: Feed[i].gs$cell.col,
                                gid: gm[i-1],
                                input: Feed[i].gs$cell.inputValue
                            });
                    }

                }
                 
        }
    }

compile(Name,  running, k);
});
 
 valid++;
}



function compile(x,y,i){
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
    
    list.push({
       key: currName,
       id: "" ,
       value: count
    });
   
   Rounds.push({
        key: i,
        value: list
   });
}

setTimeout(function(value){
 
 var out = "";
 var te = 0;

    for(var p = 1; p < 10; p++){
        try{
        Object.entries(Rounds[p-1].value).forEach(([key, value]) => {

     calculate(value.key, value.value);

       var print = ""
        for(var l in value.value){
            if(Name.includes(String((value.value)[l].input))){
            print += "<br/><br/><b>" + String((value.value)[l].input) + "</b><br/>";
            }else{
                 print += (String((value.value)[l].input)) + ", "; 
            }


        }

            print += "<br /><br />";
            out += print;
    });

      $("#r" + p).html(out);
      out = "";
    }catch(err){
    }
}

},2000);


function calculate(player, tips){
    console.log(tips);
    
    for(var t in tips){
        if(tips[t].game == "2"){
            if(points[tips[t].input] == null){
                 points.push({
                     key: tips[t].input,
                     value: 0
                 });
                }
        }
        else{
           
        }
    }
    
}
