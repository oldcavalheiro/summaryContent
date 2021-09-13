// add storage
localStorage.setItem('StorageName', selectTag.innerHTML);

// clear storage
localStorage.removeItem('StorageName');

// loading storage
window.onload = () => {
  selectTag.innerHTML = localStorage.getItem('storageCartItems');
}

//      local remains after page close, (save)
// session is deleted after page close, (don't save)
