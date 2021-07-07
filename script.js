 var $table = $('#table')

  $(function() {
    var data = [httpGet(https://gist.githubusercontent.com/Reason0x6/8cda7cdce846941a4d9956606ad255e2/raw/46762ca4ea607a6a43ae7ccd95edf3ff16004d09/IEM_DAT)]
    $table.bootstrapTable({data: data})
  })


function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
