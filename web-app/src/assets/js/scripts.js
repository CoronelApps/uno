$(document).ready(function () {
    $('#example').DataTable({
        select: true,
        pageLength: 5,
        lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 'All']],
        columnDefs: [
            {
                targets: [0, 1, 2],
                className: 'mdl-data-table__cell--non-numeric'
            }
        ]
    });
    //var simplemde = new SimpleMDE();
    var stepEditor = new SimpleMDE({ element: document.getElementById("sample5") });
    var expectedEditor = new SimpleMDE({ element: document.getElementById("sample6") });

    $(".step:last").addClass("active");
    $(".expected:last").addClass("active");

    $("#next").click(function () {
        $(".step.active:last").removeClass("active");
        $(".step:last").addClass("active");
        stepEditor.value("");
        $(".expected.active:last").removeClass("active");
        $(".expected:last").addClass("active"); 
        expectedEditor.value("");
    })

    $(".CodeMirror.cm-s-paper.CodeMirror-wrap").keyup(function () {
        $(".step.active").html("<strong>Description:</strong>" + stepEditor.markdown(stepEditor.value()));
    });

    $(".CodeMirror.cm-s-paper.CodeMirror-wrap:eq( 1 )").keyup(function () {
        $(".expected.active").html("<strong>Expected:</strong>" + stepEditor.markdown(expectedEditor.value()));
    }); 
});







