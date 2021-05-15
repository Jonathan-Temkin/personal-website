// When the user submits a form:
//
//     if the name field is valid (not blank):
//         hide name feedback
//     else:
//         show name feedback
//
//     if the email field is valid (contains a valid email address):
//         hide email feedback
//     else:
//         show email feedback_
//
//     if the project type is valid (not blank):
//         hide project type feedback
//     else:
//         show project type feedback
//
$("#projectSampleForm").on("submit", function() {
    var formValid = true;

      // NAME FIELD
    if( $("#name").prop("validity").valid ) {
      $("#nameFeedback").addClass("hidden");
    }
    else {
      $("#nameFeedback").removeClass("hidden");
      formValid = false;
  };

    // EMAIL FIELD
    if( $("#email").prop("validity").valid ) {
      $("#emailFeedback").addClass("hidden");
    }
    else {
      $("#emailFeedback").removeClass("hidden");
      formValid = false;
  };

    // PROJECT TYPE FIELD
    if( $("#projectType").prop("validity").valid ) {
      $("#typeFeedback").addClass("hidden");
    }
    else {
      $("#typeFeedback").removeClass("hidden");
      formValid = false;
  };

    // //protject type is required field
    // if ( $("#projectType").val() ) {
    //     $("#typeFeedback").addClass("hidden");
    // }
    // else {
    //     $("#typefeedback").removeClass("hidden");
    //     formValid = false;
    // }

  return formValid;
});
