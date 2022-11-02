function uploadingPhotos() {
  let files = [],
    input = document.querySelector("#photos-upload"),
    container = document.querySelector(".company-photos__gallery");

  input.addEventListener("change", () => {
    let file = input.files;
    if (file.length == 0) return;

    for (let i = 0; i < file.length; i++) {
      if (file[i].type.split("/")[0] != "image") continue;
      if (!files.some((e) => e.name == file[i].name)) files.push(file[i]);
    }
    showImages();
    dragImage();
  });

  function showImages() {
    container.innerHTML = files.reduce((prev, curr, index) => {
      return `${prev}
      <div class="company-photos__image draggable" draggable="true" id="drag-${index}" >

        <svg class="company-photos__delete" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="13" cy="13" r="13" fill="white"/>
        <path d="M14.2273 7.59026C14.2273 7.20449 14.074 6.83452 13.8012 6.56174C13.5285 6.28896 13.1585 6.13571 12.7727 6.13571C12.387 6.13571 12.017 6.28896 11.7442 6.56174C11.4714 6.83452 11.3182 7.20449 11.3182 7.59026H10.3485C10.3485 6.94731 10.6039 6.33069 11.0585 5.87606C11.5132 5.42143 12.1298 5.16602 12.7727 5.16602C13.4157 5.16602 14.0323 5.42143 14.4869 5.87606C14.9416 6.33069 15.197 6.94731 15.197 7.59026H19.5606C19.6892 7.59026 19.8125 7.64134 19.9034 7.73227C19.9944 7.82319 20.0455 7.94652 20.0455 8.07511C20.0455 8.2037 19.9944 8.32702 19.9034 8.41795C19.8125 8.50887 19.6892 8.55995 19.5606 8.55995H19.0234L17.7667 19.4496C17.712 19.9223 17.4854 20.3583 17.1301 20.6748C16.7749 20.9912 16.3157 21.1661 15.8399 21.166H9.70558C9.22979 21.1661 8.77058 20.9912 8.41531 20.6748C8.06004 20.3583 7.8335 19.9223 7.77879 19.4496L6.52109 8.55995H5.98485C5.87137 8.55999 5.76147 8.52022 5.67429 8.44758C5.58712 8.37493 5.52818 8.274 5.50776 8.16238L5.5 8.07511C5.5 7.94652 5.55108 7.82319 5.64201 7.73227C5.73294 7.64134 5.85626 7.59026 5.98485 7.59026H14.2273ZM18.0459 8.55995H7.49855L8.7417 19.3381C8.76906 19.5745 8.8824 19.7926 9.06014 19.9509C9.23788 20.1091 9.4676 20.1965 9.70558 20.1963H15.8399C16.0777 20.1962 16.3072 20.1088 16.4847 19.9505C16.6622 19.7923 16.7754 19.5744 16.8028 19.3381L18.0459 8.55995ZM11.3182 10.9842C11.5558 10.9842 11.7545 11.1345 11.7953 11.3323L11.803 11.4089V17.3483C11.803 17.582 11.5858 17.7721 11.3182 17.7721C11.0806 17.7721 10.8818 17.6218 10.8411 17.424L10.8333 17.3473V11.4099C10.8333 11.1752 11.0505 10.9852 11.3182 10.9852V10.9842ZM14.2273 10.9842C14.4648 10.9842 14.6636 11.1345 14.7044 11.3323L14.7121 11.4089V17.3483C14.7121 17.582 14.4949 17.7721 14.2273 17.7721C13.9897 17.7721 13.7909 17.6218 13.7502 17.424L13.7424 17.3473V11.4099C13.7424 11.1752 13.9596 10.9852 14.2273 10.9852V10.9842Z"/>
        </svg>        
        <img src="${URL.createObjectURL(curr)}" />
      </div>`;
    }, "");

    document
      .querySelectorAll(".company-photos__delete")
      .forEach((element, i) => {
        element.addEventListener("click", () => {
          delImage(i);
        });
      });
  }

  function delImage(index) {
    files.splice(index, 1);
    showImages();
  }
}
uploadingPhotos();

function dragImage() {
  const dropzoneSource = document.querySelector(".source");
  const dropzone = document.querySelector(".target");
  const dropzones = [...document.querySelectorAll(".dropzone")];
  const draggables = [...document.querySelectorAll(".draggable")];

  function getDragAfterElement(container, x) {
    const draggableElements = [
      ...container.querySelectorAll(".draggable:not(.is-dragging)"),
    ];

    return draggableElements.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();

        const offset = x - box.left - box.width / 2;
        console.log(offset);

        if (offset < 0 && offset > closest.offset) {
          return {
            offset,
            element: child,
          };
        } else {
          return closest;
        }
      },
      { offset: Number.NEGATIVE_INFINITY },
    ).element;
  }

  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", () => {
      draggable.classList.add("is-dragging");
    });

    draggable.addEventListener("dragend", () => {
      draggable.classList.remove("is-dragging");
    });
  });

  dropzones.forEach((zone) => {
    zone.addEventListener("dragover", (e) => {
      e.preventDefault();
      const afterElement = getDragAfterElement(zone, e.clientY);
      const draggable = document.querySelector(".is-dragging");
      if (afterElement === null) {
        zone.appendChild(draggable);
      } else {
        zone.insertBefore(draggable, afterElement);
      }
    });
  });
}
