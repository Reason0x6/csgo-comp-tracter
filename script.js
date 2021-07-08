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
var valid = true;
var i = 1;
while(valid){
 var data = null
 var voting_url = "https://spreadsheets.google.com/feeds/cells/1notCppP0AXospf6d8bgxpZyjFw6ThDh1is-8rEjCxTQ/" + i + "/public/full?alt=json";
 i++;
 
 $.get(
    voting_url,
    
    function(outcome) {
       data = JSON.parse(outcome);
       console.log(outcome);
    }
);
 valid = false;
}

