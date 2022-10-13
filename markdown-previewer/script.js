const markdown_container = document.querySelector('.markdown');
const preview_container = document.querySelector('.preview');

function update_previewer() {
  preview_container.innerHTML = marked.parse(
    markdown_container.value
  );
}
