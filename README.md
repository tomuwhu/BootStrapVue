### BootStrapVue Hello World WebApp
Hello world app.
- [BootStrapVue](https://bootstrap-vue.js.org/)
- [Vue.js](https://vuejs.org/v2/guide/index.html)
- [EJS](http://ejs.co/)
- [ExpressJS](https://expressjs.com/)

### File upload example
1. index.ejs
```html
<br>
<input type="file" @change="f($event)"><br>
<pre class="text-left">{{text}}</pre>
```
2. index.js (methods)
```javascript
f: function(e) {
      var file    = e.target.files[0]
      var reader  = new FileReader()
      reader.addEventListener("load", () => {
        this.text=window.atob(reader.result.split(',')[1]).trim()
      }, false)
      if (file) {
        reader.readAsDataURL(file)
      }
}
```
