let calendar = document.querySelector('.scroll-bar')
let curr = document.querySelectorAll('.duration')
let prev = document.querySelectorAll('.previous')
let cards = document.querySelectorAll('.report > div:not(.profile)')
let underImgs = document.querySelectorAll('.under-img')
let dots = document.querySelectorAll('.dots')
calendar = Array.from(calendar.children)
curr = Array.from(curr)
prev = Array.from(prev)
$(function() {
    $.getJSON('data.json', function(data) {
        for (let i in data) {
            curr[i].innerText = data[i].timeframes.weekly.current + 'hrs'
            prev[i].innerText = 'Last Week - ' + data[i].timeframes.weekly.previous + 'hrs'
        }
    })
})
calendar[0].onclick = function () {
    $(function() {
        setTimeout( () => {
            $.getJSON('data.json', function(data) {
                for (let i in data) {
                    curr[i].innerText = data[i].timeframes.daily.current + 'hrs'
                    prev[i].innerText = 'Last Day - ' + data[i].timeframes.daily.previous + 'hrs'
                }
            })
        }, 100)
    })
    calendar[0].style.fontWeight = '500'
    calendar[0].style.color = 'white'
    calendar[1].style.fontWeight = '300'
    calendar[1].style.color = 'hsl(235, 45%, 61%)'
    calendar[2].style.fontWeight = '300'
    calendar[2].style.color = 'hsl(235, 45%, 61%)'
    cards.forEach((card) => {
        card.classList.remove('refresh')
        setTimeout( () => {
            card.classList.add('refresh')
        }, 50)
    })
}
calendar[1].onclick = function () {
    $(function() {
        setTimeout(() => {
            $.getJSON('data.json', function(data) {
                for (let i in data) {
                    curr[i].innerText = data[i].timeframes.weekly.current + 'hrs'
                    prev[i].innerText = 'Last Week - ' + data[i].timeframes.weekly.previous + 'hrs'
                }
            })
        }, 100);
    })
    calendar[0].style.fontWeight = '300'
    calendar[0].style.color = 'hsl(235, 45%, 61%)'
    calendar[1].style.fontWeight = '500'
    calendar[1].style.color = 'white'
    calendar[2].style.fontWeight = '300'
    calendar[2].style.color = 'hsl(235, 45%, 61%)'
    cards.forEach((card) => {
        card.classList.remove('refresh')
        setTimeout( () => {
            card.classList.add('refresh')
        }, 50)
    })
}
calendar[2].onclick = function () {
    $(function() {
        setTimeout(() => {
            $.getJSON('data.json', function(data) {
                for (let i in data) {
                    curr[i].innerText = data[i].timeframes.monthly.current + 'hrs'
                    prev[i].innerText = 'Last Week - ' + data[i].timeframes.monthly.previous + 'hrs'
                }
            })
        }, 100);
    })
    calendar[0].style.fontWeight = '300'
    calendar[0].style.color = 'hsl(235, 45%, 61%)'
    calendar[1].style.fontWeight = '300'
    calendar[1].style.color = 'hsl(235, 45%, 61%)'
    calendar[2].style.fontWeight = '500'
    calendar[2].style.color = 'white'
    cards.forEach((card) => {
        card.classList.remove('refresh')
        setTimeout( ()=> {
            card.classList.add('refresh')
        }, 50)
    })
}
dots.forEach((dot) => {
    dot.onmouseenter = function () {
        underImgs.forEach((underImg) => {
            underImg.style.backgroundColor = 'hsl(235, 46%, 20%)'
        })
    }
    dot.onmouseleave = function () {
        underImgs.forEach((underImg) => {
            underImg.removeAttribute('style')
        })
    }
})