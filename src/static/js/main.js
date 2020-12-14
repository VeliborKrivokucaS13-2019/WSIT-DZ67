$(document).ready(function () {
    $("#poljezaunos").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#tabelarasporeda tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
    $(".lista").click(function () {
        var value = $(this).html().toLowerCase();
        $("#poljezaunos").val(value);
        $("#tabelarasporeda tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});