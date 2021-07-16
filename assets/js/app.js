const submitBtn = document.getElementById('btn-id');
let ttwt = []


submitBtn.addEventListener('click', tweet)

function tweet(){
    
    let msg = document.getElementById('tweet').value;
    if(msg === ''){
        alert('তোমার টুইট খালি, কিচ্ছু একটা লেখো আগে')
    }
    else{
        alert('অউ কাম অইবো এখন')
        let tweetDiv = document.getElementById('tweet-list');
        let li =  document.createElement('li')
        let cross = document.createElement('a');
        cross.classList = "remove-tweet"
        cross.innerText = 'X';
        tweetDiv.appendChild(li);
        ttwt.push(msg)
        localStorage.setItem("tweet", ttwt);

        li.textContent = msg;
        li.appendChild(cross);
        document.getElementById('tweet').value  = ''
    
        const removeBtn = document.querySelector('.remove-tweet');
    
        removeBtn.addEventListener('click',function(){
            li.remove()
            
        })
    }
}

// let ttwt = ['orvi', 'raj'];


// localStorage.setItem("tweet", ttwt);

// ttwt.push('ornab')

// localStorage.setItem("tweet", ttwt);