var startPos;
var map;

function init()
{
  if(window.sessionStorage.getItem("firstname")!=undefined){
    document.getElementById('para1').innerHTML="Welcome "+window.localStorage.getItem("firstname");

 }

  if(navigator.geolocation)
  {

    navigator.geolocation.getCurrentPosition(updateLocation,handleLocationError,{timeout:50000});

  }
  else
  {
    document.getElementById("divStatus").innerHTML = "<p style='color:red'>Oops! This browser does not support HTML5 Geolocation</p>";
  }
}

function updateLocation(position)
{
startPos = position;
 latitude = position.coords.latitude;
 longitude = position.coords.longitude;



var coords = new google.maps.LatLng(latitude,longitude);

 var mapOptions = { zoom:10,
                    center:coords,
                    mapTypeControl:false,
                    navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL},
                    mapTypeId:google.maps.MapTypeId.SATELLITE
                  };

map = new google.maps.Map(document.getElementById("location1"),mapOptions);

var marker = new google.maps.Marker({ position:coords,
                                      map:map,
                                      title:"Your current location!"
                                     });
} function handleLocationError(error)
 {
   switch(error.code)
   {
     case 0:
      updateStatus("There was an error while retrieving your location: " + error.message);
     break;

     case 1:
      updateStatus("The user prevented this page from retrieving the location.");
      break;

     case 2:
      updateStatus("The browser was unable to determine your location: " + error.message);
      break;

     case 3:
      updateStatus("The browser timed out before retrieving the location.");
      break;
   }
 }

 function updateStatus(msg)
 {
   document.getElementById("divStatus").innerHTML = msg;
 }

