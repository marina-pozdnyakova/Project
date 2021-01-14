  var formElement=document.forms.INFO;
  formElement.onsubmit=validateInfoForm;

  function validateInfoForm() {

    var imElement=formElement.elements.IM;
    var famElement=formElement.elements.FAM;
    var emailElement = formElement.elements.EMAIL;
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    var imValue=imElement.value;
    var famValue=famElement.value;
    var emailValue = emailElement.value;

    if ( imValue.length>10 ) {
      alert('Введите пожалуйста имя не длиннее 10 символов!');
      imElement.focus();
      return false;
    }

    if ( famValue.length>30 ) {
      alert('Введите пожалуйста фамилию не длиннее 30 символов!');
      famElement.focus();
      return false;
    }

    if(reg.test(emailValue) == false) {
      alert('Введите корректный e-mail');
      emailElement.focus();
      return false;
    }
    return true;
  }