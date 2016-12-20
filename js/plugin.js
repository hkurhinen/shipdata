(function ($) {
  'use strict';

  function parsePreviousSearches(data) {
    if (data && data.length > 0) {
      var list = $('<ul>');
      for (var i = 0; i < data.length; i++) {
        list.prepend(
          $('<li>').append(
            $('<a>')
              .attr({
                'href': '#',
                'data-query': data[i].query,
                'data-offset': data[i].offset
              })
              .addClass('ship-api-prev-search')
              .text(data[i].query)
          ));
      }
      return list;
    } else {
      return $('<p>').text('Ei aiempia hakuja.');
    }
  }


  $('#ship-api-search').shipApi({
    prevSearches: parsePreviousSearches(JSON.parse(previousSearches.data)),
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
        if (response !== 'not-logged-in') {
          $('#ship-api-search').trigger('set-prev-searches', parsePreviousSearches(JSON.parse(response)));
        }
      });
    }
  });

  $(document).on('click', '.ship-api-prev-search', function (e) {
    e.preventDefault();
    var query = $(this).attr('data-query');
    $('#ship-api-search').trigger('find-ships', query);
  });

})(jQuery);