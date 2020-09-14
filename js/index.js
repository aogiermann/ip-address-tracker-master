    window.onload = function () {
        fetch('https://api.ipify.org/?format=json')
        .then(response => response.json())
        .then(data => displayIP(data['ip']));
    };

    async function displayIP(response) {
        address = await response;
        document.getElementById("ipaddress").value = address;

        getCoordinates(address);
    }

    function getCoordinates(address){
        const serviceUrl = `https://ip-address-tracker-master-psi.vercel.app/api/getCoordinates?address=`;

        if(address === undefined || address === ''){
            address = document.getElementById("ipaddress").value;
        }

        fetch(serviceUrl + address)
        .then(function(response){
            return response.json();
        })
        .then(data => {
            setCoordinates(data.location.lat, data.location.lng);
            document.getElementById("ip").innerText = data.ip;
            document.getElementById("location").innerText = data.location.city;
            document.getElementById("timezone").innerText = `UTC ${data.location.timezone}`;
            document.getElementById("isp").innerText = data.isp;

            document.getElementById("ipaddress").value = '';
        })
    }
    
    function onHitEnter(e) {
        if(e.keyCode == 13){
            getCoordinates();
        }
    }