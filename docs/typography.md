### Na maioria dos casos, uma composição tipográfica deve ser especialmente legível e visualmente envolvente, sem desconsiderar o contexto em que é lido e os objetivos da sua publicação. 
 
O Ava_3.0 define estilos de exibição tipográfica. Algumas classes foram definidas como base para que
os desenvolvedores possam personalizar os padrões do elementos. Seguindo o padrão de estado de toda a bilbioteca. 

## Overview

```
<section>
   <h1 className="is-primary-default">h1. Cabeçalho Ava_3.0</h1>
   <h2 className="is-secondary-default">h2. Cabeçalho Ava_3.0</h2>
   <h3 className="is-ternary-default">h3. Cabeçalho Ava_3.0</h3>
   <h4 className="is-success-default">h4. Cabeçalho Ava_3.0</h4>
   <h5 className="is-warning-default">h5. Cabeçalho Ava_3.0</h5>
   <h6 className="is-info-default">h6. Cabeçalho Ava_3.0</h6>
   
   <p className="is-primary-anhanguera p1">p1. Cabeçalho Ava_3.0</p>
   <p className="is-secondary-anhanguera p2">p2. Cabeçalho Ava_3.0</p>
   <p className="is-ternary-anhanguera p3">p3. Cabeçalho Ava_3.0</p>
   <p className="is-success-anhanguera p4">p4. Cabeçalho Ava_3.0</p>
   <p className="is-warning-anhanguera p5">p5. Cabeçalho Ava_3.0</p>
   <p className="is-danger-anhanguera p6">p6. Cabeçalho Ava_3.0</p>
</section>
```

### Gerenciamento do estado

Os seguintes valores serão aceitos: 

## Overview

```
<section>
 <h5 className="is-light-default">Light</h5>
 <h5 className="is-grey-lighter-default">Grey-lighte</h5>
 <h5 className="is-grey-default">Grey</h5>
 <h5 className="is-grey-dark-default">Grey-dark</h5>
 <h5 className="is-dark-default">Dark</h5>
 <h5 className="is-black-default">Black</h5>
 <h5 className="is-primary-default">Primary</h5>
 <h5 className="is-info-default">Info</h5>
 <h5 className="is-success-default">Success</h5>
 <h5 className="is-warning-default">Warning</h5>
 <h5 className="is-danger-default">Danger</h5>
</section>
```

### Títulos de Exibição

Elementos de cabeçalho tradicionais são projetados para funcionar melhor no conteúdo da sua página. 
Quando você precisa de um título para se destacar, considere o uso de um título de exibição - 
um estilo de título maior e um pouco mais de opinião.

## Overview

```
<section>
 <h1 className="display-1 is-grey-default">Darth vader</h1>
 <h1 className="display-2 is-grey-lighter-default">Darth vader</h1>
 <h1 className="display-3 is-dark-default">Darth vader</h1>
 <h1 className="display-4 is-info-default">Darth vader</h1>
</section>
```

### Estilo global

Qualquer Tag de texto poderá receber as dimensões de um cabeçalho apenas informando a classe.

## Overview

```
<section>
 <p className="display-3 is-grey-default">Darth vader</p>
 <p className="display-4 is-grey-lighter-default">Darth vader</p>
 
 <p className="h1 is-primary-default">h1. Cabeçalho Ava_3.0</p> 
 <a className="h2 is-dark-default">h2. Cabeçalho Ava_3.0</a> <br/>
 
 <b className="h3 is-dark-default">h3. Cabeçalho Ava_3.0</b> <br/> 
 <code className="h3 is-success-default">h3. Cabeçalho Ava_3.0</code>
 
</section>
```
