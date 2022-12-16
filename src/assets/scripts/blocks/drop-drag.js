// popup.js

// Popup

const dragDrop = () => {

   // const fileUploader = document.getElementById('file-uploader');
   // const feedback = document.getElementById('feedback');

   // fileUploader.addEventListener('change', (event) => {
   //    const file = event.target.files[0];
   //    console.log('file', file);

   //    const size = file.size;
   //    console.log('size', size);
   //    let msg = '';

   //    if (size > 1024 * 1024) {
   //       msg = `<span style="color:red;">The allowed file size is 1MB. The file you are trying to upload is of ${returnFileSize(size)}</span>`;
   //    } else {
   //       msg = `<span style="color:green;"> A ${returnFileSize(size)} file has been uploaded successfully. </span>`;
   //    }
   //    feedback.innerHTML = msg;
   // });

   // function returnFileSize(number) {
   //    if (number < 1024) {
   //       return number + 'bytes';
   //    } else if (number >= 1024 && number < 1048576) {
   //       return (number / 1024).toFixed(2) + 'KB';
   //    } else if (number >= 1048576) {
   //       return (number / 1048576).toFixed(2) + 'MB';
   //    }
   // }

   // let dropZone = $('#dropZone'),
   //    maxFileSize = 1000000; // максимальный размер фалйа - 1 мб.

   // // Проверка поддержки браузером
   // if (typeof (window.FileReader) == 'undefined') {
   //    dropZone.text('Не поддерживается браузером!');
   //    dropZone.addClass('error');
   // }

   // // Добавляем класс hover при наведении
   // dropZone[0].ondragover = function () {
   //    dropZone.addClass('hover');
   //    return false;
   // };

   // // Убираем класс hover
   // dropZone[0].ondragleave = function () {
   //    dropZone.removeClass('hover');
   //    return false;
   // };

   // // Обрабатываем событие Drop
   // dropZone[0].ondrop = function (event) {
   //    event.preventDefault();
   //    dropZone.removeClass('hover');
   //    dropZone.addClass('drop');

   //    var file = event.dataTransfer.files[0];

   //    // Проверяем размер файла
   //    if (file.size > maxFileSize) {
   //       dropZone.text('Файл слишком большой!');
   //       dropZone.addClass('error');
   //       return false;
   //    }

   //    // Создаем запрос
   //    var xhr = new XMLHttpRequest();
   //    xhr.upload.addEventListener('progress', uploadProgress, false);
   //    xhr.onreadystatechange = stateChange;
   //    xhr.open('POST', '/upload.php');
   //    xhr.setRequestHeader('X-FILE-NAME', file.name);
   //    xhr.send(file);
   // };

   // // Показываем процент загрузки
   // function uploadProgress(event) {
   //    var percent = parseInt(event.loaded / event.total * 100);
   //    dropZone.text('Загрузка: ' + percent + '%');
   // }

   // // Пост обрабочик
   // function stateChange(event) {
   //    if (event.target.readyState == 4) {
   //       if (event.target.status == 200) {
   //          dropZone.text('Загрузка успешно завершена!');
   //       } else {
   //          dropZone.text('Произошла ошибка!');
   //          dropZone.addClass('error');
   //       }
   //    }
   // }

   // const BYTES_IN_MB = 1048576

   // const dropFileZone = document.getElementById('dropFile_Zone')
   // const hintText = document.getElementById('uploadFile_Hint')
   // const outputText = document.getElementById('uploadFile_Status')
   // const loaderImage = document.getElementById('uploadFile_Loader')
   // let fileInstance

   // ['dragover', 'drop'].forEach(function (event) {
   //    document.addEventListener(event, function (evt) {
   //       evt.preventDefault()
   //       return false
   //    })
   // })

   // dropFileZone.addEventListener('dragenter', function (event) {
   //    dropFileZone.classList.add('upload-zone_dragover')
   // })

   // dropFileZone.addEventListener('dragleave', function (event) {
   //    dropFileZone.classList.remove('upload-zone_dragover')
   // })

   // dropFileZone.addEventListener('drop', function (event) {
   //    fileInstance = event.dataTransfer.files[0]
   //    if (fileInstance.size > 5 * BYTES_IN_MB) {
   //       alert('Принимается файл до 5 МБ')
   //       return false
   //    }
   //    if (fileInstance.type.startsWith('image/')) {
   //       processingUploadFile(fileInstance)
   //    } else {
   //       alert('Можно загружать только изображения')
   //       return false
   //    }
   // })

   // function processingUploadFile(fileInstanceUpload) {
   //    if (fileInstanceUpload != undefined) {
   //       const dropZoneData = new FormData()
   //       const xhr = new XMLHttpRequest()

   //       dropZoneData.append('file', fileInstanceUpload)

   //       xhr.upload.addEventListener('progress', function () {
   //          hintText.classList.remove('upload-hint_visible')
   //          loaderImage.classList.add('upload-loader_visible')
   //       })

   //       xhr.open('POST', 'upload_processing.php', true)

   //       xhr.send(dropZoneData)

   //       xhr.onload = function (event) {
   //          if (xhr.status == 200) {
   //             loaderImage.classList.remove('upload-loader_visible')
   //             outputText.textContent = `Файл «${fileInstanceUpload.name}» загружен успешно`
   //          } else {
   //             loaderImage.classList.remove('upload-loader_visible')
   //             outputText.textContent = `Файл не загружен. Ошибка ${xhr.status} при загрузке файла.`
   //          }
   //       }
   //    }
   // }

   /* getElementById */
   function $id(id) {
      return document.getElementById(id);
   }

   /* вывод сообщений */
   function Output(msg) {
      var m = $id("messages");
      m.innerHTML = msg + m.innerHTML;
   }

   /* проверка поддержки API */
   if (window.File && window.FileList && window.FileReader) {
      Init();
   }
   /* инициализация */
   function Init() {
      var fileselect = $id("fileselect"),
         filedrag = $id("filedrag"),
         submitbutton = $id("submitbutton");

      /* выбор файла */
      fileselect.addEventListener("change", FileSelectHandler, false);

      /* проверка поддержки XHR2 */
      var xhr = new XMLHttpRequest();
      if (xhr.upload) {
         /* сброс файла */
         filedrag.addEventListener("dragover", FileDragHover, false);
         filedrag.addEventListener("dragleave", FileDragHover, false);
         filedrag.addEventListener("drop", FileSelectHandler, false);
         filedrag.style.display = "block";

         /* удаление кнопки сабмитта */
         submitbutton.style.display = "none";
      }
   }

   // Файл над нужной областью
   function FileDragHover(e) {
      e.stopPropagation();
      e.preventDefault();
      e.target.className = (e.type == "dragover" ? "hover" : "");
   }

   // выбор файла
   function FileSelectHandler(e) {
      FileDragHover(e);

      // проходимся по объекту FileList 
      var files = e.target.files || e.dataTransfer.files;

      // парсим все объекты типа File
      for (var i = 0, f; f = files[i]; i++) {
         ParseFile(f);
      }
   }

   function ParseFile(file) {
      Output(
         "<p>File information: <strong>" + file.name +
         "</strong> type: <strong>" + file.type +
         "</strong> size: <strong>" + file.size +
         "</strong> bytes</p>"
      );
   }

};

dragDrop();