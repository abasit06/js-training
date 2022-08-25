const Component = {
  name: "generic-component",
  tag: "div",
  render() {
    this.elm = document.createElement(this.tag);
    this.elm.className = this.name;
    document.body.appendChild(this.elm);
  }
};

const Clickable = {
  listenToClickEvents(elm) {
    elm.addEventListener("click", (event) => this.onClick(event));
  },
  onClick(event) {
    console.log("click event", event);
  }
};

const Focusable = {
  listenToFocusEvents(elm) {
    elm.addEventListener("focus", (event) => this.onFocus(event));
    elm.addEventListener("blur", (event) => this.onBlur(event));
  },
  onFocus(event) {
    console.log("focus event", event);
  },
  onBlur(event) {
    console.log("blur event", event);
  }
};

const Editable = {
  listenToKeyboardEvents(elm) {
    elm.addEventListener("keyup", (event) => this.onKey(event));
  },
  onKey(event) {
    console.log("key pressed", event);
  }
};

const Button = Object.assign(
  {
    text: "Button",
    tag: "button",
    name: "button",
    render() {
      super.render();
      this.elm.textContent = this.text;
      // TODO: listen for click and focus events
      this.listenToClickEvents(this.elm);
      this.listenToFocusEvents(this.elm);
      return this.elm;
    }
  },
  Clickable, // < this is encapsulation (add a Clickable property)
  Focusable
);

const Input = Object.assign(
  {
    value: null,
    tag: "input",
    render() {
      super.render();
      this.elm.value = this.value;
      // TODO: listen for focus and keyup events
      this.listenToFocusEvents(this.elm);
      this.listenToKeyboardEvents(this.elm);
      return this.elm;
    }
  },
  Editable,
  Focusable
);

const TextInput = {
  name: "text-input",
  onKey(event) {
    this.value = event.target.value;
  }
};

//TODO: define and implement the relations between all these objects:
// delegation, composition or encapsulation ?
Object.setPrototypeOf(TextInput, Input);
Object.setPrototypeOf(Input, Component);
Object.setPrototypeOf(Button, Component);
// Button is COMPOSED with Clickable, Focusable
// Object.assign(Button, Clickable);
// Object.assign(Button, Focusable);
// Input is COMPOSED with Editable, Focusable
// Object.assign(Input, Clickable);
// Object.assign(Input, Focusable);

/**
 * Example of use
 * Open index.html in Browser view to test
 */

let text = Object.create(TextInput);
text.value = "Bob";
text.render();

let btn = Object.create(Button);
btn.text = "Salut !";
btn.onClick = () => alert(`Salut ${text.value} !`);
btn.render();
