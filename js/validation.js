const form = document.getElementById('form');
const fname = document.getElementById('fname');
const email = document.getElementById('email');
const text = document.getElementById('text');
const button = document.getElementById('btn');


form.addEventListener('submit', (e) => {
  e.defaultPrevented();

  validInputs();

});

btn.addEventListener('click', (e) => {
    e.defaultPrevented();
    validInputs();
})

const setError = (Element,message) => {
    const inputcontrol = Element.parentElement;
    const errordisplay= inputcontrol.queryselectro('.error');

    errordisplay.innerText =message;

    inputcontrol.classlist.add('error');
    inputcontrol.classlist.remove('success');

}


const setSuccess =Element => {
    
    const inputcontrol = Element.parentElement;
    const errordisplay= inputcontrol.queryselectro('.error');

    errordisplay.innerText =' ';
    inputcontrol.classlist.remove('error');
    inputcontrol.classlist.add('success');


}

const isValidemail =email =>{
    const re=/ [a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    return re.test(String(email).toLowerCase());
}


const validInputs = () => {
    const firstname = fname.value.trim();
    const emailvalue = email.value.trim();
    const textvalue = text.value.trim();

    if (firstname.length == 0){

        setError =(fname,'name required..');
    }else{
        setSuccess(fname);
    }

    if (emailvalue.length == 0){
        setError(email,'email required');

    }else if(!isValidemail(emailvalue)){
        setError(email,'provide a valid email..');
    }
    else{
        setSuccess(email)
    }

};



// function validate()
// {

//    if( document.myForm.firstname.value == "" )
//    {
//      alert( "Please provide your name!" );
//      document.myForm.firstname.focus() ;
//      return false;
//    }
//    if( document.myForm.email.value == "" )
//    {
//      alert( "Please provide your Email!" );
//      document.myForm.email.focus() ;
//      return false;
//    }
//    return( true );
// }

// function validateForm() {

//     var x=document.forms["myForm"]["fname"].value;
//     if (x==null || x=="")
//      {
//       alert("Name must be filled out");
//       return false;
//      }
    
//     var y=document.forms["myForm"]["email"].value;
//     if (y==null || y=="") {
//       alert("Password name must be filled out");
//       return false;
//     }

//     var y=document.forms["myForm"]["text"].value;
//     if (y==null || y=="") {
//       alert("Password name must be filled out");
//       return false;
//     }
// }
