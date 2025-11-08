class Elroid {
  constructor(options) {
    this.el = options.el;
    this.data = options.data;

    this.compile();
    this.bindEvents();
  }

  compile() {
    const elements = document.querySelectorAll(this.el);
    elements.forEach((element) => {
      this.compileElement(element);
    });
  }

  compileElement(element) {
    const template = element.innerHTML;
    const compiled = this.compileTemplate(template);
    element.innerHTML = compiled;
  }

  compileTemplate(template) {
    const regex = /\{\{(.*?)\}\}/g;
    const compiled = template.replace(regex, (match, p1) => {
      return p1.split('.').reduce((acc, key) => acc[key.trim()], this.data) || '';
    });
    return compiled;
  }

  bindEvents() {
    const elements = document.querySelectorAll('[el-click]');
    elements.forEach((element) => {
      const methodName = element.getAttribute('el-click');
      const method = this.data.methods[methodName];
      if (method && typeof method === 'function') {
        element.addEventListener('click', method.bind(this.data));
      }
    });
  }
}

// Component definition
class ElroidComponent {
  constructor(options) {
    this.template = options.template;
    this.data = options.data;
    this.el = document.createElement('div');

    this.compile();
  }

  compile() {
    const compiledTemplate = this.compileTemplate(this.template);
    this.el.innerHTML = compiledTemplate;
  }

  compileTemplate(template) {
    const regex = /\{\{(.*?)\}\}/g;
    const compiled = template.replace(regex, (match, p1) => {
      return p1.split('.').reduce((acc, key) => acc[key.trim()], this.data) || '';
    });
    return compiled;
  }
}