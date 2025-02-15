document.getElementById('getServersBtn').addEventListener('click', function() {
    // يمكننا إضافة رسالة بديلة بدلاً من الرابط
    const serverMessage = "141.94.250.79 28000 cccamsouf cccamsouf";
 
    // عرض النص في العنصر
    const serverLinkDiv = document.getElementById('serverLink');
    serverLinkDiv.style.display = "block";
    serverLinkDiv.innerHTML = serverMessage;
});
