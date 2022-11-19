$(document).ready(function () {
    $('.burger,.btn-close').click(function (event) {
        $('.burger,.nav,.logo,.btn-close,.header,.nav-link').toggleClass('active');
    });
});