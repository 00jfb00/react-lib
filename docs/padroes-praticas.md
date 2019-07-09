
Padrões e Boas Práticas no React.js

Regras Essenciais
------
*Categorias*: Desing de Componentes, Otimizaçãode desempenho, Nomenclatura

1.	Nome dos componentes devem ser formados por mais de uma palavra

2.	A propriedade data de um componente deve ser um método que retorne um objeto, **NUNCA** um objeto. Caso seja apenas um objeto, ele será um singleton compartilhado por todas as instancias do componente.

3.	Detalhar a definição de cada propertie do componente (tipo, obrigatoriedade, default)

4.	**SEMPRE** usar a propriedade ````:key```` no ````map```` para otimização de desempenho (evite alterações desnecessárias no DOM)


Regras Altamente Recomendadas 
------
*Categorias*: Nomenclatura, Desing de Componentes

1.	**SEMPRE** criar um único componente por arquivo.

2.	Nome dos componentes (.js) **SEMPRE** em ````Pascal Case```` (Ex: ConsumoDados.js)

3.	Nome das tags que serão utilizadas para os componentes **SEMPRE** em ````kebab-case```` (Ex: <consumo-dados>)

4.	Componentes de instancia única **DEVEM** ter o prefixo  ````The````. (Ex: TheHome.js)

5.	Componentes que devem ser **ÚNICOS POR PÁGINA** devem ter o prefixo ````The```` (Ex: TheHeader.js, TheFooter.js)

6.	Caso seja necessário criar um componente base, utilizar **SEMPRE** o prefixo do projeto para nomear os componentes base (Ex: AvaButton – Botão específico para o projeto do Ava 3.0)

7.	Nomes de componentes fortemente acoplados **DEVEM** possuir como prefixo o nome do componente pai (Ex: SearchSidebar.js, SearchSidebarNavigation.js, SearchSidebarMenu.js)

8.	**NUNCA** utilizar abreviações para nomear componentes

9.	Propriedade dos componentes **SEMPRE** em ````camelCase```` (Ex: saldoConta)


Regras Recomendadas
------

1.	Lorem ipsum
  
 

