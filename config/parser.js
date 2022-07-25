/**
 * Parser.js - parses config.js data into resume
 * @author - flancast90
 * @license - MIT
 * @copyright - Finn Lancaster 2022
 */

class navLinks {
    constructor(text, link, external) {
        this.text = text;
        this.link = link;
        this.external = (external) ? 'external ' : '';

        this.addToTemplate();
    }

    addToTemplate() {
        document.querySelector('#navLinks').innerHTML += `
        <li>
            <a href="`+this.link+`" class="`+this.external+`block py-2 pr-4 pl-3 text-text-primary hover:bg-bg-hover-color md:hover:bg-transparent rounded md:bg-transparent md:text-[rgba(56,139,253,0.75)] md:p-0" aria-current="page">`+this.text+`</a>
        </li>
        `
    }
}

class newTimeline {
    constructor(date, title, description) {
        this.date = date;
        this.title = title;
        this.description = description;

        this.addToTemplate();
    }

    addToTemplate() {
        document.querySelector('#timeline').innerHTML += `
        <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-blue-accent-muted rounded-full mt-1.5 -left-1.5"></div>

            <time class="mb-1 text-sm font-normal leading-none text-blue-accent-muted">`+this.date+`</time>
            <h3 class="text-lg font-semibold text-text-primary">`+this.title+`</h3>
            <p class="mb-4 text-base font-normal text-text-secondary">`+this.description+`</p>
        </li>
        `
    }
}

class RepoBox {
    constructor(username, repoName, repoDescrip, repoTopics) {
        this.username = username;
        this.repoName = repoName;
        this.repoDescrip = repoDescrip;
        this.repoTopics = repoTopics;

        this.addToTemplate();
    }

    addToTemplate() {
        var topicsHTML = "";

        for (let topic of this.repoTopics) {
            topicsHTML += `<p class="relative inline bg-blue-accent-subtle text-blue-accent-emphasis rounded-2xl px-1">`+topic+`</p>`;
        }

        document.querySelector('#repos').innerHTML += `
        <div class="w-[24rem] bg-secondary-bg-color rounded-xl shadow-lg p-5">
            <a href="https://github.com/`+this.username+`/`+this.repoName+`" class="text-text-primary text-xl font-semibold">`+this.username+`/`+this.repoName+`</a>
            <p class="text-text-secondary text-sm">`+this.repoDescrip+`</p>

            <br>

            <div class="inline text-sm">`+topicsHTML+`</div>
        </div>
        `;
    }
}

class newContact { 
    constructor(linkedin, github, discord, gmail) {
        this.linkedin = linkedin;
        this.github = github;
        this.discord = discord;
        this.gmail = gmail;

        this.addToTemplate();
    }

