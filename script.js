function verificar () {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('agetxt')
    let res = document.querySelector('div#res')
    let masc = document.querySelector("input#sex1")
    let fem = document.querySelector("input#sex2")

     if(fano.value.length == 0 || Number(fano.value) > ano){

         res.innerHTML = 'Ano inválido'
         window.alert('VERIFIQUE O ANO')
     }else{

        let fsex = document.getElementsByName('sexo')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){

            genero = 'Homem'

            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'homembebe.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'homemcriança.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'homemjovem.png')
            } else{
                //idoso
                img.setAttribute('src', 'homemvelho.png')
            }
        } else {

            genero = 'Mulher'

            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'bebemenina.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'meninacrianca.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'mulherjovem.png')
            } else{
                //idoso
                img.setAttribute('src', 'mulhervelha.png')
            }

        }
        
        res.innerHTML = `Você é ${genero} e tem ${idade} anos <br>`
        res.appendChild(img)

     }
    
}


