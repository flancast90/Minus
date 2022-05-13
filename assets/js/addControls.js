var index = 0;
document.querySelectorAll('.slide')[index].style.display = 'block';

if (!document.querySelectorAll('.slide')[index].getAttribute('data-prev')) {
    document.querySelector('#control-left').style.display = "none";
} else {
    document.querySelector('#control-left').style.display = "block";
}
if (!document.querySelectorAll('.slide')[index].getAttribute('data-next')) {
    document.querySelector('#control-right').style.display = "none";
} else {
    document.querySelector('#control-right').style.display = "block";
}

document.querySelector('#control-left').addEventListener('click', lastPage);
document.querySelector('#control-right').addEventListener('click', nextPage);

function lastPage() {
    document.querySelectorAll('.slide')[index].style.display = 'none';
    document.querySelectorAll('.slide')[index-1].style.display = 'block';

    index--;
    if (!document.querySelectorAll('.slide')[index].getAttribute('data-prev')) {
        document.querySelector('#control-left').style.display = "none";
    } else {
        document.querySelector('#control-left').style.display = "block";
    }


    if (!document.querySelectorAll('.slide')[index].getAttribute('data-next')) {
        document.querySelector('#control-right').style.display = "none";
    } else {
        document.querySelector('#control-right').style.display = "block";
    }
}

function nextPage() {
    document.querySelectorAll('.slide')[index].style.display = 'none';
    document.querySelectorAll('.slide')[index+1].style.display = 'block';

    index++;
    if (!document.querySelectorAll('.slide')[index].getAttribute('data-prev')) {
        document.querySelector('#control-left').style.display = "none";
    } else {
        document.querySelector('#control-left').style.display = "block";
    }


    if (!document.querySelectorAll('.slide')[index].getAttribute('data-next')) {
        document.querySelector('#control-right').style.display = "none";
    } else {
        document.querySelector('#control-right').style.display = "block";
    }
}

document.querySelector('#navLinks').addEventListener('click', (event) => {
    if ((event.target.tagName == "A") && (!event.target.className.includes('external'))) {
        var screens = document.querySelectorAll('.slide');
        var pass = false;
        
        for (let i=0; i<screens.length; i++) {
            if (screens[i].id.toLowerCase() == event.target.innerHTML.toLowerCase()) {
                document.title = settings.name+" | "+event.target.innerText;

                if (index < i) {
                    while (index < i) {
                        nextPage();
                    }
                } else if (index > i) {
                    while (index > i) {
                        lastPage();
                    }
                }
                pass = true;

                break;
            }
        }

        if (!pass) {
            window.open('404.html', '_self')
        }

        event.preventDefault();
    }
})