# Minus
> A minimalist, highly-customizable portfolio for developers

<br>

### Why Minus?
Minus is different than other portfolio templates in that it requires zero-to-little code in order to render. As opposed to these other templates, you do not need to go hunting through HTML files looking for data/sections to modify, but can now manage everything from one, simple, config file. Oh, and I forgot to mention: It's all open-source AND client-side!

Some cool features of Minus:
- load fast
- cool color scheme
- GitHub API integration: display all your Open-Source repos with Minus.
- Easy templating
- Mobile support

<br>

### Editing Data
Minus, as mentioned, allows you to simply edit one config file, and BOOM, your data is all there! This config file is at ``config/config.js``, and is commented to ensure that each field is easy-to-understand.

While I'm talking about the files, it's probably important to mention where (and what) each directory is for. Here's a brief overview of what each file does:
``ROOT: index.html (for GH Pages)``<br>
``assets/images``:<br>
    - ``profile image (recommended)``<br>
``assets/js``:<br>
    - ``addControls.js: Adds the left/right page controls. Handles pages based on nav links``<br>
``assets/vendor``<br>
    - ``tailwind.min.js: Tailwind CSS CDN file``<br>
    - ``tailwind.min.css: Tailwind CSS classes``<br>
    - ``flowbite.min.css: Custom classes for Tailwind``<br>
    - ``flowbite.min.js: Custom interactions for Tailwind``<br>
``config/``:<br>
    - ``config.js: JSON for easy-data addition to template``<br>
    - ``parser.js: Uses config.js data and appends to template``
    
<br>

### Screenshots
![Homepage](https://i.imgur.com/MAumF3L.png)
![Experience](https://i.imgur.com/NOWSCAG.png)
![Repos](https://i.imgur.com/Na947EZ.png)
![Contact](https://i.imgur.com/8TxCRFr.png)

<br>

### Adding new pages
Minus also provides an (in progress) method to add new slides to the portfolio. To do this, you can add a new section within the ``navLinks`` JSON in ``config.js``, and then create a new section within the ``config.js`` file with the data you want provided in that page. Lastly, you will need to add the page HTML within the ``index.html`` file, and include the ``slide`` class within that HTML you added.

<br>

### TODO
Since this is iteration 1 of the Minus Portfolio template, there are still a lot of features we'd like to add. We'll accept Pull Requests adding any of these (or anything else, for that matter), and in the meantime are hard-at-work adding them.

- Easier templating. Remove hardcoded classes. Use React-like syntax for dynamic variables. For example:
```
<div class="slide">
  <h1>{{ settings.name }}</h1>
```
- Support for custom icons, or builtin icon-library.

<br>

### License
```
Copyright © 2022 Finn Lancaster

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
