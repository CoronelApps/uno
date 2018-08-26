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
    var simplemde1 = new SimpleMDE({ element: document.getElementById("sample5") });
    var simplemde2 = new SimpleMDE({ element: document.getElementById("sample6") });
    $( ".CodeMirror.cm-s-paper.CodeMirror-wrap" ).keyup(function() {
        $(".active").html("<strong>Description:</strong>" + simplemde1.markdown(simplemde1.value()));
      });
      $( ".CodeMirror.cm-s-paper.CodeMirror-wrap:eq( 1 )" ).keyup(function() {
        $("#expected1").html("<strong>Expected:</strong>" + simplemde1.markdown(simplemde2.value()));
      });
      $("#next").click(function(){
        $(".active:last").removeClass("active");
    })
});



