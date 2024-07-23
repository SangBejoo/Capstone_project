const $customRange = $('input[type="range"]');
let $customHandle;

$customRange
  .rangeslider({
    polyfill: false,
    onInit: function() {
      $customHandle = $('.rangeslider__handle', this.$range);
      updateHandle($customHandle[0], this.value);
    }
  })
  .on('input', function() {
    updateHandle($customHandle[0], this.value);
  });

// Update the value inside the custom slider handle
function updateHandle(element, value) {
  element.textContent = value;
}
