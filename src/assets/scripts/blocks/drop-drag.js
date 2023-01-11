// popup.js

// Popup

const dragDrop = () => {

   const jsDrags = document.querySelectorAll('.form-box__window');
   if (!jsDrags?.length) return;

   jsDrags.forEach((jsDrag) => {
      if (jsDrag.classList.contains('form-box-drag-js--order')) {
         console.log(jsDrag)
         /* getElementById */
         function $class(classElem) {
            return jsDrag.querySelector(classElem);
         }

         /* вывод сообщений */
         function Output(msg) {
            let m = $class(".messagesCst");
            m.innerHTML = msg
         }

         /* проверка поддержки API */
         if (window.File && window.FileList && window.FileReader) {
            Init();
         }
         /* инициализация */
         function Init() {
            let fileselect = $class(".fileselect"),
                filedrag = $class(".filedrag");
                fileBtn = $class(".drag-drop__custom")

               

                  /* выбор файла */
                  fileselect.addEventListener("change", FileSelectHandler, false);

                  /* проверка поддержки XHR2 */
                  let xhr = new XMLHttpRequest();
                  if (xhr.upload) {
                     /* сброс файла */
                     filedrag.addEventListener("dragover", FileDragHover, false);
                     filedrag.addEventListener("dragleave", FileDragHover, false);
                     filedrag.addEventListener("drop", FileSelectHandler, false);
                     // filedrag.style.display = "block";

               
                  
                  }
         }

         // Файл над нужной областью
         function FileDragHover(e) {
            e.stopPropagation();
            e.preventDefault();
            // e.currentTarget.classList.add("isHover")
            console.log(filedrag)
            if (e.type == "dragover"){
               e.currentTarget.classList.add("isHover")
            } else{
               e.currentTarget.classList.remove("isHover")
            }
   
         }
         function clearInputValue(e){
            e.target.value = null;
            if (e.target.files){
               e.target.files = null;
            }
            if (e.dataTransfer?.files){
               e.dataTransfer.clearData();
               // e.dataTransfer.files = null;
            }
         }

         // выбор файла
         function FileSelectHandler(e) {

            $(e.currentTarget).closest(".filedrag").removeClass("isError")
            FileDragHover(e);
            console.log(e.currentTarget.value)
            let files = e.target.files || e.dataTransfer.files;
            console.log(files)
            if (files.length > 1){
               const filesDataTransfer = new DataTransfer();
               filesDataTransfer.items.add(files[0]);
               e.target.files = filesDataTransfer.files;
               files = e.target.files;
            }
          
          
            if (files[0].size > 10485760){
               $(e.currentTarget).closest(".filedrag").addClass("isError")
               Output(
                  "<div class='fileDrop__error'>Файл слишком большой</div>"
               )
            
               clearInputValue(e);
               return
              
            }
            
            // парсим все объекты типа File
            for (const file of files) {
              
              
               ParseFile(file);
               
            }
           $(e.currentTarget).closest(".filedrag").addClass("isLoaded")
         }

         function ParseFile(file) {
            
          
           
            Output(
               "<div class='fileDrop__msg'>" + file.name +"</div>"
            );
         }
        
        
      }
   })

   
};
$('body').on('click', '.fileDrop__button--clear', function() {
   $(this).closest(".fileDrop").removeClass("isLoaded")
   $(this).closest(".fileDrop").find("input").val("");
});

dragDrop();
