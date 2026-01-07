// ===== CURATED LOCATION DATABASE =====
        // ===== CURATED LOCATION DATABASE =====//9.7406 ,76.6160
       const CAMPUS_LOCATIONS = { 'Valavoor': { lat: 9.7548, lng: 76.6501, aliases: ['valavoor','വലവൂർ','valavoor village','valavoor (karoor panchayat)'] },'Kottayam Railway Station':{lat:9.5948,lng:76.5317,aliases:['kottayam railway junction']},'Ernakulam Railway Station':{lat:9.9690,lng:76.2909,aliases:['ernakulam junction']},'Ernakulam Bus Stand':{lat:9.9775,lng:76.2888,aliases:['ernakulam ksrtc bus stop','ernakulam ksrtc bus stand','ernakulam bus stop']},'Pala KSRTC Bus Stand':{lat:9.7147,lng:76.6887,aliases:['pala ksrtc bus stop','pala bus stand ksrtc','pala bus stop ksrtc']},'Pala Private Bus Stand':{lat:9.7087,lng:76.6730,aliases:['pala private bus stop','pala bus stand private','pala bus stop private','kottaramattom private bus stand','kottaramattiom private bus stop']},'Aluva KSRTC Bus Stand':{lat:10.1064,lng:76.3559,aliases:['aluva ksrtc bus stop','aluva bus stand ksrtc','aluva bus stop ksrtc']},'Kochi Airport':{lat:10.1538,lng:76.3947,aliases:['cochin airport','ernakulam airport','kochi international airport','airport']},'Aluva Metro Station':{lat:10.1102,lng:76.3493},'Vyttila Metro Station':{lat:9.9675,lng:76.3202},'Vyttila Bus Stand':{lat:9.9688,lng:76.3217,aliases:['vyttila bus stop']},'Petta Metro Station':{lat:9.9524,lng:76.3300},'Aluva Bus Stand':{lat:10.1068,lng:76.3562,aliases:['aluva bus stop']},'Maryland Hostel': { lat: 9.7556, lng: 76.6476},'Anna Residency': { lat: 9.7556, lng: 76.6476},'Coptyre Hostel': { lat: 9.7556, lng: 76.6476},'Kalapurackal Hostel': { lat: 9.7556, lng: 76.6476},'Sunshine Hostel': { lat: 9.7556, lng: 76.6476},'Meenachil Hostel': { lat: 9.7556, lng: 76.6476},'Nila Hostel': { lat: 9.7556, lng: 76.6476},'Agasthya Hostel': { lat: 9.7556, lng: 76.6476},'MJ Apartment': { lat: 9.7556, lng: 76.6476},'Sahyadri Hostel': { lat: 9.7556, lng: 76.6476}, 'Manimala Hostel': { lat: 9.7556, lng: 76.6476},'Anamudi Hostel': { lat: 9.7556, lng: 76.6476},'IIIT Kottayam': { lat: 9.7556, lng: 76.6476, aliases: ['iiit kottayam','indian institute of information technology kottayam','iiitk','iiit kottayam campus','iiit kottayam valavoor','iiit kottayam karoor','ഐഐഐടി കോട്ടയം']} , 'MJ Hostel': { lat: 9.7488, lng: 76.6441}, 'KTM Hostel' : { lat: 9.7406, lng: 76.6160} ,'Karoor': { lat: 9.7520, lng: 76.6489, aliases: ['karoor','കരൂര്','karoor panchayat','karoor (valavoor)'] }, 'Pala': { lat: 9.7072, lng: 76.6854, aliases: ['pala','palai','പാലാ','pala town'] }, 'Uzhavoor': { lat: 9.7667, lng: 76.6000, aliases: ['uzhavoor','ഉഴവൂർ','uzhavoor panchayat'] }, 'Ramapuram': { lat: 9.8016, lng: 76.6624, aliases: ['ramapuram','രാമപുരം','ramapuram panchayat'] }, 'Marangattupilly': { lat: 9.7424, lng: 76.6119, aliases: ['marangattupilly','marangattupally','മരങ്ങാട്ടുപിള്ളി'] }, 'Mutholy': { lat: 9.6919, lng: 76.6570, aliases: ['mutholy','മുത്തോലി','mutholy panchayat'] }, 'Kozhuvanal': { lat: 9.6565, lng: 76.6646, aliases: ['kozhuvanal','കൊഴുവനാല്','kozhuvanal panchayat'] }, 'Bharananganam': { lat: 9.7003, lng: 76.7271, aliases: ['bharananganam','ഭരണങ്ങാനം','bharananganam panchayat'] }, 'Kadanad': { lat: 9.7746, lng: 76.6961, aliases: ['kadanad','കടനാട്','kadanad panchayat'] }, 'Kanakkary': { lat: 9.7208, lng: 76.5389, aliases: ['kanakkary','കാണക്കാരി','kanakkary panchayat'] }, 'Kadaplamattom': { lat: 9.7159, lng: 76.6088, aliases: ['kadaplamattom','കടപ്ളാമറ്റം','kadaplamattom panchayat'] }, 'Kuravilangad': { lat: 9.7441, lng: 76.5473, aliases: ['kuravilangad','കുറവിലങ്ങാട്','kuravilangadu','kuravilangad panchayat'] }, 'Manjoor': { lat: 9.7359, lng: 76.5127, aliases: ['manjoor','മാഞ്ഞൂര്','manjoor panchayat'] }, 'Veliyannoor': { lat: 9.8366, lng: 76.6095, aliases: ['veliyannoor','വെളിയന്നൂര്','veliyannoor panchayat'] }, 'Monippally': { lat: 9.8079, lng: 76.5748, aliases: ['monippally','മോണിപ്പള്ളി','monippally panchayat'] }, 'Kurichithanam': { lat: 9.7711, lng: 76.6108, aliases: ['kurichithanam','കുറിച്ചിതാനം','kurichithanam panchayat'] }, 'Elakkad': { lat: 9.7348, lng: 76.6347, aliases: ['elakkad','എലക്കാട്','elakkad panchayat'] }, 'Vallichira': { lat: 9.7279, lng: 76.6529, aliases: ['vallichira','വല്ലിച്ചിറ','vallichira panchayat'] }, 'Meenachil': { lat: 9.7000, lng: 76.7000, aliases: ['meenachil','മീനച്ചിൽ','meenachil panchayat'] }, 'Poovarany': { lat: 9.6647, lng: 76.7101, aliases: ['poovarany','പൂവരണി','poovarani','poovarany panchayat'] }, 'Puliyannoor': { lat: 9.6669, lng: 76.6586, aliases: ['puliyannoor','പുലിയന്നൂര്','puliyannoor panchayat'] }, 'Kidangoor': { lat: 9.6765, lng: 76.6045, aliases: ['kidangoor','കിടങ്ങൂർ','kidangoor panchayat'] }, 'Kanam': { lat: 9.5419, lng: 76.6976, aliases: ['kanam','കാനം','kanam panchayat'] }, 'Kondoor': { lat: 9.7711, lng: 76.6108, aliases: ['kondoor','കൊണ്ടൂര്','kondoor panchayat'] }, 'Lalam': { lat: 9.7000, lng: 76.7000, aliases: ['lalam','ലാലം','lalam panchayat'] }, 'Melukavu': { lat: 9.7975, lng: 76.7658, aliases: ['melukavu','മേലുകാവ്','melukavu panchayat'] }, 'Moonnilavu': { lat: 9.7485, lng: 76.7846, aliases: ['moonilavu','മൂന്നിലവ്','moonilavu panchayat'] }, 'Thalappalam': { lat: 9.6311, lng: 76.6895, aliases: ['thalappalam','തലപ്പലം','thalappalam panchayat'] }, 'Thalanadu': { lat: 9.7072, lng: 76.8646, aliases: ['thalanadu','തലനാട്','thalanadu panchayat'] }, 'Teekoy': { lat: 9.6935, lng: 76.8484, aliases: ['teekoy','തീക്കോയി','teekoy panchayat'] }, 'Poonjar': { lat: 9.6738, lng: 76.8130, aliases: ['poonjar','പൂഞ്ഞാര്','poonjar panchayat'] }, 'Erattupetta': { lat: 9.6881, lng: 76.7799, aliases: ['erattupetta','എരറ്റുപേട്ട','erattupetta town'] }, 'Kanjirappally': { lat: 9.5525, lng: 76.7933, aliases: ['kanjirappally','kanjirapally','കാഞ്ഞിരപ്പള്ളി','kanjirappally town'] }, 'Ernakulam': { lat: 9.9816, lng: 76.2999, aliases: ['ernakulam','ernakulam district','ernakulam town','ernakulam city','എറണാകുളം'] }, 'Alappuzha': { lat: 9.4981, lng: 76.3388, aliases: ['alappuzha','alleppey','ആലപ്പുഴ','alappuzha town'] }, 'Idukki': { lat: 9.8500, lng: 76.9833, aliases: ['idukki','ഇടുക്കി','idukki town'] },"Thiruvananthapuram":{lat:8.5241,lng:76.9366},"Neyyattinkara":{lat:8.3984,lng:77.0850},"Nedumangad":{lat:8.6026,lng:77.0028},"Chirayinkeezhu":{lat:8.6744,lng:76.7872},"Varkala":{lat:8.7379,lng:76.7163},"Kattakada":{lat:8.4911,lng:77.0856},"Kollam":{lat:8.8932,lng:76.6141},"Kunnathur":{lat:9.0240,lng:76.5736},"Kottarakkara":{lat:8.9911,lng:76.7754},"Pathanapuram":{lat:9.0906,lng:76.8671},"Karunagappally":{lat:9.0596,lng:76.5356},"Adoor":{lat:9.1556,lng:76.7330},"Kozhencherry":{lat:9.3305,lng:76.7057},"Ranni":{lat:9.3867,lng:76.7786},"Mallappally":{lat:9.4469,lng:76.6463},"Thiruvalla":{lat:9.3835,lng:76.5741},"Ambalappuzha":{lat:9.3681,lng:76.3564},"Chengannur":{lat:9.3180,lng:76.6152},"Cherthala":{lat:9.6849,lng:76.3375},"Karthikappally":{lat:9.2483,lng:76.4981},"Kuttanad":{lat:9.4395,lng:76.4123},"Mavelikkara":{lat:9.2593,lng:76.5566},"Changanassery":{lat:9.4420,lng:76.5360},"Kanjirappally":{lat:9.5525,lng:76.7933},"Kottayam":{lat:9.5913,lng:76.5224},"Meenachil":{lat:9.7000,lng:76.7000},"Vaikom":{lat:9.7480,lng:76.3960},"Devikulam":{lat:10.0626,lng:77.1140},"Idukki":{lat:9.8500,lng:76.9833},"Peerumade":{lat:9.5707,lng:77.0617},"Thodupuzha":{lat:9.8946,lng:76.7141},"Udumbanchola":{lat:9.9865,lng:77.1630},"Aluva":{lat:10.1076,lng:76.3516},"Kanayannur":{lat:10.0159,lng:76.3419},"Kochi":{lat:9.9312,lng:76.2673},"Kothamangalam":{lat:10.0602,lng:76.6350},"Muvattupuzha":{lat:9.9849,lng:76.5783},"Paravur":{lat:10.1427,lng:76.2335},"Perumbavoor":{lat:10.1150,lng:76.4762},"Chalakudy":{lat:10.3040,lng:76.3370},"Chavakkad":{lat:10.5832,lng:76.0426},"Irinjalakuda":{lat:10.3445,lng:76.2112},"Kodungallur":{lat:10.2200,lng:76.1950},"Mukundapuram":{lat:10.3445,lng:76.2112},"Thrissur":{lat:10.5276,lng:76.2144},"Alathur":{lat:10.6500,lng:76.5440},"Chittur":{lat:10.6994,lng:76.7472},"Mannarkkad":{lat:10.9931,lng:76.4597},"Ottapalam":{lat:10.7732,lng:76.3776},"Palakkad":{lat:10.7867,lng:76.6548},"Pattambi":{lat:10.8055,lng:76.1955},"Eranad":{lat:11.1200,lng:76.1190},"Kondotty":{lat:11.1400,lng:75.9650},"Nilambur":{lat:11.2767,lng:76.2257},"Perinthalmanna":{lat:10.9760,lng:76.2260},"Ponnani":{lat:10.7677,lng:75.9259},"Tirur":{lat:10.9156,lng:75.9210},"Kozhikode":{lat:11.2588,lng:75.7804},"Koyilandy":{lat:11.4392,lng:75.6953},"Thamarassery":{lat:11.4167,lng:75.9333},"Vatakara":{lat:11.6075,lng:75.5901},"Mananthavady":{lat:11.8014,lng:76.0043},"SulthanBathery":{lat:11.6640,lng:76.2570},"Vythiri":{lat:11.5667,lng:76.0500},"Iritty":{lat:11.9852,lng:75.6771},"Kannur":{lat:11.8769,lng:75.3704},"Payyannur":{lat:12.0936,lng:75.2025},"Taliparamba":{lat:12.0370,lng:75.3616},"Thalassery":{lat:11.7533,lng:75.4929},"Hosdurg":{lat:12.3150,lng:75.0910},"Kasaragod":{lat:12.4996,lng:74.9869},"Manjeshwar":{lat:12.7123,lng:74.8890},"Vellarikundu":{lat:12.2747,lng:75.1917} };
 
        // ===== HAVERSINE DISTANCE CALCULATION =====
        function haversineDistance(lat1, lng1, lat2, lng2) {
            const R = 6371;
            const dLat = (lat2 - lat1) * Math.PI / 180;
            const dLng = (lng2 - lng1) * Math.PI / 180;
            const a = Math.sin(dLat/2)**2 + Math.cos(lat1*Math.PI/180) * Math.cos(lat2*Math.PI/180) * Math.sin(dLng/2)**2;
            const c = 2 * Math.asin(Math.sqrt(a));
            return R * c;
        }

        // ===== FLEXIBLE LOCATION MATCHING =====
        function resolveLocation(userInput) {
        const input = userInput.toLowerCase().trim();
        
        for (const [location, data] of Object.entries(CAMPUS_LOCATIONS)) {
            if (location.toLowerCase() === input) return { location, ...data };
            
            // ✅ SAFE aliases check
            if (data.aliases && Array.isArray(data.aliases) && 
                data.aliases.some(alias => alias.toLowerCase() === input)) {
            return { location, ...data };
            }
            
            if (location.toLowerCase().includes(input) || input.includes(location.toLowerCase())) {
            return { location, ...data };
            }
        }
        return null;
        }


        // ===== LOCATION AUTOCOMPLETE =====
        function setupLocationAutocomplete(inputId, listId) {
    const input = document.getElementById(inputId);
    const list = document.getElementById(listId);

    let activeIndex = -1;

    function clearActive() {
        [...list.children].forEach(el => el.classList.remove("active"));
    }

    function setActive(index) {
        clearActive();
        if (!list.children[index]) return;
        list.children[index].classList.add("active");
        input.value = list.children[index].dataset.value;
        list.children[index].scrollIntoView({ block: "nearest" });
        activeIndex = index;
    }

    input.addEventListener("input", () => {
        const value = input.value.toLowerCase().trim();
        activeIndex = -1;

        if (!value) {
            list.style.display = "none";
            return;
        }

        const matches = Object.keys(CAMPUS_LOCATIONS).filter(loc =>
            loc.toLowerCase().includes(value)
        );

        if (!matches.length) {
            list.style.display = "none";
            return;
        }

        list.innerHTML = "";
        matches.slice(0, 10).forEach(loc => {
            const item = document.createElement("div");
            item.className = "location-item";
            item.dataset.value = loc;
            item.textContent = `📍 ${loc}`;

            item.addEventListener("mouseenter", () => {
                clearActive();
                item.classList.add("active");
                activeIndex = [...list.children].indexOf(item);
            });

            item.addEventListener("mouseleave", () => {
                item.classList.remove("active");
            });

            item.addEventListener("click", () => {
                input.value = loc;
                list.style.display = "none";
            });

            list.appendChild(item);
        });

        list.style.display = "block";
    });

    input.addEventListener("keydown", (e) => {
        const items = list.children;
        if (!items.length || list.style.display === "none") return;

        if (e.key === "ArrowDown") {
            e.preventDefault();
            const next =
                activeIndex === items.length - 1 ? 0 : activeIndex + 1;
            setActive(next);
        }

        if (e.key === "ArrowUp") {
            e.preventDefault();
            const prev =
                activeIndex === -1 || activeIndex === 0
                    ? items.length - 1
                    : activeIndex - 1;
            setActive(prev);
        }

        if (e.key === "Enter" && activeIndex !== -1) {
            e.preventDefault();
            input.value = items[activeIndex].dataset.value;
            list.style.display = "none";
        }

        if (e.key === "Escape") {
            list.style.display = "none";
            activeIndex = -1;
        }
    });

    document.addEventListener("click", (e) => {
        if (e.target !== input && !list.contains(e.target)) {
            list.style.display = "none";
        }
    });
}


        function selectLocation(inputId, location) {
            document.getElementById(inputId).value = location;
            document.getElementById(inputId).closest('.form-group-relative').querySelector('.location-list').style.display = 'none';
        }

        // ===== SMART RIDE SEARCH =====
        function searchRidesByProximity() {
            const fromInput = document.getElementById('searchFrom').value;
            const toInput = document.getElementById('searchTo').value;
            const dateInput = document.getElementById('searchDate').value;

            if (!fromInput || !toInput || !dateInput) {
                showAppAlert('❌ Please fill in all search fields!');
                return;
            }

            const fromCoords = resolveLocation(fromInput);
            const toCoords = resolveLocation(toInput);

            if (!fromCoords || !toCoords) {
                showAppAlert('❌ Location not recognized. Try: Kottayam, Pala, IIIT, Ernakulam, etc.');
                return;
            }

           const matchedRides = rides.filter(ride => {
                // ✅ NEW: Create full datetime for ride
                const rideDateTime = new Date(`${ride.date}T${ride.time}`);
                const now = new Date();
                
                // ✅ Hide if ride time has passed
                if (rideDateTime < now) return false;
                
                // Keep existing checks
                if (ride.date !== dateInput) return false;
                const pickupCoords = resolveLocation(ride.from);
                const dropoffCoords = resolveLocation(ride.to);
                if (!pickupCoords || !dropoffCoords) return false;
                
                const pickupDist = haversineDistance(fromCoords.lat, fromCoords.lng, pickupCoords.lat, pickupCoords.lng);
                const dropoffDist = haversineDistance(toCoords.lat, toCoords.lng, dropoffCoords.lat, dropoffCoords.lng);
                
                return pickupDist <= 10 && dropoffDist <= 10;
            });



            displaySearchResults(matchedRides, fromCoords, toCoords);
        }

        function displaySearchResults(matches, fromCoords, toCoords) {
            const container = document.getElementById('searchResultsList');

            if (matches.length === 0) {
                container.innerHTML = '<div class="empty-state" style="grid-column: 1/-1;"><h3>No rides found 😞</h3><p>Try adjusting your date or search radius</p></div>';
                return;
            }

            container.innerHTML = matches.map(ride => {
                const pickupCoords = resolveLocation(ride.from);
                const dropoffCoords = resolveLocation(ride.to);
                const pickupDist = haversineDistance(fromCoords.lat, fromCoords.lng, pickupCoords.lat, pickupCoords.lng);
                const dropoffDist = haversineDistance(toCoords.lat, toCoords.lng, dropoffCoords.lat, dropoffCoords.lng);

                return `
                    <div class="post-card">
                        <h3 class="post-title">${ride.from} → ${ride.to}</h3>
                        <div class="post-meta">
                            <span class="badge badge-info">📅 ${ride.date}</span>
                            <span class="badge badge-info">⏰ ${ride.time}</span>
                            <span class="badge badge-distance">📍 Pickup: ${pickupDist.toFixed(1)}km</span>
                            <span class="badge badge-distance">📍 Dropoff: ${dropoffDist.toFixed(1)}km</span>
                            <span class="badge badge-success">🪑 ${ride.seats} seats</span>
                        </div>
                        <p class="post-description">${ride.notes || 'No vehicle details'}</p>
                        <div class="post-user">
                            <div class="avatar">${ride.name.charAt(0).toUpperCase()}</div>
                            <div class="user-info">
                                <p class="user-name">${ride.name}</p>
                                <p class="user-phone">${ride.phone}</p>
                            </div>
                            <button class="btn btn-contact" onclick="contactUser('${ride.phone}', '${ride.name}')">Join Ride</button>
                        </div>
                    </div>
                `;
            }).join('');
        }

        function clearSearch() {
            document.getElementById('searchFrom').value = '';
            document.getElementById('searchTo').value = '';
            document.getElementById('searchDate').value = '';
            document.getElementById('searchResultsList').innerHTML = '';
        }
