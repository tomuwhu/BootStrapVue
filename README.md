## *BootStrapVue Hello World WebApp*
Hello world app.
- [BootStrapVue](https://bootstrap-vue.js.org/)
- [Vue.js](https://vuejs.org/v2/guide/index.html)
- [EJS](http://ejs.co/)
- [ExpressJS](https://expressjs.com/)

### Post example
1. views/index.ejs
```html
<div class="row">
      <div class="row">
            <div class="col"></div>
            <div class="col-lg3 col-md-5 col-sm-8 alert alert-primary">
                <b-input @keyup.native.enter="send" v-model="im.tv"></b-input>
            </div>
            <div class="col"></div>
      </div>
</div>
```

2. public/vues/index.js
```javascript
data: {
     im: {
        tv: ``
     }
},
methods: {
     send: function() {
        console.log(this.im.tv)
        axios
            .post('/',this.im)
            .then(resp => console.log(resp.data))
     }
}
```
3. router.js
```javascript
router.post( '/', (req,res) => {
      console.log(req.body)
      res.send(req.body)
} )
```

### File upload example
1. views/index.ejs
```html
<input type="file" @change="f($event)"><br>
<pre class="text-left">{{text}}</pre>
```

2. public/vues/index.js (methods)
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
