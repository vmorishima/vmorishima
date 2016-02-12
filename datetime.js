var newDate = new Date();
var n = newDate.getTime();
newDate.setTime(n);
var msg = '<p>&copy; v morishima // ' + newDate + '</p>';
var el = document.getElementById('datetime');
el.innerHTML = msg;