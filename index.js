
const textInput = document.getElementById('text-input');
console.log("dihad")
const binaryInput = document.getElementById('binary-input');
const inaryspace = document.getElementById('binary-input-space');
const textToBinaryBtn = document.getElementById('text-to-binary-btn');
const binaryToTextBtn = document.getElementById('binary-to-text-btn');
const inarybtn  = document.getElementById('binary-input-space-btn');
const outputDiv = document.getElementById('output');

textToBinaryBtn.addEventListener('click', () => {
                const text = textInput.value;
                const binary = textToBinary(text);
                outputDiv.innerText = `Binary: ${binary}`;
            });

binaryToTextBtn.addEventListener('click', () => {
                const binary = binaryInput.value;
                const text = binaryToText(binary);
                outputDiv.innerText = `Text: ${text}`;

            });
inarybtn.addEventListener('click', () => {
                const binary = inaryspace.value; // Assuming inaryspace is a valid input element
                let text = ''; // Initialize text as an empty string
                let z = 0; 
                for (let i = 0; i < binary.length; i++) {
                    const x = binary[i];
                    z += 1; 
                    text = text + x
                    if (z === 8) {
                        text = text + " "; 
                        z = 0; 
                    }
                }

              outputDiv.innerText = `binary with space: ${text}`;
            });

function textToBinary(text) {
                return text.split('').map(c => c.charCodeAt(0).toString(2).padStart(8, '0')).join(' ');
            }

function binaryToText(binary) {
                return binary.split(' ').map(b => String.fromCharCode(parseInt(b, 2))).join('');
            }
