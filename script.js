 var $table = $('#table');

 

$.get(
    "https://gist.githubusercontent.com/Reason0x6/8cda7cdce846941a4d9956606ad255e2/raw",
    
    function(db) {
       $table.bootstrapTable({
         columns: [{
           field: 'title',
           title: 'Match'
         },
           {
           field: 'team1',
           title: 'Team 1'
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
           field: 'title',
           title: 'Match'
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


