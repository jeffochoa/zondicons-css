# Zondicons css

A small plugin to easily use [Zondicons](http://www.zondicons.com/icons.html) on your front-end projects.

## Install

```bash
npm -i zondicons-css
```

Copy the icons folder and the css to your public directory

```bash
cp ./node_modules/zondicons-css/src/svg public/zondicons

cp ./node_modules/zondicons-css/dist/zendicons.css public/zendicons.css
```

Add the css file to your view

```html
<link href="/zendicons.css" rel="stylesheet">
```

## Using less

```css
    // on your main.less file
    @import './../../node_modules/zondicons-css/src/less/main.less';
```