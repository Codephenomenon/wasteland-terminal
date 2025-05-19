window.addEventListener('load', function(e) {
    const container = document.getElementById("container");
    const header = document.getElementById("header");
    const attemptHeader = document.getElementById("attemptHeader");
    const identify = document.getElementById("iden1");
    const identify2 = document.getElementById("iden2");
    const fill = document.getElementById("fill1");
    const fill2 = document.getElementById("fill2");
    const testList = document.getElementById("testList");
    const passwordElementsArray = [];
    let selectedPassword;
    let speed = 25;
    let index = 0;
    let triesLeft = 4;

    const start = () => {
        button.classList.add("btn-active");
        button.disabled = true;
        let attempts = 4;
        typeHeader();
        setTimeout(function() {  
            loadGrid();
            setUpFunction();
        }, 2300);
    }

    const typeHeader = (attempts) => {
        const headerText = `robco industries (tm) termlink protocol enter password now`;
        if (index < headerText.length) {
            header.innerHTML += headerText.charAt(index);
            index++;
            setTimeout(typeHeader, speed);
        } else if (index >= headerText.length) {
            index = 0;
            typeAttempts(attempts);
        }
    }

    const typeAttempts = (attempts = 4) => {
        let attemptText = '4 attempts remaining:';
        if (index < attemptText.length) {
            attemptHeader.innerHTML += attemptText.charAt(index);
            index++;
            setTimeout(typeAttempts, speed);
        } else if (index >= attemptText.length) {
            attemptHeader.innerHTML = `${attempts} attempts remaining:`;
            setAttempts(attempts);
        } else {
            attemptHeader.innerHTML = `${attempts} attempts remaining:`;
        }
    }

    const setAttempts = num => {
        let attemptMarkup;
        if (num != 4) {
            for(let a = 0; a < num; a++) {
                attemptMarkup = `<div id="attempt${a}" class="attemptBlock"></div>`;
                attemptHeader.insertAdjacentHTML('afterbegin', attemptMarkup);
            }
        } else {
            for(a = 0; a < num; a++) {
                attemptMarkup = `<div id="attempt${a}" class="attemptBlock"></div>`;
                attemptHeader.insertAdjacentHTML('afterbegin', attemptMarkup);
            }
        }
    }

    const loadGrid = () => {
        let markup;
        // Insert row1 list
        for(let i = 0; i < 17; i++) {
            if (i < 10) {
                markup = `<li class="list-item">FX010${i}</li>`;
            } else {
                markup = `<li class="list-item">FX01${i}</li>`;
            }
            identify.insertAdjacentHTML('beforeend', markup);
        }
        // Insert row2 list
        for(let k = 17; k < 34; k++) {
            markup = `<li class="list-item">FX01${k}</li>`;
            identify2.insertAdjacentHTML('beforeend', markup);
        }
        
        const chars = ['?', '$', '_', '{', '}', '^', '!', '|', '-', '=', '+', '<', '>', '#', ':', ';', '*', '.', '(', ')', '`', ',', '@'];
        const passwords = ["stark", "burst", "cable", "sugar", "shave", "donor", "stuff", "match", "dairy", "allow", "raise", "layer", "chalk", "start", "mouth", "lunch", "twist", "drink", "spare", "voice", "elect", "humor", "lease", "brink", "stool", "pause", "valid", "bleed", "rifle", "toast", "point"];
        const hints = ["(#->%,>)", "{^_^+;,}", "(%#!>?_)", "{(@-$.|}"];
        
        const passwordArray = [];
        let randomPass;
        for(let j = 0; j < 8; j++) {
            randomPass = Math.floor(Math.random() * passwords.length);
            passwordArray.push(passwords[randomPass]);
            passwords.splice(randomPass, 1);
        }
        selectedPassword = passwordArray[Math.floor(Math.random() * passwordArray.length)];
        
        // insert table
        let row, cell, passwordCount = 0, hintCount = 0;
        // first fill
        for (let i = 0; i < 17; i++) {
            row = `<tr id="row${i}"></tr>`;
            fill.insertAdjacentHTML('beforeend', row);
            for (let j = 0; j < 18; j++) {
                if (i === 1 && j === 9) {
                    cell = `<td id="pword${passwordCount}" class="insertText" colspan="5">${passwordArray[passwordCount]}</td>`;
                    document.getElementById(`row${i}`).insertAdjacentHTML('beforeend', cell);
                    passwordCount++;
                    j += 4;
                } else if (i === 6 && j === 2) {
                    cell = `<td id="pword${passwordCount}" class="insertText" colspan="5">${passwordArray[passwordCount]}</td>`;
                    document.getElementById(`row${i}`).insertAdjacentHTML('beforeend', cell);
                    passwordCount++;
                    j += 4;         
                } else if (i === 11 && j === 10) {
                    cell = `<td id="pword${passwordCount}" class="insertText" colspan="5">${passwordArray[passwordCount]}</td>`;
                    document.getElementById(`row${i}`).insertAdjacentHTML('beforeend', cell);
                    passwordCount++;
                    j += 4;         
                } else if (i === 14 && j === 6) {
                    cell = `<td id="pword${passwordCount}" class="insertText" colspan="5">${passwordArray[passwordCount]}</td>`;
                    document.getElementById(`row${i}`).insertAdjacentHTML('beforeend', cell);
                    passwordCount++;
                    j += 4;         
                } else if (i === 4 && j === 9) {
                    cell = `<td id="hint${hintCount}" class="insertText" colspan="8">${hints[hintCount]}</td>`;
                    document.getElementById(`row${i}`).insertAdjacentHTML('beforeend', cell);
                    hintCount++;
                    j += 7;
                } else if (i === 7 && j === 1) {
                    cell = `<td id="hint${hintCount}" class="insertText" colspan="8">${hints[hintCount]}</td>`;
                    document.getElementById(`row${i}`).insertAdjacentHTML('beforeend', cell);
                    hintCount++; 
                    j += 7;
                } else {
                    cell = `<td>${chars[Math.floor(Math.random() * 23)]}</td>`;
                    document.getElementById(`row${i}`).insertAdjacentHTML('beforeend', cell);
                }
            }
        }
        //second fill
        for (i = 0; i < 17; i++) {
            row = `<tr id="row2${i}"></tr>`;
            fill2.insertAdjacentHTML('beforeend', row);
            for (j = 0; j < 18; j++) {
                if (i === 0 && j === 11) {
                    cell = `<td id="pword${passwordCount}" class="insertText" colspan="5">${passwordArray[passwordCount]}</td>`;
                    document.getElementById(`row2${i}`).insertAdjacentHTML('beforeend', cell);
                    passwordCount++;
                    j += 4;
                } else if (i === 5 && j === 4) {
                    cell = `<td id="pword${passwordCount}" class="insertText" colspan="5">${passwordArray[passwordCount]}</td>`;
                    document.getElementById(`row2${i}`).insertAdjacentHTML('beforeend', cell);
                    passwordCount++;
                    j += 4;         
                } else if (i === 8 && j === 7) {
                    cell = `<td id="pword${passwordCount}" class="insertText" colspan="5">${passwordArray[passwordCount]}</td>`;
                    document.getElementById(`row2${i}`).insertAdjacentHTML('beforeend', cell);
                    passwordCount++;
                    j += 4;         
                } else if (i === 15 && j === 3) {
                    cell = `<td id="pword${passwordCount}" class="insertText" colspan="5">${passwordArray[passwordCount]}</td>`;
                    document.getElementById(`row2${i}`).insertAdjacentHTML('beforeend', cell);
                    passwordCount++;
                    j += 4;         
                } else if (i === 2 && j === 2) {
                    cell = `<td id="hint${hintCount}" class="insertText" colspan="8">${hints[hintCount]}</td>`;
                    document.getElementById(`row2${i}`).insertAdjacentHTML('beforeend', cell);
                    hintCount++;
                    j += 7;
                } else if (i === 13 && j === 8) {
                    cell = `<td id="hint${hintCount}" class="insertText" colspan="8">${hints[hintCount]}</td>`;
                    document.getElementById(`row2${i}`).insertAdjacentHTML('beforeend', cell);
                    hintCount++; 
                    j += 7;
                } else {
                    cell = `<td>${chars[Math.floor(Math.random() * 23)]}</td>`;
                    document.getElementById(`row2${i}`).insertAdjacentHTML('beforeend', cell);
                }
            }
        }
        //test fill
        markup = `<div id="firstUnit" class="unit">><div class="block"></div></div>`;
        testList.insertAdjacentHTML('beforeend', markup);
    } // loadGrid

    const setUpFunction = () => {
        let element;
        for (let i = 0; i < 8; i++) {
            element = document.getElementById(`pword${i}`);
            if (element.innerHTML == selectedPassword) {
                selectedPassword = element;
            }
            passwordElementsArray.push(element);
        }
        
        passwordElementsArray.forEach(element => {
            element.addEventListener("click", function clicked() {
                checkPassword(this);
                element.removeEventListener("click", clicked, false);
            });
        });
        
        for (let i = 0; i < 4; i++) {
            element = document.getElementById(`hint${i}`);
            element.addEventListener("click", hintClick);
        }
        function hintClick() {
            checkHint(this);
            this.removeEventListener("click", hintClick, false);
        }
    } // setUpFunction

    const checkHint = (element) => {
        let oldElement;
        element.innerHTML = "";
        const returnRandom = (num) => {
            return Math.floor(Math.random() * num);
        }
        let index = returnRandom(passwordElementsArray.length);
        if (passwordElementsArray[index] == selectedPassword) {
            checkHint(element);
        } else {
            passwordElementsArray[index].innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
            oldElement = document.getElementById(`pword${index}`);
            let replace = oldElement.cloneNode(true);
            oldElement.parentNode.replaceChild(replace, oldElement);
            let object = document.getElementById("firstUnit");
            let markup = `
            <div class="unit unit-dud">>dud removed.</div>
            `;
            object.insertAdjacentHTML('beforebegin', markup);
            passwordElementsArray.splice(index, 1);
        }
    }// checkHint

    const checkPassword = (element) => {
        if (element === selectedPassword) {
            victory(); 
        } else {
            const sameCharacters = (element, selectedPassword) => {
                let charCounter = 0; 
                for(let q = 0; q < element.length; q++) {
                    for (let w = 0; w < selectedPassword.length; w++) {
                        if (element.charAt(q) === selectedPassword.charAt(w)) {
                            charCounter++;
                        }
                    }
                }
                return charCounter;
            }
            let matchedCharacters = sameCharacters(element.innerHTML, selectedPassword.innerHTML);
            addMatched(matchedCharacters, element.innerHTML);
            let index = passwordElementsArray.indexOf(element);
            passwordElementsArray.splice(index, 1);
            element.innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
            triesLeft--;
            typeAttempts(triesLeft);
            if(triesLeft === 0) {
                endGame();
            }
        }
    }// checkPassword

    const addMatched = (matchedCharacters, element) => {
        let object = document.getElementById("firstUnit");
        let markup = `
            <div class="unit unit-sub">
                <span>>${element}</span></br>
                <span>>entry denied</span></br>
                <span>>${matchedCharacters}/5 correct.</span>
            </div>
        `;
        object.insertAdjacentHTML('beforebegin', markup);
    }

    const victory = () => {
        container.innerHTML = "";
        let endMarkup = `
            <div class="endVictory text"><p id="victoryContainer"></p></div>
            <button id="button" class="btn btn-active"></button>
        `;
        container.insertAdjacentHTML('afterbegin', endMarkup);
        index = 0;
        victoryText();
    }

    const victoryText = () => {
        const victoryInsert = document.getElementById("victoryContainer");
        let insertText = '>terminal connection successful...';
        if (index < insertText.length) {
            victoryInsert.innerHTML += insertText.charAt(index);
            index++;
            setTimeout(victoryText, speed);
        }
    }

    const endGame = () => {
        container.innerHTML = "";
        let endMarkup = `
            <div class="endText">
                <h1 class="text">terminal locked</h1>
                <h2 class="text">please contact an administrator</h2>
            </div>
            <button id="button" class="btn btn-active"></button>
        `;
        container.innerHTML = endMarkup;
    }

    // Event Listeners
    const button = document.getElementById("button");
    button.addEventListener("click", start);
});
