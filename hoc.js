const keo =document.getElementById('keo')
const bua =document.getElementById('bua')
const bao =document.getElementById('bao')
const handle = result =>{
    
    var computer = Math.floor(Math.random()*3)
    if(result===computer){
        alert('dickens')
        let audio = new Audio('./Tieng-o-khan-gia-ngac-nhien-www_tiengdong_com.mp3') 
        audio.play()
    }else if(result===0 && computer === 1){
        alert('you lost')
        let audio = new Audio('./Nhac-chuong-game-over-www_tiengdong_com.mp3') 
        audio.play()
    } else if(result===1 && computer === 0){
        alert('you win')
        let audio = new Audio('./Tieng-chuong-cua-www-tiengdong_com.mp3') 
        audio.play()
    }else if(result===0 && computer === 2){
        alert('you win')
        let audio = new Audio('./Tieng-chuong-cua-www-tiengdong_com.mp3') 
        audio.play()
    } else if(result===2 && computer === 0){
        alert('you lost')
        let audio = new Audio('./Nhac-chuong-game-over-www_tiengdong_com.mp3') 
        audio.play()
    }else if(result===1 && computer === 2){
        alert('you lost')
        let audio = new Audio('./Nhac-chuong-game-over-www_tiengdong_com.mp3') 
        audio.play()
    } else if(result===2 && computer === 1){
        alert('you win')
        let audio = new Audio('./Tieng-chuong-cua-www-tiengdong_com.mp3')
        audio.play()
    }
}
keo.addEventListener('click',()=>{
    let result = 0
    console.log(result);
    
    handle(result)

})
bua.addEventListener('click',()=>{
    let result = 1
    console.log(result);
    
    handle(result)

})
bao.addEventListener('click',()=>{
    let result = 2
    console.log(result);
    
    handle(result)

})