(function($) {
  function formatString() {
    var str = arguments[0];
    var i = arguments.length - 1;

    while (i--) {
      str = str.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i + 1]);
    }
    return str;
  }

  $.fn.named_dropdown = function() {
    var $trigger = this;
    var $content = $('#' + $trigger.data('activates'));
    var $items = $content.find('.dropdown-item');
    var $activeItem = $content.find('.dropdown-item.active').first();
    var $label = $trigger.find('.dropdown-label');

    function updateLabel(data) {
      var format = $label.data('format');
      $label.text(formatString(format, data));
    }

    $(document).ready(function() {
      $trigger.dropdown();
      updateLabel($activeItem.text());
      $items.click(function() {
        updateLabel($(this).text());
      });
    });
  };
})(jQuery);
