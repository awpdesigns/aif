/*!
  *  Name: AIF Script
  *  Description: Script file for AIF 2023
  *
  * AIF 2023 Script v1.0.0 by Atas Nalar
*/
(function ($) {
    'use strict';

        // Get current date
        function getCurrentDate() {
            const now = new Date();
            // en-US
            const day = now.toLocaleString('en-US', { weekday: 'long' });
            const month = now.toLocaleString('en-US', { month: 'long' });
            const dayNumber = now.toLocaleString('en-US', { day: 'numeric' });
            const year = now.toLocaleString('en-US', { year: 'numeric' });

            return `${day}, ${month} ${dayNumber}, ${year}`;

            // id-ID
            const day_id = now.toLocaleString('id-ID', { weekday: 'long' });
            const month_id = now.toLocaleString('id-ID', { month: 'long' });
            const dayNumber_id = now.toLocaleString('id-ID', { day: 'numeric' });
            const year_id = now.toLocaleString('id-ID', { year: 'numeric' });

            // return `${day_id}, ${dayNumber_id} ${month_id} ${year_id}`;
        }
        // Update the time every second
        function updateTime() {
            // Get the current time in jakarta timezone
            const now = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
            const time = new Date(now);
            // Get the hours, minutes and seconds from the current time
            const hours = time.getHours();
            const minutes = time.getMinutes();
            const seconds = time.getSeconds();
            // Set the AM or PM time
            const ampm = hours >= 12 ? 'PM' : 'AM';
            // Format hours, minutes and seconds
            // const timeString = `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`;
            const timeString = `${formatNumber(hours)}:${formatNumber(minutes)} ${ampm}`;
            $('#time').text(timeString);
            $('#date').text(getCurrentDate()); // Set current date

            // Session Data
            var sessionData = [
                // 1
                {
                    name: 'Opening Session',
                    title: '<strong class="text-secondary">Welcoming Remarks</strong>',
                    time: '09:00 - 09:15 WIB (UTC +7:00)',
                    timestart: '09:00',
                    timeend: '09:15',
                },
                // 2
                {
                    name: 'High Level Segment',
                    title: '<strong class="text-secondary">Keynote Speech</strong>',
                    time: '09:15 - 09:35 WIB (UTC +7:00)',
                    timestart: '09:15',
                    timeend: '09:35',
                },
                // 3
                {
                    name: 'Session 1',
                    title: '<strong class="text-secondary">FDI and Impact Investment for Sustainable Development</strong>',
                    time: '09:35 - 10:35 WIB (UTC +7:00)',
                    timestart: '09:35',
                    timeend: '10:35',
                },
                // 4
                {
                    name: 'Session 2',
                    title: '<strong class="text-secondary">Global Supply Chain and Sustainable Investment</strong>',
                    time: '11:00 - 11:45 WIB (UTC +7:00)',
                    timestart: '11:00',
                    timeend: '11:45',
                },
                // 5
                {
                    name: 'Introductory Remarks',
                    title: '<strong class="text-secondary">Investment Opportunities in ASEAN Segment</strong>',
                    time: '13:00 - 13:05 WIB (UTC +7:00)',
                    timestart: '13:00',
                    timeend: '13:05',
                },
                // 6
                {
                    name: 'Session 3',
                    title: '<strong class="text-secondary">Investment Opportunities in Electric Vehicles</strong>',
                    time: '13:05 - 14:05 WIB (UTC +7:00)',
                    timestart: '13:05',
                    timeend: '14:05',
                },
                // 7
                {
                    name: 'Session 4',
                    title: '<strong class="text-secondary">Investment Opportunities in Renewable Energy</strong>',
                    time: '14:05 - 15:05 WIB (UTC +7:00)',
                    timestart: '14:05',
                    timeend: '15:05',
                },
                // 8
                {
                    name: 'Session 5',
                    title: '<strong class="text-secondary">Investment Opportunities in Health Systems</strong>',
                    time: '15:25 - 16:25 WIB (UTC +7:00)',
                    timestart: '15:25',
                    timeend: '16:25',
                },
                // 9
                {
                    name: '',
                    title: '<strong class="text-secondary">Closing Session</strong>',
                    time: '16:25 - 16:30 WIB (UTC +7:00)',
                    timestart: '16:25',
                    timeend: '16:30',
                },
            ]
            var sessionName = $('#session-name'); // Example: Session 1
            var sessionTitle = $('#session-title'); // Example: Opening Ceremony
            var sessionTime = $('#session-time'); // Example: 08:00 AM

            // Set hours:minutes to var HM
            var HM = formatNumber(hours) + ':' + formatNumber(minutes);
            //console.log(HM);
            // Update session data based on session time start and end
            // 1
            if (HM >= sessionData[0].timestart && HM <= sessionData[0].timeend) {
                $('.an-marquee-text').removeAttr('style');
                sessionName.text(sessionData[0].name);
                sessionTitle.html(sessionData[0].title);
                sessionTime.text(sessionData[0].time);
            }
            // 2
            else if (HM >= sessionData[1].timestart && HM <= sessionData[1].timeend) {
                $('.an-marquee-text').removeAttr('style');
                sessionName.text(sessionData[1].name);
                sessionTitle.html(sessionData[1].title);
                sessionTime.text(sessionData[1].time);
            }
            // 3
            else if (HM >= sessionData[2].timestart && HM <= sessionData[2].timeend) {
                $('.an-marquee-text').removeAttr('style');
                sessionName.text(sessionData[2].name);
                sessionTitle.html(sessionData[2].title);
                sessionTime.text(sessionData[2].time);
            }
            // 4
            else if (HM >= sessionData[3].timestart && HM <= sessionData[3].timeend) {
                $('.an-marquee-text').removeAttr('style');
                sessionName.text(sessionData[3].name);
                sessionTitle.html(sessionData[3].title);
                sessionTime.text(sessionData[3].time);
            }
            // 5
            else if (HM >= sessionData[4].timestart && HM <= sessionData[4].timeend) {
                $('.an-marquee-text').removeAttr('style');
                sessionName.css('min-width', '28%');
                sessionName.text(sessionData[4].name);
                sessionTitle.html(sessionData[4].title);
                sessionTime.text(sessionData[4].time);
            }
            // 6
            else if (HM >= sessionData[5].timestart && HM <= sessionData[5].timeend) {
                $('.an-marquee-text').removeAttr('style');
                sessionName.text(sessionData[5].name);
                sessionTitle.html(sessionData[5].title);
                sessionTime.text(sessionData[5].time);
            }
            // 7
            else if (HM >= sessionData[6].timestart && HM <= sessionData[6].timeend) {
                $('.an-marquee-text').removeAttr('style');
                sessionName.text(sessionData[6].name);
                sessionTitle.html(sessionData[6].title);
                sessionTime.text(sessionData[6].time);
            }
            // 8
            else if (HM >= sessionData[7].timestart && HM <= sessionData[7].timeend) {
                $('.an-marquee-text').removeAttr('style');
                sessionName.text(sessionData[7].name);
                sessionTitle.html(sessionData[7].title);
                sessionTime.text(sessionData[7].time);
            }
            // 9
            else if (HM >= sessionData[8].timestart && HM <= sessionData[8].timeend) {
                $('.an-marquee-text').removeAttr('style');
                sessionName.hide();
                sessionName.text(sessionData[8].name);
                sessionTitle.html(sessionData[8].title);
                sessionTime.text(sessionData[8].time);
            }
            // 10
            else {
                sessionName.show();
                sessionName.html('Topic Forum');
                sessionTitle.html('FDI and Impact Investment for Sustainable Development <span class="text-secondary">|</span> Global Supply Chain and Sustainable Investment <span class="text-secondary">|</span> Investment Opportunities in Electric Vehicles <span class="text-secondary">|</span> Investment Opportunities in Renewable Energy <span class="text-secondary">|</span> Investment Opportunities in Health Systems');
                sessionTime.html('');
            }
        }
        // Add leading zero if number is < 10
        function formatNumber(number) {
            return number < 10 ? `0${number}` : number;
        }
    $(window).on('load', function () {
        updateTime();
        // Update the time every second
        setInterval(updateTime, 1000);
    });
    var AIF = function () {
        // Check orientation, if landscape toggle class .landscape to body
        if (window.innerHeight > window.innerWidth) {
            $('body').removeClass('landscape');
        } else {
            $('body').addClass('landscape');
        }

        // Check orientation when device is rotated from portrait to landscape or vice versa
        window.addEventListener('orientationchange', function () {
            // If current orientation is portrait
            if (window.orientation == 0 || window.orientation == 180) {
                $('body').removeClass('landscape');
            }
            // If current orientation is landscape
            else if (window.orientation == 90 || window.orientation == -90) {
                $('body').addClass('landscape');
            }
        }, false);
        // PWA Service Worker
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('sw.js');
        }
        // Get iconic places in Jakarta and The Sultan Hotel & Residence Jakarta with google places API
        var map;
        var service;
        var infowindow;
        var request;
        var markers = [];
        async function initMap() {
            const { Map } = await google.maps.importLibrary("maps");
            var currentLocation = new google.maps.LatLng(-6.218026113247089, 106.80902260341915); // Set current location
            var jakarta = new google.maps.LatLng(-6.1753924, 106.8271528);
            infowindow = new google.maps.InfoWindow();
            map = new Map(document.getElementById('map'), {
                center: jakarta,
                // Set zoom level
                zoom: 13,
                // // Disable zoom control
                // zoomControl: false,
                // // Disable scrollwheel
                // scrollwheel: false,
                // // Disable draggable
                // draggable: false,
                // Disable street view
                streetViewControl: false,
                // Disable fullscreen
                fullscreenControl: false,
                // Disable map type
                mapTypeControl: false,
            });
            request = {
                location: jakarta,
                radius: 500,
                query: 'iconic places in Jakarta',
                fields: ['name', 'formatted_address', 'geometry', 'icon', 'photos', 'place_id', 'rating', 'user_ratings_total', 'price_level', 'types', 'opening_hours'],
            };
            service = new google.maps.places.PlacesService(map);
            service.textSearch(request, callback);
        }
        function centerMap(map) {
            // Create map boundaries from all map markers.
            var bounds = new google.maps.LatLngBounds();
            // Extend boundaries for each marker and shape.
            for (var i = 0; i < markers.length; i++) {
                bounds.extend(markers[i].getPosition());
            }
            // Fit map boundaries
            map.fitBounds(bounds);

            // Get zoom level from bound

        }
        function callback(results, status) {
            const resultsDiv = $('#results');
            resultsDiv.empty();
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < results.length; i++) {
                    // Create marker for each place
                    createMarker(results[i]);

                    // Create a card for each place
                    const place = results[i];
                    const placeid = place.place_id;
                    const name = place.name;
                    const address = place.formatted_address;
                    const adrAddress = place.adr_address;
                    const rating = place.rating;
                    const userRatingsTotal = place.user_ratings_total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") ? place.user_ratings_total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 'N/A';
                    const priceLevel = place.price_level;
                    const types = place.types;
                    const photo = place.photos;
                    const photoUrl = photo[0].getUrl() ? photo[0].getUrl() : 'assets/imgs/android-chrome-512x512.png';
                    // Check if the place is open or not
                    const isOpen = place.opening_hours;
                    // <span class="text-green bg-green-subtle">Open Now</span>
                    // Check if the place is open or not with each place id
                    if (isOpen) {
                        service.getDetails({
                            placeId: placeid,
                            // Get opening hours, if the place is open or not
                            fields: ['opening_hours'],
                        }, function (place, status) {
                            if (status === google.maps.places.PlacesServiceStatus.OK) {
                                var now = new Date();
                                var day = now.getDay();

                                // Get opening hours
                                var thehours = place.opening_hours;

                                if (thehours) {
                                    var periods = thehours.periods[day] || thehours.periods[0];
                                } else {
                                    var periods = false;
                                }

                                // Check if the place is open or not
                                if (periods) {
                                    var open = periods.open.time;
                                    var close = periods.close.time;

                                    // Format hours
                                    var fopen = open.slice(0, 2) + ':' + open.slice(2, 4);
                                    var fclose = close.slice(0, 2) + ':' + close.slice(2, 4);

                                    // Add AM or PM
                                    fopen = fopen + ' ' + (open < 1200 ? 'AM' : 'PM');
                                    fclose = fclose + ' ' + (close < 1200 ? 'AM' : 'PM');

                                    // Check if the place is open or not
                                    if (now >= open && now <= close) {
                                        $('#' + placeid + ' .card-body').append('<small class="text-green bg-green-subtle fs-xs">Open Now</small> <small class="text-muted fs-xs">| ' + fopen + ' - ' + fclose + '</small>');
                                    } else {
                                        $('#' + placeid + ' .card-body').append('<small class="text-red bg-red-subtle fs-xs">Closed</small> <small class="text-muted fs-xs">| Open at ' + fopen + ' - ' + fclose + '</small>');
                                    }
                                } else {
                                    $('#' + placeid + ' .card-body').append('<small class="text-red bg-red-subtle fs-xs">Closed</small>');
                                }
                            }
                        });
                    } else {
                        $('#' + placeid + ' .card-body').append('<small class="text-red bg-red-subtle fs-xs">Closed</small>');
                    }

                    // console.log(place);

                    const card = `<div class="card" id="${placeid}"><div class="card-image"><img src="${photoUrl}" class="img-fluid" alt="${name}" /><small class="rating" aria-label="Rating"><i class="bx bxs-star text-secondary m-0"></i> ${rating} <small class="text-muted fs-xs">(${userRatingsTotal})</small></small></div><div class="card-body"><h5 class="card-title">${name}</h5><p class="card-text mb-0 address excerpt-2">${address}</p></div></div>`;
                    resultsDiv.append(card);

                    // On click card, zoom to the place
                    $('.card').on('click', function (e) {
                        e.preventDefault();
                        var index = $(this).index();
                        map.setZoom(18);
                        map.setCenter(markers[index].getPosition());
                        google.maps.event.trigger(markers[index], 'click');
                    });
                    // Check if the map zoom level has changed and not fit bounds then remove class d-none from #zoom-out-map
                    google.maps.event.addListener(map, 'zoom_changed', function () {
                        if (map.getZoom() != 13) {
                            $('#zoom-out-map').removeClass('d-none');
                        } else {
                            $('#zoom-out-map').addClass('d-none');
                        }
                    });
                    centerMap(map);
                }
            } else {
                resultsDiv.append(`<div class="alert alert-danger h-100" role="alert">No results found. Please try again.</div>`);
            }
        }
        function createMarker(place) {
            var placeLoc = place.geometry.location;
            var marker = new google.maps.Marker({
                map: map,
                position: placeLoc,
                animation: google.maps.Animation.DROP,
            });
            markers.push(marker);
            // var currentLocation = new google.maps.LatLng(-6.218026113247089, 106.80902260341915); // Set current location
            // // Append current location marker
            // var currentLocationMarker = new google.maps.Marker({
            //     map: map,
            //     position: currentLocation,
            //     icon: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
            //     animation: google.maps.Animation.DROP,
            // });
            // markers.push(currentLocationMarker);
            // // Open infowindow for current location marker on the map when the page loads
            // google.maps.event.addListenerOnce(map, 'idle', function () {
            //     infowindow.setContent('<div class="d-flex flex-column gap-1 text-center"><strong>Current Location</strong><span class="text-muted">You are around here</span></div>');
            //     infowindow.open(map, currentLocationMarker);

            //     // Set animation to marker
            //     currentLocationMarker.setAnimation(google.maps.Animation.BOUNCE);

            //     // Set timeout to stop animation, close infowindow then remove marker
            //     setTimeout(function () {
            //         currentLocationMarker.setAnimation(null);
            //         infowindow.close();
            //     }, 2000);
            // });
            // On click marker, set content and open infowindow
            google.maps.event.addListener(marker, 'click', function () {

                infowindow.setContent('<div class="d-flex flex-column gap-1 text-center"><strong>' + place.name + '</strong><span class="text-muted">' + place.formatted_address + '</span></div>');
                infowindow.open(map, this);
                toggleBounce(this);
            });
        }
        function toggleBounce(marker) {
            if (marker.getAnimation() !== null) {
                marker.setAnimation(null);
            } else {
                // Set animation to marker
                marker.setAnimation(google.maps.Animation.BOUNCE);
                // Set timeout to stop animation
                setTimeout(function () {
                    marker.setAnimation(null);
                }, 750);
            }
        }
        // If map api is loaded
        if (typeof google !== 'undefined') {
            // Initialize maps.
            $('#map').each(function () {
                initMap($(this));
            });
        } else {
            $('#map').remove();
        }
        $('#zoom-out-map').each(function () {
            $(this).on('click', function (e) {
                e.preventDefault();
                centerMap(map);
                infowindow.close();
            });
        });

        // Slider
        $('.slider').each(function() {
            $(this).slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 5000,
                fade: false,
                dots: true,
                arrows: false,
            });
        });
        $('.qr-zoom').magnificPopup({
            type: 'image',
            // Remove Close button
            showCloseBtn: false,
            zoom: {
                enabled: true,
                duration: 300,
                easing: 'ease-in-out',
            },
            image: {
                // Custom Title (Wrap with div)
                titleSrc: function (item) {
                    return '<div class="text-center mt-3 d-block fs-lg">' + item.el.attr('title') + '</div>';
                },
            },
            // On open remove padding from mfp-title
            callbacks: {
                open: function () {
                    $('.mfp-content figure').prepend('<div class="mfp-logo"><img src="assets/imgs/logo/aif-date-new.png" alt="Logo AIF 2023" width="175" height="175" /></div>');
                    $('.mfp-title').addClass('p-0');
                    $('.mfp-bottom-bar').append('<button title="Close (Esc)" type="button" class="mfp-close custom">Close</button>');
                    $('.mfp-counter').addClass('p-0');
                },
            },
        });
        $('#img-full-area, #img-umkm, #img-exhibition').zoom({
            magnify: 1.25,
        });
    };
    $(document).ready(function () {
        AIF();
        console.log('AIF 2023 - Web App v1.0.0 by Atas Nalar');
        // generatePDF();
        // Sample to load files
        //$('#rundown').load('templates/rundown.html');
    });
})(jQuery);

// Generate PDF from html file and save it to assets folder - html2pdf
function generatePDF() {
    const assets = 'templates/';
    // Get content from rundown-logo.html
    const pdflogo = $.ajax({
        url: assets + 'rundown-logo.html',
        async: false,
    }).responseText;
    // Get content from rundown.html
    const pdf = $.ajax({
        url: assets + 'rundown.html',
        async: false,
    }).responseText;
    const all = pdflogo + pdf;
    // Choose the element and save it to assets folder
    const opt = {
        margin: 0.5,
        filename: 'aif-rundown.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
    };
    // Choose the element and save it to assets folder
    html2pdf().set(opt).from(all).save();
}