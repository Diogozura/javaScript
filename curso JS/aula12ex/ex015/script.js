function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Verifique os dados e tente novamente!')
    } 
    else if(ano < 1900){
        window.alert('coloque um ano valido acima de 1900')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if(idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'crianca_M.png')
            }else if (idade < 21) {
                //jovin
                img.setAttribute('src', 'jovem_M.png')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto_M.png')
            }else{
                //idoso
                img.setAttribute('src','idoso_M.png')
            }
        } else if(fsex[1].checked){
            gênero = 'Mulher'
            if(idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src','crianca_F.png')
            }else if (idade < 21) {
                //jovin
                img.setAttribute('src', 'jovem_F.png')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto_F.png')
            }else{
                //idoso
                img.setAttribute('src','idosa_F.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `você é ${gênero} e tem ${idade} anos`
        res.appendChild(img)
    }
}   