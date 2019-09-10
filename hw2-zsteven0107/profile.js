function update(){
  //input value
  var dName = document.getElementById("dName");
  var eAddress = document.getElementById("eAddress");
  var pNumber = document.getElementById("pNumber");
  var zCode = document.getElementById("zCode");
  var pWord = document.getElementById("pw1");
  var pWordConfirm = document.getElementById("pw2");

  //display value
  var dNameDisplay = document.getElementById("dNameDisplay");
  var eAddressDisplay = document.getElementById("eAddressDisplay");
  var pNumberDisplay = document.getElementById("pNumberDisplay");
  var zCodeDisplay = document.getElementById("zCodeDisplay");
  var pWordDisplay = document.getElementById("pWordDisplay");
  var pWordConfirmDisplay = document.getElementById("pWordConfirmDisplay");

  //whether change value
  var dNameChange = document.getElementById("dNameChange");
  var eAddressChange = document.getElementById("eAddressChange");
  var pNumberChange = document.getElementById("pNumberChange");
  var zCodeChange = document.getElementById("zCodeChange");
  var pWordChange = document.getElementById("pWordChange");
  var pWordConfirmChange = document.getElementById("pWordConfirmChange");

  //judge format
  if(dName.value.match('^[A-Za-z][A-Za-z0-9]{0,}$')==null){alert("Form of display name is wrong!");return false;}
  if(eAddress.value.match('^[A-Za-z0-9_-]+@([A-Za-z0-9_-])+(\.[A-Za-z]{1,})$')==null){alert("Form of email address is wrong!");return false;}
  if(pNumber.value.match('[0-9]{10}$')==null){alert("Form of phone number is wrong!");return false;}
  if(zCode.value.match('^[1-9][0-9]{4}$')==null){alert("Form of zipcode is wrong!");return false;}
  if(pWord.value!=pWordConfirm.value){alert("The passwords are different!");return false;}

  //diplay
  dNameDisplay.style.display = "inline";
  var curDNameDisplay = dNameDisplay.innerHTML;
  dNameDisplay.innerHTML = dName.value;
  var curDName = dName.value;
  dName.value="";

  eAddressDisplay.style.display = "inline";
  var curEAddressDisplay = eAddressDisplay.innerHTML;
  eAddressDisplay.innerHTML = eAddress.value;
  var curEAddress = eAddress.value;
  eAddress.value="";

  pNumberDisplay.style.display = "inline";
  var curPNumberDisplay = pNumberDisplay.innerHTML;
  pNumberDisplay.innerHTML = pNumber.value;
  var curPNumber = pNumber.value;
  pNumber.value="";

  zCodeDisplay.style.display = "inline";
  var curZCodeDisplay = zCodeDisplay.innerHTML;
  zCodeDisplay.innerHTML = zCode.value;
  var curZCode = zCode.value;
  zCode.value="";

  pWordDisplay.style.display = "inline";
  var curPWordDisplay = pWordDisplay.innerHTML;
  pWordDisplay.innerHTML="";
  for(var i=0;i<pWord.value.length;i++){
    pWordDisplay.innerHTML+='*';
  }
  var curPWord = pWord.value;
  pWord.value="";

  pWordConfirmDisplay.style.display = "inline";
  pWordConfirmDisplay.innerHTML="";
  for(var i=0;i<pWordConfirm.value.length;i++){
    pWordConfirmDisplay.innerHTML+='*';
  }
  pWordConfirm.value="";


  //judege whether update
  if (curDNameDisplay!=curDName){
    dNameChange.style.display = "inline";
    dNameChange.innerHTML = " (from " + curDNameDisplay + " to " + curDName + ")";
  }
  if (curDNameDisplay==curDName){
    dNameChange.style.display = "none";
  }

  if (curEAddressDisplay!=curEAddress){
    eAddressChange.style.display = "inline";
    eAddressChange.innerHTML = " (from " + curEAddressDisplay + " to " + curEAddress + ")";
  }
  if (curEAddressDisplay==curEAddress){
    eAddressChange.style.display = "none";
  }

  if (curPNumberDisplay!=curPNumber){
    pNumberChange.style.display = "inline";
    pNumberChange.innerHTML = " (from " + curPNumberDisplay + " to " + curPNumber + ")";
  }
  if (curPNumberDisplay==curPNumber){
    pNumberChange.style.display = "none";
  }

  if (curZCodeDisplay!=curZCode){
    zCodeChange.style.display = "inline";
    zCodeChange.innerHTML = " (from " + curZCodeDisplay + " to " + curZCode + ")";
  }
  if (curZCodeDisplay==curZCode){
    zCodeChange.style.display = "none";
  }

  if (curPWord!=pWord.value){
    pWordChange.style.display = "inline";
    pWordConfirmChange.style.display = "inline";
    pWordChange.innerHTML = " (from " + curPWordDisplay + " to " + pWordDisplay.innerHTML + ")";
    pWordConfirmChange.innerHTML = " (from " + curPWordDisplay + " to " + pWordDisplay.innerHTML + ")";
  }
  if (curPWord==pWord.value){
    pWordChange.style.display = "none";
    pWordConfirmChange.style.display = "none";
  }

}
