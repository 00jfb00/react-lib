Guia de padrões específicos para biblioteca Ava-3.0

Design de componentes
----

1.	Criar **TODOS** os componentes com o prefixo ````‘K’```` (Ex: KButton)

2.	**NUNCA** abreviar nomes de componentes

3.	Utilizar **SEMPRE** ````PascalCase```` para nomenclatura dos arquivos de componentes (.js)

4. Componentes que permitam alteração de seu estado **SEMPRE** devem ter a propriedade de estado definida como ````state````

5. Componentes que permitam alteração de sua marca **SEMPRE** devem ter a propriedade de marca definida como ````brand````

6. **SEMPRE** implementar validators para propriedades que devem receber valores específicos. <br />
Exemplos de propriedades que recebem uma String: <br />
**"state"** só pode receber os valores: 'normal', 'primary', 'white', 'black', 'light', 'dark', 'info', 'success', 'warning', 'danger', 'link'.<br />
**"brand"** só pode receber os valores: 'default', 'unopar'.

Exemplo: 


Estilo e layout
----
1. **SEMPRE** definir o estilo dos componentes em um arquivo SCSS no caminho ````src/scss/components````.

2. Modificadores de comportamento de um componente **SEMPRE** devem ter como classes de estilo o prefixo ````is-```` ou ````has-````. <br />
Exemplo: ````has-shadow````, ````is-primary````, ````has-border````, ````is-active````


Documentação
----
1.	**SEMPRE** comentar o bloco de export com uma visão geral do componente

2.	**SEMPRE** detalhar e comentar as definições de properties.


Testes
----
1.  **SEMPRE** escrever classes de testes para os componentes criados.

2.  Ao criar um novo teste de unidade para um componente, **SEMPRE** utilizar o nome do componente como descrição deste teste de unidade <br />
Exemplo: <code> describe('KButton', () => {...}) </code>