    addToTemplate() {
        document.querySelector('#methods').innerHTML += `
            <a class="flex flex-row space-x-16 items-center justify-center" href="`+this.linkedin.link+`">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 504.4 504.4" fill="currentColor">
                    <g>
                        <g>
                            <path d="M377.6,0.2H126.4C56.8,0.2,0,57,0,126.6v251.6c0,69.2,56.8,126,126.4,126H378c69.6,0,126.4-56.8,126.4-126.4V126.6    C504,57,447.2,0.2,377.6,0.2z M168,408.2H96v-208h72V408.2z M131.6,168.2c-20.4,0-36.8-16.4-36.8-36.8c0-20.4,16.4-36.8,36.8-36.8    c20.4,0,36.8,16.4,36.8,36.8C168,151.8,151.6,168.2,131.6,168.2z M408.4,408.2H408h-60V307.4c0-24.4-3.2-55.6-36.4-55.6    c-34,0-39.6,26.4-39.6,54v102.4h-60v-208h56v28h1.6c8.8-16,29.2-28.4,61.2-28.4c66,0,77.6,38,77.6,94.4V408.2z"/>
                        </g>
                    </g>
                </svg>
                &nbsp;
                `+this.linkedin.handle+`
            </a>
            <a class="flex flex-row space-x-16 items-center justify-center" href="`+this.github.link+`">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 32" fill="currentColor">
                    <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"/>
                </svg>
                &nbsp;
                `+this.github.handle+`
            </a>
            <a class="flex flex-row space-x-16 items-center justify-center" href="`+this.discord.link+`">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 1024 1024" fill="currentColor">
                    <circle cx="512" cy="512" r="512"/>
                    <path d="M689.43 349a422.21 422.21 0 0 0-104.22-32.32 1.58 1.58 0 0 0-1.68.79 294.11 294.11 0 0 0-13 26.66 389.78 389.78 0 0 0-117.05 0 269.75 269.75 0 0 0-13.18-26.66 1.64 1.64 0 0 0-1.68-.79A421 421 0 0 0 334.44 349a1.49 1.49 0 0 0-.69.59c-66.37 99.17-84.55 195.9-75.63 291.41a1.76 1.76 0 0 0 .67 1.2 424.58 424.58 0 0 0 127.85 64.63 1.66 1.66 0 0 0 1.8-.59 303.45 303.45 0 0 0 26.15-42.54 1.62 1.62 0 0 0-.89-2.25 279.6 279.6 0 0 1-39.94-19 1.64 1.64 0 0 1-.16-2.72c2.68-2 5.37-4.1 7.93-6.22a1.58 1.58 0 0 1 1.65-.22c83.79 38.26 174.51 38.26 257.31 0a1.58 1.58 0 0 1 1.68.2c2.56 2.11 5.25 4.23 8 6.24a1.64 1.64 0 0 1-.14 2.72 262.37 262.37 0 0 1-40 19 1.63 1.63 0 0 0-.87 2.28 340.72 340.72 0 0 0 26.13 42.52 1.62 1.62 0 0 0 1.8.61 423.17 423.17 0 0 0 128-64.63 1.64 1.64 0 0 0 .67-1.18c10.68-110.44-17.88-206.38-75.7-291.42a1.3 1.3 0 0 0-.63-.63zM427.09 582.85c-25.23 0-46-23.16-46-51.6s20.38-51.6 46-51.6c25.83 0 46.42 23.36 46 51.6.02 28.44-20.37 51.6-46 51.6zm170.13 0c-25.23 0-46-23.16-46-51.6s20.38-51.6 46-51.6c25.83 0 46.42 23.36 46 51.6.01 28.44-20.17 51.6-46 51.6z" style="fill:white"/>
                </svg>
                &nbsp;
                `+this.discord.handle+`
            </a>
            <a class="flex flex-row space-x-16 items-center justify-center" href="`+this.gmail.link+`">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 330.001 330.001" fill="currentColor">
                    <g id="XMLID_348_">
                        <path id="XMLID_350_" d="M173.871,177.097c-2.641,1.936-5.756,2.903-8.87,2.903c-3.116,0-6.23-0.967-8.871-2.903L30,84.602   L0.001,62.603L0,275.001c0.001,8.284,6.716,15,15,15L315.001,290c8.285,0,15-6.716,15-14.999V62.602l-30.001,22L173.871,177.097z"/>
                        <polygon id="XMLID_351_" points="165.001,146.4 310.087,40.001 19.911,40  "/>
                    </g>
                </svg>
                &nbsp;
                `+this.gmail.handle+`
            </a>
        `
    }
}

class ErrorMessage {
    constructor(msg) {
        this.message = msg;
    }

    showError() {
        alert(msg)
    }
}





function getAllRepos(username) {
    fetch('https://api.github.com/users/'+username+'/repos').then(response => response.json()).then(data => {
        data.forEach(item => {
            new RepoBox(username, item.name, item.description, item.topics)
        });
    })
}

try {
    document.title = settings.name+" | Portfolio"

    for (let link of settings.navLinks) {
        new navLinks(link.text, link.link, link.external)
    }
    for (let event of settings.experience) {
        new newTimeline(event.date, event.title, event.description)
    }

    getAllRepos(settings.github)
    document.querySelectorAll('.profile').forEach(image => {
        image.src = settings.profile;
    });
    document.querySelector('#greeting').innerText += settings.name;
    document.querySelector('#description').innerText = settings.description;
    document.querySelector('#contactBtnMain').href += settings.email;

    document.querySelector('#githubBtnMain').href += settings.github;
    document.querySelector('#githubBtnMain').innerHTML += settings.github;

    new newContact(settings.contact.linkedin, settings.contact.github, settings.contact.discord, settings.contact.gmail)
} catch (error) {
    new ErrorMessage(error)
}