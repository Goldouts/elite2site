var urlObj = new window.URL(window.location.href);
var url = "https://holyubofficial.net";

if (url) {
    var win;

    var bypassButton = document.querySelector('.bypass-button');
    bypassButton.addEventListener('click', function() {
        if (win) {
            win.focus();
        } else {
            win = window.open();
            win.document.body.style.margin = '0';
            win.document.body.style.height = '100vh';
            var iframe = win.document.createElement('iframe');
            iframe.style.border = 'none';
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.margin = '0';
            iframe.src = url;
            win.document.body.appendChild(iframe);
        }
        bypassButton.classList.add('clicked');
        bypassButton.innerHTML = "PRXXY LOADED!";
    });
}
