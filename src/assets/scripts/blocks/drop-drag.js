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
            // debugger;
            console.log("eto ono", e.currentTarget)
            // if (( e.target.files || e.dataTransfer.files).length){
            //    clearInputValue(e);
            // }
            FileDragHover(e);
            console.log(e.currentTarget.value)
            // проходимся по объекту FileList 
            let files = e.target.files || e.dataTransfer.files;
            console.log(files)
            if (files.length > 1){
               const filesDataTransfer = new DataTransfer();
               filesDataTransfer.items.add(files[0]);
               e.target.files = filesDataTransfer.files;
               files = e.target.files;
               // files = e.dataTransfer.files.items;
               // console.log(e.target.files)
               // const newFiles = e.target.files;
               // for (let i = 0; i < newFiles.length; i++) {
               //    ParseFile(newFiles[i]);
                  
               // }
               // return
            }
          
            console.log("file ", fileselect.value)
            if (files[0].size > 10485760){
               // debugger;
               Output(
                  "<p>Файл слишком большой</p>"
               )
               // fileselect.value = null;
               // $(".fileselect").val("");
               clearInputValue(e);
               console.log(files)
               return
               // e.currentTarget.value = null
            }
            
            // парсим все объекты типа File
            for (const file of files) {
              
              
               ParseFile(file);
            }
         }

         function ParseFile(file) {
            console.log(file.size)
            // TODO:
            
            // 10485760
            // file.size
            fileBtn.classList.add("test")
           
            Output(
               "<p>Информация о файле: <strong>" + file.name +
               "</strong> тип: <strong>" + file.type +
               "</strong> размер: <strong>" + file.size +
               "</strong> bytes</p>"
            );
         }
      }
   })
};

dragDrop();
