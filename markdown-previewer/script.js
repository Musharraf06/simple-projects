const markdown_container = document.querySelector('.markdown');
const preview_container = document.querySelector('.preview');
const file_selecter = document.querySelector('.md_file_selecter');

function load_md_file() {
  if (file_selecter && file_selecter.files[0]) {
    const myFile = file_selecter.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', function (e) {
      markdown_container.value = e.target.result;
      update_previewer(e.target.result);
    });

    reader.readAsBinaryString(myFile);
  }
}

function update_previewer(value) {
  preview_container.innerHTML = marked.parse(value);
}

update_previewer(markdown_container.value);
