//let myLatLng = { lat: 15.363, lng: 131.044 };

let place = {};
let myLatLng = { lat: 15.363, lng: 131.044 };
function init() {
   
    var input = document.getElementById('locationTextField');
    var autocomplete = new google.maps.places.Autocomplete(input, { types: ['(cities)'] });
    google.maps.event.addListener(autocomplete, 'place_changed', function () {
        place = autocomplete.getPlace();
        var latA = place.geometry.location.lat(),
            lngA = place.geometry.location.lng();
        myLatLng = { lat: latA, lng: lngA };
      //  console.log(autocomplete.getPlace());
        myMap(myLatLng);
        var lat = place.geometry.location.lat(), lng = place.geometry.location.lng();
      //  console.log(place.geometry.location.lat(), lng = place.geometry.location.lng());
    })
}
function myMap(myLatLng) {

    var mapProp = {
        center: new google.maps.LatLng(myLatLng.lat, myLatLng.lng),
        //center: new google.maps.LatLng(myLatLng[0], myLatLng[1]),
        zoom: 12,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    new google.maps.Marker({
        position: myLatLng,
        map,
        icon: 'images/smallminion.png',
        title: "Send Love",
    });
}
