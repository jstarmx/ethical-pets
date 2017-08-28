$(document).ready(function () {
  if (!OCQC) return;

  var originalBuildForm = OCQC.buildForm;

  OCQC.buildForm = function() {
    var $moduleForm = originalBuildForm.apply(this, arguments);
    $moduleForm.prepend('<label class="ocqc-label">No. in cart:</label>');
    $moduleForm.find('.sub-qty-decrease-button, .sub-quantity-input-field, .sub-qty-increase-button')
      .wrapAll("<div class='input-group' />");
    return $moduleForm;
  }
});
