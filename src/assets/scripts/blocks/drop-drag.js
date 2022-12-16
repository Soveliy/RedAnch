// popup.js

// Popup

const dragDrop = () => {

   const fileUploader = document.getElementById('file-uploader');
   const feedback = document.getElementById('feedback');

   fileUploader.addEventListener('change', (event) => {
      const file = event.target.files[0];
      console.log('file', file);

      const size = file.size;
      console.log('size', size);
      let msg = '';

      if (size > 1024 * 1024) {
         msg = `<span style="color:red;">The allowed file size is 1MB. The file you are trying to upload is of ${returnFileSize(size)}</span>`;
      } else {
         msg = `<span style="color:green;"> A ${returnFileSize(size)} file has been uploaded successfully. </span>`;
      }
      feedback.innerHTML = msg;
   });

   function returnFileSize(number) {
      if (number < 1024) {
         return number + 'bytes';
      } else if (number >= 1024 && number < 1048576) {
         return (number / 1024).toFixed(2) + 'KB';
      } else if (number >= 1048576) {
         return (number / 1048576).toFixed(2) + 'MB';
      }
   }

};

//initPopup();