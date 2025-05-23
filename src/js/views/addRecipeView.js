import View from './View';
import icons from 'url:../../img/icons.svg'; // Parcel 2

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _message = 'Recipe was successfully uploaded!';
  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
  }

  toggleWindow() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }

  _addHandlerShowWindow() {
    // when the add recipe btn is clicked
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
  }

  _addHandlerHideWindow() {
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this)); // when close btn is clicked
    this._overlay.addEventListener('click', this.toggleWindow.bind(this)); // when overlay is clicked
  }

  _addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      console.log('dataArr', dataArr);
      const data = Object.fromEntries(dataArr); // Takes data from an array and formats it into an object, which is different than .entries() which takes an object and formats it into an array
      console.log('data', data);
      handler(data); // passing the object back to the handler in controller.js
    });
  }

  _generateMarkup() {}
}

export default new AddRecipeView();
