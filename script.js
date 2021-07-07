 var $table = $('#table')

 

$.get(
    "https://gist.githubusercontent.com/Reason0x6/8cda7cdce846941a4d9956606ad255e2/raw/46762ca4ea607a6a43ae7ccd95edf3ff16004d09/IEM_DAT",
    {paramOne : 1, paramX : 'abc'},
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
         data: [db]
    }
);
