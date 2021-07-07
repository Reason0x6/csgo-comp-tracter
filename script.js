 var $table = $('.table')

 

$.get(
    "https://gist.githubusercontent.com/Reason0x6/8cda7cdce846941a4d9956606ad255e2/raw/cb973ee1d0d6c53c4295c64aae628fee46450c01/IEM_DAT",
    
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
         data: JSON.parse(db)
    });
    }
);


/*
 var $table = $('.table')

 


  
                x = '[{"team1": "Evil Geniuses", "team2": "ViCi Gaming", "start_time": "July 7, 2021 - 11:30 UTC", "tournament": "IEM Cologne 2021", "id": "Evil Geniuses vs ViCi Gaming at July 7, 2021 - 11:30 UTC"},{"team1": "Team One", "team2": "Sprout", "start_time": "July 7, 2021 - 11:30 UTC", "tournament": "IEM Cologne 2021", "id": "Team One vs Sprout at July 7, 2021 - 11:30 UTC"},{"team1": "Complexity Gaming", "team2": "Team LDLC", "start_time": "July 7, 2021 - 14:45 UTC", "tournament": "IEM Cologne 2021", "id": "Complexity Gaming vs Team LDLC at July 7, 2021 - 14:45 UTC"},{"team1": "OG", "team2": "Renegades", "start_time": "July 7, 2021 - 14:45 UTC", "tournament": "IEM Cologne 2021", "id": "OG vs Renegades at July 7, 2021 - 14:45 UTC"},{"team1": "Ninjas in Pyjamas", "team2": "Team Liquid", "start_time": "July 8, 2021 - 11:30 UTC", "tournament": "IEM Cologne 2021", "id": "Ninjas in Pyjamas vs Team Liquid at July 8, 2021 - 11:30 UTC"},{"team1": "Virtus.pro", "team2": "BIG", "start_time": "July 8, 2021 - 14:45 UTC", "tournament": "IEM Cologne 2021", "id": "Virtus.pro vs BIG at July 8, 2021 - 14:45 UTC"},{"team1": "Team Vitality", "team2": "FURIA Esports", "start_time": "July 8, 2021 - 18:00 UTC", "tournament": "IEM Cologne 2021", "id": "Team Vitality vs FURIA Esports at July 8, 2021 - 18:00 UTC"},{"team1": "Astralis", "team2": "FaZe Clan", "start_time": "July 9, 2021 - 11:30 UTC", "tournament": "IEM Cologne 2021", "id": "Astralis vs FaZe Clan at July 9, 2021 - 11:30 UTC"},{"team1": "OG", "team2": "BIG", "start_time": "July 6, 2021 - 21:10 CEST", "tournament": "IEM Cologne 2021", "id": "OG vs BIG at July 6, 2021 - 21:10 CEST"},{"team1": "MIBR", "team2": "Renegades", "start_time": "July 6, 2021 - 20:25 CEST", "tournament": "IEM Cologne 2021", "id": "MIBR vs Renegades at July 6, 2021 - 20:25 CEST"},{"team1": "FaZe Clan", "team2": "Complexity Gaming", "start_time": "July 6, 2021 - 19:50 CEST", "tournament": "IEM Cologne 2021", "id": "FaZe Clan vs Complexity Gaming at July 6, 2021 - 19:50 CEST"},{"team1": "Team LDLC", "team2": "Bad News Bears", "start_time": "July 6, 2021 - 17:15 CEST", "tournament": "IEM Cologne 2021", "id": "Team LDLC vs Bad News Bears at July 6, 2021 - 17:15 CEST"},{"team1": "Team Spirit", "team2": "Team Vitality", "start_time": "July 6, 2021 - 17:05 CEST", "tournament": "IEM Cologne 2021", "id": "Team Spirit vs Team Vitality at July 6, 2021 - 17:05 CEST"},{"team1": "Ninjas in Pyjamas", "team2": "Mousesports", "start_time": "July 6, 2021 - 16:55 CEST", "tournament": "IEM Cologne 2021", "id": "Ninjas in Pyjamas vs Mousesports at July 6, 2021 - 16:55 CEST"},{"team1": "Evil Geniuses", "team2": "FaZe Clan", "start_time": "July 6, 2021 - 15:35 CEST", "tournament": "IEM Cologne 2021", "id": "Evil Geniuses vs FaZe Clan at July 6, 2021 - 15:35 CEST"},{"team1": "Complexity Gaming", "team2": "ViCi Gaming", "start_time": "July 6, 2021 - 15:20 CEST", "tournament": "IEM Cologne 2021", "id": "Complexity Gaming vs ViCi Gaming at July 6, 2021 - 15:20 CEST"},{"team1": "OG", "team2": "Team One", "start_time": "July 6, 2021 - 14:50 CEST", "tournament": "IEM Cologne 2021", "id": "OG vs Team One at July 6, 2021 - 14:50 CEST"},{"team1": "Sprout", "team2": "BIG", "start_time": "July 6, 2021 - 13:40 CEST", "tournament": "IEM Cologne 2021", "id": "Sprout vs BIG at July 6, 2021 - 13:40 CEST"},{"team1": "Renegades", "team2": "Team Vitality", "start_time": "July 6, 2021 - 13:30 CEST", "tournament": "IEM Cologne 2021", "id": "Renegades vs Team Vitality at July 6, 2021 - 13:30 CEST"},{"team1": "Team Spirit", "team2": "MIBR", "start_time": "July 6, 2021 - 12:20 CEST", "tournament": "IEM Cologne 2021", "id": "Team Spirit vs MIBR at July 6, 2021 - 12:20 CEST"},{"team1": "Bad News Bears", "team2": "Mousesports", "start_time": "July 6, 2021 - 12:00 CEST", "tournament": "IEM Cologne 2021", "id": "Bad News Bears vs Mousesports at July 6, 2021 - 12:00 CEST"},{"team1": "Ninjas in Pyjamas", "team2": "Team LDLC", "start_time": "July 6, 2021 - 12:00 CEST", "tournament": "IEM Cologne 2021", "id": "Ninjas in Pyjamas vs Team LDLC at July 6, 2021 - 12:00 CEST"}]';

                y = JSON.parse(x)
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
         data: y
    });
*/
