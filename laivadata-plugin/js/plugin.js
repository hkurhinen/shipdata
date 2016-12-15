(function ($) {
  'use strict';

  $('#ship-api-search').shipApi({
    onShipSelect: function (ship, html) {
      var dialog = bootbox.dialog({
        title: ship.name,
        message: html
      });
    },
    afterSearch: function (search) {
      var data = {
        action: 'ships_searched',
        query: search.query,
        offset: search.offset
      };

      $.post(ajaxConfig.url, data, function (response) {
        alert('Got this from the server: ' + response);
      });
    }
  });

})(jQuery);