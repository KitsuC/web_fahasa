var id;
var btnDeleteProduct = document.getElementById('btn-delete-product');
var btnDeleteProduct2 = document.getElementById('btn-delete-product2');

var deleteForm = document.forms['delete-product-form'];
const deleteModal = document.getElementById('delete-product');
const deleteModal2 = document.getElementById('delete-product2');

if (deleteModal) {
  deleteModal.addEventListener('show.bs.modal', (event) => {
    const button = event.relatedTarget;
    id = button.getAttribute('data-bs-id');
    console.log(id);
  });
  btnDeleteProduct.onclick = function () {
    deleteForm.action = '/admin/list/' + id + '?_method=DELETE'
    deleteForm.submit();
  };
}


