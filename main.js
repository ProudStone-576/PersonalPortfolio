document.addEventListener('DOMContentLoaded', function () {
    const codeSnippet1 = `
    // Simple JavaScript example for personal use
    function greet(name) {
        alert('Hello, ' + name + '!');
    }
    
    // Call the function
    greet('Visitor');
    `;

    function typeCode(container, codeSnippet) {
        container.innerHTML = ''; // Clear previous content
        let index = 0;
        function addChar() {
            if (index < codeSnippet.length) {
                container.innerHTML += codeSnippet.charAt(index);
                index++;
                setTimeout(addChar, 30);
            }
        }
        addChar();
    }

    typeCode(document.querySelector('#live-code1 code'), codeSnippet1);

    document.getElementById('run-code').addEventListener('click', function() {
        try {
            eval(document.querySelector('#live-code1 code').textContent);
        } catch (e) {
            console.error(e);
        }
    });
});
