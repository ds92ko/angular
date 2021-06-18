const tabList = document.querySelectorAll('.tab_menu .tab');
for (var i = 0; i < tabList.length; i++) {
    tabList[i].querySelector('.tab_btn').addEventListener('click', function(e) {
        e.preventDefault();
        for (var j = 0; j < tabList.length; j++) {
            tabList[j].classList.remove('active');
        }
        this.parentNode.classList.add('active');
    })
}