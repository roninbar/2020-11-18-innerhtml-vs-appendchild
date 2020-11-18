const lorem = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt amet ex voluptates sunt numquam esse rem quod, reprehenderit quo, officia, consequatur fugiat ipsa est praesentium molestiae. Repellendus facere harum eveniet.';

function createOl(n, d) {
    const ol = document.createElement('ol');
    for (let i = 0; i < n; i++) {
        const li = document.createElement('li');
        li.appendChild(createDom(n, d - 1));
        ol.appendChild(li);
    }
    return ol;
}

const createDom = (n, d) => d === 0 ? document.createTextNode(lorem) : createOl(n, d);

const createHtml = (n, d) => d === 0 ? lorem : `<ol>${`<li>${createHtml(n, d - 1)}</li>`.repeat(n)}</ol>`;

window.addEventListener('load', function () {
    const [root1, root2] = document.getElementsByClassName('root');
    const length = 10, depth = 5;
    console.time('innerhtml');
    {
        root1.innerHTML = createHtml(length, depth);
    }
    console.timeLog('innerhtml');
    console.time('appendchild');
    {
-        root2.appendChild(createDom(length, depth));
    }
    console.timeLog('appendchild');
});

