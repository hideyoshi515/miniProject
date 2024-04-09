function nowTime() {
    var today = new Date();
    var nowTime = document.getElementById("nowTime");

    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);

    var hours = ('0' + today.getHours()).slice(-2);
    var minutes = ('0' + today.getMinutes()).slice(-2);
    var seconds = ('0' + today.getSeconds()).slice(-2);

    var dateString = year + '-' + month + '-' + day;
    var timeString = hours + ':' + minutes;
    //nowTime.innerText = dateString + " " + timeString + " 기준";

}

$(document).ready(function () {
    $('#banner-carousel').owlCarousel({
        center: true,
        items: 3,
        loop: true,
        margin: 7.5,
        nav: true,
        navContainer: '#banner-nav',
        autoWidth: true,
        autoplay: true,
        autoplayTimeout: 3000,
    });
    nowTime();

});

$('#banner-carousel').on('changed.owl.carousel', function (e) {
    if (!e.namespace || e.property.name != 'position') return
    $('#info').text(e.item.index + '/' + e.item.count);
})
function bannerStop(){
    $('#banner-carousel').trigger('stop.owl.autoplay');
    let stopButton = document.getElementById('banner-stop');
    let playButton = document.getElementById('banner-play');
    playButton.style.display = "block";
    stopButton.style.display = "none";
};

function bannerPlay(){
    $('#banner-carousel').trigger('play.owl.autoplay', 3000);
    let stopButton = document.getElementById('banner-stop');
    let playButton = document.getElementById('banner-play');
    stopButton.style.display = "block";
    playButton.style.display = "none";
};