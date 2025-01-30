<script>
    function updateClock() {
        var today = new Date();

        var dayOfWeek = today.toLocaleString('en-us', { weekday: 'long' });
        var day = today.getDate();
        var month = today.getMonth() + 1; // Month is 0-based
        var year = today.getFullYear();

        var hours = today.getHours();
        var minutes = today.getMinutes();
        var seconds = today.getSeconds();

        minutes = (minutes < 10) ? '0' + minutes : minutes;
        seconds = (seconds < 10) ? '0' + seconds : seconds;

        var timeString = hours + ':' + minutes + ':' + seconds;
        var dateString = dayOfWeek + ', ' + day + '/' + month + '/' + year;

        document.getElementById('clock').innerHTML = dateString + ' | ' + timeString;
    }

    setInterval(updateClock, 1000);
    updateClock();
</script>