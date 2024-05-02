window.addEventListener('scroll', function () {
    var navigation = document.querySelector('navigation');
    navigation.style.backgroundColor = (window.pageYOffset > 0) ? '#555' : '#333';
});

var menuItems = document.querySelectorAll('navigation li a');
menuItems.forEach(function (item) {
    item.addEventListener('mouseover', function () {
        this.style.backgroundColor = '#111';
    });
    item.addEventListener('mouseout', function () {
        this.style.backgroundColor = '#555';
    });
});
