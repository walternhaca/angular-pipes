# AngularPipes
Este projecto foi desenvolvido para demonstrar, de forma prática e objetiva, como **criar**, **configurar** e **utilizar Pipes no Angular**, tanto os nativos quanto os personalizados.  
A aplicação exibe uma lista de produtos com filtro em tempo real e indicadores visuais de stock, permitindo observar na prática como pipes podem transformar dados diretamente no template, tornando o código mais limpo, reutilizável e declarativo.

## O que é um Pipe

Um **Pipe** no Angular é uma classe que contém uma função usada para transformar um valor antes de ele aparecer no template.  
Ele recebe um dado, aplica uma lógica de transformação dentro do método `transform()` e retorna esse resultado apenas para exibição na tela, sem modificar o valor original na componente.  
Assim, os Pipes permitem ajustar a forma como algo é mostrado — como formatar textos, números ou filtrar listas — de maneira simples e direta através do operador `|` no HTML.

## Quando utilizar

Use Pipes quando:

- Você precisa **transformar valores diretamente no template** de forma simples e rápida.  
- A lógica dentro de uma interpolação (`{{ }}`) ficaria **complexa demais** para ser escrita ali.  
- A mesma transformação será usada **em vários lugares da aplicação**, e você não quer repetir código.  
- A transformação é apenas para **exibição**, sem alterar o valor original na componente.  
- Você deseja deixar o HTML mais limpo, evitando funções chamadas diretamente no template.  

## Como utilizar

Para usar um Pipe no Angular, você aplica o operador `|` **nas expressões exibidas no template**, como em interpolações (`{{ }}`) ou em bindings de propriedades.

- **Do lado esquerdo** do `|` fica o **valor que será transformado**.  
- **Do lado direito** fica o **Pipe que executa a transformação**.

Exemplo simples:  
`html`
{{ valor | nomeDoPipe }}

### Pipes com Parâmetros

Se o Pipe aceitar parâmetros, você os fornece usando dois pontos : após o nome do Pipe. Esses parâmetros sempre ficam do lado direito, depois do nome do Pipe.

Exemplo simples:  
`html`
{{ valor | nomeDoPipe: parametro1 : parametro2 }}

## Estrutura interna de um Pipe

No Angular, um Pipe é implementado como uma classe que **implementa a interface `PipeTransform`**, o que significa que essa classe precisa conter um método obrigatório chamado `transform()`. É dentro desse método que você define toda a lógica de transformação do valor recebido, recebendo um input e opcionalmente parâmetros extras, e retornando o resultado processado.

Além disso, essa classe deve ser decorada com o decorator `@Pipe`, importado do `@angular/core`. Esse decorator serve para informar ao Angular que aquela classe é um Pipe e precisa ser registrada no sistema de injeção de dependências. O decorator recebe um objeto de configuração que inclui a propriedade `name`, que define o nome pelo qual o Pipe será referenciado no template, logo após o operador `|`.

## Convenção de nomenclatura para Pipes personalizados

A nomenclatura dos Pipes personalizados segue duas recomendações principais: o **nome do Pipe** usado no template deve estar em **camelCase** (como `stockClass` usado neste projecto) e não deve conter hífens; a **classe do Pipe** deve usar **PascalCase** com a palavra `Pipe` adicionada ao final (exemplo: `stockClass` → `StockClassPipe`).  

Além disso, o nome do arquivo geralmente reflete o nome do Pipe para facilitar a organização (ex: `stock-class.pipe.ts` para o Pipe `stockClass`). Essa consistência entre o nome do arquivo, o nome da classe e o parâmetro `name` no decorator `@Pipe` facilita a identificação e o uso do Pipe na aplicação.

## Pipes nativos do Angular

O Angular oferece diversos Pipes nativos prontos para uso, que são disponibilizados pelo módulo `CommonModule` do pacote `@angular/common`. Esses Pipes facilitam tarefas comuns de formatação e transformação, como exibição de datas, moedas, porcentagens, e muito mais.

Um exemplo utilizado neste projecto é o Pipe `currency`, que formata valores numéricos como valores monetários, adicionando símbolos e ajustando a formatação de acordo com a moeda especificada (neste caso, Metical - MZN).  

Não foi necessário importar explicitamente esse Pipe nesta aplicação porque o `BrowserModule`, que é importado no módulo principal (`AppModule`), já inclui o `CommonModule` e, consequentemente, todos os Pipes nativos.

Para saber mais sobre os Pipes nativos do Angular e como utilizá-los, consulte a documentação oficial: [Angular Pipes Guide](https://angular.dev/guide/templates/pipes).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
