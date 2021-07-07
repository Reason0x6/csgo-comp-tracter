 var $table = $('#table')

 

$.get(
    "https://gist.githubusercontent.com/Reason0x6/8cda7cdce846941a4d9956606ad255e2/raw/3d5f3573e6408d018c33dde7b8d0705158a912fe/IEM_DAT",
    
    function(db) {
       $table.bootstrapTable({
         columns: [{
           field: 'id',
           title: 'Game'
         },
           {
           field: 'team1',
           title: 'Team 1'
         }, {
           field: 'team2',
           title: 'Team 2'
         }],
         data: [JSON.parse(db)]
    });
    }
);
