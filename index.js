console.log('bobbyhadz.com');

const textarea = document.getElementById('message');

// ✅ Clear the textarea value
textarea.value = '';

// ✅ Clear textarea value on click
const btn = document.getElementById('btn');

btn.addEventListener('click', function handleClick() {
  // 👇️ log value before clearing it
  console.log(textarea.value);

  // 👇️ clear textarea value
  textarea.value = '';
});
