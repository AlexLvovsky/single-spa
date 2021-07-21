const spaDefinition = [
    {
        id: 'grid',
        url: 'http://localhost:4201/main.js',
    },
    {
        id: 'text',
        url: 'http://localhost:4202/main.js',
    },
    {
        id: 'image',
        url: 'http://localhost:4203/main.js',
    },
    {
        id: 'list',
        url: 'http://localhost:4204/main.js',
    },
];

(function generateSingleSPAScripts() {
    let script = `  <script type="systemjs-importmap">
    {
      "imports": {\n\t`;
    spaDefinition.forEach(item => {
        script = script.concat(`"${item.id}": "${item.url}",\n\t`);
    })
    script = script.concat(`"single-spa": "https://cdnjs.cloudflare.com/ajax/libs/single-spa/5.5.0/system/single-spa.min.js",
            "single-spa-layout": "https://unpkg.com/single-spa-layout@1.0.0-beta.2/dist/system/single-spa-layout.min.js"
        }
      }

    </script>`);
    const html = document.head.innerHTML;
    function injectHtml(html, mark, injectContent) {
        document.head.innerHTML = html.replace(new RegExp(`<!--\\s*${mark}\\s*-->`), injectContent);
    }
    injectHtml(html, 'single-spa-scripts', script);
})()
