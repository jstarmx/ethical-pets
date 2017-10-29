$(document).ready(function () {
  if (!OCQC) return;

  var originalBuildForm = OCQC.buildForm;

  OCQC.buildForm = function() {
    var $moduleForm = originalBuildForm.apply(this, arguments);
    $moduleForm.prepend('<label class="ocqc-label">No. in cart:</label>');
    $moduleForm.find('.sub-qty-decrease-button, .sub-quantity-input-field, .sub-qty-increase-button')
      .wrapAll("<div class='input-group' />");
    $moduleForm.find('.input-group').after('<div class="go-to-cart"><strong><a href="/order">Go to cart</a></strong></div>');
    return $moduleForm;
  }
});
