function sidebarAction(){
  const header = document.querySelector('header');
  const sidebar = document.querySelector('.showsidebar');
  const isChecked = document.getElementById("check").checked;
  if(!isChecked){
    header.classList.add('header');
    sidebar.classList.add('sidebar')
    sidebar.style.left = '0';    
  }
  else{
    sidebar.style.left = '100%';
      header.classList.remove('header');
      sidebar.classList.remove('sidebar');
      clearTimeout(intervalId);
  }
}

function socialMediaSiderbar(){
  const siderbar =document.querySelector('.social-media-con');
  const isChecked = document.getElementById('check2').checked;
  if(isChecked){
    siderbar.style.right = '0';   
  }
  else{
    siderbar.style.right = '100%';  
  }

}