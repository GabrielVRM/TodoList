# To Do List

Nesse projeto, vou desenvolver uma aplicação de controle de tarefas no estilo **to-do list**, que contém as seguintes funcionalidades:

- [ X ] Adicionar uma nova tarefa
- [ X ] Marcar e desmarcar uma tarefa como concluída
- [ X ] Remover uma tarefa da listagem
- [ X ] Mostrar o progresso de conclusão das tarefas

Apesar de serem poucas funcionalidades, você vai precisar relembrar conceitos como:

- Estados ✅
- Imutabilidade do estado ✅(utilizei clousers)
- Listas e chaves no ReactJS ✅
- Propriedades ✅
- Componentização ✅

### Programação Declarativa:

> Input: ocupará um pouco do meu header , onde do lado tera um
> Button: se esse button observar algo sendo escrito no input, ele ficará visivel e chamará uma função, caso contario ficara disable
> Função onClick: se o input retornar algo ele, ira setar a task do input dento de um estado local
> no corpo do minha aplicação eu verei todo meu escopo de tasks criadas, acima terei as tasks criados digo em quantidade e tasks concluidas também em quantidade, creio usar um useReducer aqui para somar essas tasks
> cada task terá um icone de trash(lixeira) e quando clicadas, elas removeram a tasks, usarei um filter dentro de minha função onClick
> para marca como concluidas, eu usarei primeiramente o isCompleted se fro true esta concluida
