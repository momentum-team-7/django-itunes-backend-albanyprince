const url ='https://itunes.apple.com/search?term='
const resultsContainer = document.querySelector(".display-results")
const previewContainer = document.querySelector('.music-player')
let searchMusic = document.querySelector('.music-search')
let previewMusic = document.querySelector('.play-audio')

//event listener
searchMusic.addEventListener('submit', event => { 
        event.preventDefault()
        
       
        clearResults()
        searchRequest()        
}) 


function clearResults() {
    let songs = document.querySelectorAll(".results")
        for (let song of songs) {
            song.remove();
        }

    }
//make search request
function searchRequest() {
    let newArtist = document.querySelector('.search-artist').value
        console.log('search request function called', newArtist)
fetch(`${url}+${newArtist}`) //+ "&limit=16"
        .then(function (response){
        return response.json()

    })         
        .then(function (data){
        console.log(data)
        for (let song of data.results)
        renderResults(song)
    })
   
   
}
// results I want displayed: artistName, collectionName, trackCensoredName
// create div(s) for where results will be displayed

function renderResults(song) {
let playButton = document.createElement('button')
    playButton.className = "play-button"
    playButton.innerText = "play"


let resultsEl = document.createElement('div')
    resultsEl.className = "results"

let coverArt = document.createElement('img')
    coverArt.className = "cover-image"
    coverArt.src = song.artworkUrl100

let artistName = document.createElement('p')
    artistName.className = "artist"
    artistName.innerText = song.artistName

 let collectionName = document.createElement('p')
    collectionName.className = "album"
    collectionName.innerText = song.collectionName
    
let trackCensoredName = document.createElement('p')
    trackCensoredName.className = "track"
    trackCensoredName.innerText = song.trackCensoredName   
    


    resultsContainer.appendChild(resultsEl)
    resultsEl.appendChild(coverArt)
    resultsEl.appendChild(artistName)
    resultsEl.appendChild(trackCensoredName)
    resultsEl.appendChild(playButton)
    
    playButton.addEventListener ('click', e => {
        console.log(song.previewUrl)
        previewMusic.src = song.previewUrl
        showArtwork(song)
    })

}    
function showArtwork(song) {
    let artWork = document.querySelector('.album-artwork')
    let albumArt = document.createElement('img')
    albumArt.className = "album-art"
    albumArt.src = song.artworkUrl100   
    artWork.appendChild(albumArt)

}