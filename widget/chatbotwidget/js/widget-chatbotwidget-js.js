define(
    // Dependencies
    ['jquery', 'knockout', 'https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.3/socket.io.js'],

    function($, ko, socket) {
        'use strict';

        var io = socket;
        var response = "";
        var className = "";


        var clickSendMessageEvent = function() {

            $("#sendMessage").click(function(e) {
                e.preventDefault();

                socket = io.connect('https://planetaapp-gse00010894.apaas.em3.oraclecloud.com');
                socket.emit('clientData', $('#customerText').val());
                $('.customerInput').append($('#customerText').val() + "<br><br>");
                $('#customerText').val("");

                socket.on('serverData', function(data) {
                    response = data.text;
                    if (data.hasOwnProperty('choices')) {
                        for (var i = 0; i < data.choices.length; i++) {
                            $('.botText').append('<a href="#" class="' + data.choices[i] + '">' + data.choices[i] + "</a>" + "<br><br>");

                            $(`.${data.choices[i]}`).click(function() {
                                className = $(this).text();
                                clickCallback();
                            });
                        }
                    } else {
                        $('.botText').append(response + "<br><br>");
                    }

                });

            });
        };

        function clickCallback() {
            socket.emit('clientData', className);
            console.log(className);
        }


        return {
            onLoad: function(widget) {},

            clickSendMessageEvent

        } // end of return
    });