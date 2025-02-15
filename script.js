document.getElementById('getServersBtn').addEventListener('click', function() {
    // رابط السيرفر سيسكام
    const serverURL = "https://github.com/ala44k/CCCamSouf/blob/main/cccam.txt";
    
    // عرض الرابط كـ "رابط" فقط
    const serverLinkDiv = document.getElementById('serverLink');
    serverLinkDiv.style.display = "block";
    serverLinkDiv.innerHTML = `links: <a href="${serverURL}" target="_blank">ici</a>`;
});
