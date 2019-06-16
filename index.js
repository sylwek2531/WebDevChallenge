/**
 * Created by admin on 2018-04-11.
 */
$(document).ready(function ()
{

    $('.inp-group').each(function ()
    {
        var $this = $(this);
        if (!$this.val()) {
            $this.parent().removeClass("value");
        } else {
            $this.parent().addClass("value");
        }
    });

    $('.inp-group').keyup(function ()
    {
        var $this = $(this).find('.inp');
        if (!$this.val()) {
            $this.parent().removeClass("value");
        } else {
            $this.parent().addClass("value");
        }
    });
    $('.inp-group').focusout(function ()
    {
        var $this = $(this);
        if (!$this.val()) {
            $this.parent().removeClass("value");
        } else {
            $this.parent().addClass("value");
        }
    });
});
