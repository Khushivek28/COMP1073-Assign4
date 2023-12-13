document.addEventListener('DOMContentLoaded', function () {
    const studentInfo = document.getElementById('student-info');
    studentInfo.textContent = 'Student ID: 200543219 | Name: Khushi Vekariya';
});

document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'AIzaSyCx1DKGFr2sTjScI9obukyK-Kcx6EkK0lA'; 

    const mapOptions = {
        center: { lat: 44.3894, lng: -79.6903 }, 
        zoom: 8,
    };

    const map = new google.maps.Map(document.getElementById('map'), mapOptions);

});
