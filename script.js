//Google maps function
//Needs to be outside of JQuery call all function as gets called from script tag in HTML
function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: -41.221245, lng: 174.801635 },
            zoom: 11
        });
    }
    
//JQuery call all function
$(function() {

    

});

