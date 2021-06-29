const BotaoConclui = () =>{
    const botaoconclui = document.createElement('button')

    // add class 
    botaoconclui.classList.add('check-button')
    botaoconclui.innerText = 'concluir'
    botaoconclui.addEventListener('click', concluirTarefa)
    return botaoconclui
}
const concluirTarefa = (evento) =>{
    const botaoConclui = evento.target

    const tarefaCompleta =  botaoConclui.parentElement

    tarefaCompleta.classList.toggle('done')
}

export default BotaoConclui