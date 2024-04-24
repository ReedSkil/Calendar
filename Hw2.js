document.addEventListener("DOMContentLoaded", function() {
    calendar = document.querySelector('.calendar');
    monthformat = document.getElementById('monthName'); 
    dayformat = calendar.querySelector('.days');
    pyear = document.querySelector('.pyear');
    nyear = document.querySelector('.nyear');
    tyear = new Date().getFullYear();
    cyear = new Date().getFullYear();
    cmonth = new Date().getMonth();
    cday = new Date().getDate();
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    function generateCalendar(year, month) {
        daysCount = new Date(year, month + 1, 0).getDate();
        firstDay = new Date(year, month, 1).getDay();
        monthName = months[month];

        monthformat.textContent = monthName + ' ' + year;
        dayformat.innerHTML = '';

        for (i = 0; i < firstDay; i++) {
            daygrid = document.createElement('div');
            daygrid.className = 'day';
            dayformat.appendChild(daygrid);
        }

        for (i = 1; i <= daysCount; i++) {
            daygrid = document.createElement('div');
            daygrid.textContent = i;
            daygrid.className = 'day';
            if (i === cday && year === cyear) {
                daygrid.classList.add('cday');
            }
            dayformat.appendChild(daygrid);
        }
    }

    generateCalendar(tyear, cmonth);

    pyear.addEventListener('click', function() {
        tyear -= 1;
        generateCalendar(tyear, cmonth);
    });

    nyear.addEventListener('click', function() {
        tyear += 1;
        generateCalendar(tyear, cmonth);
    });
});