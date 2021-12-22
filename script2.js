window.addEventListener('load',function(){
    if(this.files && this.files[0]){
    document.querySelector('input[type="file"]').addEventListener('change',function(){
      var image=document.getElementById("#image_input");
      img.src=URL.createObjectURL(this.files[0]);

    })
  }
  })