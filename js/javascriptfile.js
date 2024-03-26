function showUserPanel(value, tabName){
    
    let i, mainboxcontent;
    mainboxcontent = getElementsByClassName('main_box_content');
    for(i= 0; i < mainboxcontent.length; i++ ){
        console.log(i);
        mainboxcontent[i].style.display = "none";
    }
}

function openTab(evt, tabName) {
    var i, tabcontent;
  
    // Hide all tab content
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Show the clicked tab content and activate the clicked tab link
    document.getElementById(tabName).style.display = "block";
  //   evt.currentTarget.className += " active";
  }
  
