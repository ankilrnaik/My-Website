$(function() {
  $('progress').each(function() {
    var max = $(this).val();
    $(this).val(0).animate({ value: max }, { duration: 2000, easing: 'easeOutCirc' });
			});
});

function btntest_onclick()
{
	window.location.href = "#/my-workexperience";
}

function kkk() {

	setTimeout(btntest_onclick, 100);

}

function btntest2_onclick()
{
	window.location.href = "#/my-projects";
}