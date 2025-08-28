const productos = [
  {
    cod: "MARTRA001",
    título: "Trasnoche vudú",
    autoría: "Mariano Buscaglia",
    editorial: "Interzona",
    páginas: 146,
    año: 2015,
    ejemplares: 0,
    categoria: "Novela",
    sinopsis: "<p dir=\"ltr\" style=\"text-align:justify;padding:1em;\">Un policial trastornado. Un detective privado, un encargo de apariencia sencilla, zombis, hombres-lobo, ¿perdón? ¿no-muertos?, ¿licántropos?, ¿en una novelita policial? Sí. Y además motoqueros, magia vudú, una cabeza reducida por jíbaros, un científico\n loco y su mansión-trampa que hace recordar en algún momento a ese clásico de clásicos del cine transgresor: The Rocky Horror Picture Show; y variados ingredientes que le dan condimento a una novela llena de vueltas de tuerca en un género en el que\n parecía ya todo dicho.<br /></p>"
  },
  {
    cod: "ALBCUE002",
    título: "Cuentos de terror",
    autoría: "Alberto Laiseca (compilador); Edgar Allan Poe; Gustavo Adolfo Bécquer; Villiers de l'Isle-Adam; Amrbose Bierce; Bram Stoker; Lafcadio Hearn; W. W. Jacobs; Saki; Horacio Quiroga; David Herbert Lawrence; John Russell.",
    editorial: "Interzona",
    páginas: 240,
    año: "",
    ejemplares: 1,
    categoria: "Cuentos",    
    sinopsis: "<p dir=\"ltr\" style=\"text-align:justify;padding:1em;\"><em>Cuentos de terror</em>, antes de convertirse en este libro, fue un espacio único en la televisión en el cual el rosarino Alberto Laiseca rescató la tradición del relato oral. Transmitido por la señal <em>I-Sat</em>, se volvió un ciclo de culto en el que el escritor\n narraba relatos de terror del siglo XIX. Este volumen reúne aquellos cuentos seleccionados por Laiseca y nos permite volver a oír su particular cadencia al relatar.<br /><br /> “Ya egipcios, romanos, chinos y japoneses tenían cuentos con fantasmas, seres transformados o magos que envían cocodrilos mágicos a casa de sus enemigos. La vieja pregunta es ¿por qué seguimos leyendo (o pidiendo que nos cuenten) historias terroríficas?\n En primer lugar porque nos divierten mucho. Es cosa clara. Todo lo que ‘abre puertas’ gratifica. Pero hay todavía una razón más profunda: los monstruos existen en serio y todos lo sabemos”.<br /></p>"
  },
  {
    cod: "RYUCUE003",
    título: "Cuentos japoneses",
    autoría: "Ryunosuke Akutagawa; Jun’ichiro Tanizaki; Yukio Mishima; Shin’ichi Hoshi",
    editorial: "Factotum Ediciones",
    páginas: 112,
    año: 2021,
    ejemplares: 3,
    categoria: "Cuentos",
    sinopsis: "<p dir=\"ltr\" style=\"text-align:justify;padding:1em;\">Este libro nos permite atisbar en una cultura de comple­jidades tan intrincadas y fluctuaciones históricas tan significativas como la japonesa. A pesar de que ninguna antología podría dar una idea general de la producción literaria de un país, la magia\n impar de estos relatos encantará al lector y le acercará el sabor del lejano oriente. Desde su antiquísima tradición imperial, signada por lo simbólico y lo ceremonial, hasta la contemporaneidad de un Japón atravesado por valores occidentales,\n estos cuentos nos hablan de un mundo tan poco conocido como fascinante.<br /></p>"
  },
  {
    cod: "EDUCUE004",
    título: "Cuentos latinoamericanos",
    autoría: "Eduardo Galeano; Mario Benedetti; Augusto Monterroso; Julio Cortázar; Juan José Arreola; Virgilio Piñera; César Vallejo; Horacio Quiroga",
    editorial: "Factotum Ediciones",
    páginas: 120,
    año: "",
    ejemplares: 2,
    categoria: "Cuentos",
    sinopsis: "<p dir=\"ltr\" style=\"text-align:justify;padding:1em;\">Estos cuentos muestran el carácter híbrido, mestizo y de vanguardia de la escritura latinoamericana: el trabajo de inscripción de una tierra, un paisaje y un mundo nuevo en una lengua ajena a ellos. Desde la reconstrucción de leyendas y mitos, e incluso su invención, hasta la representación social de la escena íntima burguesa, característica del fantástico rioplatense, estos relatos se escriben en la tensión entre lo propio y lo heredado, entre lo natural y lo extranjero.<br /></p>"
  },
  {
    cod: "JULCUE005",
    título: "Cuentos fantásticos latinoamericanos",
    autoría: "Julio Cortázar; Jorge Luis Borges; Manuel Rojas; Augusto Roa Bastos; Gabriel García Márquez; Juan José Arreola; Alejo Carpentier; Octavio Paz; Silvina Ocampo",
    editorial: "Factotum Ediciones",
    páginas: 120,
    año: 2017,
    ejemplares: 2,
    categoria: "Cuentos",
    sinopsis: "<p dir=\"ltr\" style=\"text-align:justify;padding:1em;\">Lo fantástico es la irrupción de lo imposible, lo inesperado, en un contexto cotidiano. Esta antología reúne los diez más grandes exponentes del género en América Latina. Por un lado, representantes del fantástico propiamente dicho, en el Río de la Plata, y por el otro, del realismo mágico, en la zona del Caribe. El primero encuentra el asombro sobre todo en la especulación filosófica y la destreza formal; el segundo lo busca en la recuperación imaginaria del tesoro de los pueblos perdidos.<br /></p>"
  },
  {
    cod: "MARSOL006",
    título: "Solo queda saltar",
    autoría: "María Rosa Lojo",
    editorial: "loqueleo",
    páginas: 152,
    año: 2018,
    ejemplares: 0,
    categoria: "Novela",
    sinopsis: "<p dir=\"ltr\" style=\"text-align:justify;padding:1em;\">\n\nCorre el año 1948. La joven Celia y su hermana desembarcan en una Argentina llena de promesas. Huyen de la España franquista, de la pobreza, el hambre y la muerte de sus seres queridos. Solo se tienen la una a la otra. En una ciudad de la provincia de Buenos Aires las esperan su tío Juan, a quien nunca han visto antes, y una nueva vida por descubrir.<br />\n\nEsta entrañable historia de María Rosa Lojo nos presenta un relato de inmigrantes muy particular, colmado de mujeres fuertes y aguerridas, que se sostienen en el dolor, el miedo, las pesadillas y la añoranza de lo que dejaron detrás.\n<br /></p>"
  },
  {
    cod: "HORELT007",
    título: "El techo de incienso / Cuentos de la oficina",
    autoría: "Horacio Quiroga; Roberto Mariani",
    editorial: "Edición Biblioteca Nacional",
    páginas: 130,
    año: 1926,
    ejemplares: 1,
    categoria: "Cuentos",
    sinopsis: "<p dir=\"ltr\" style=\"text-align:justify;padding:1em;\">Las diferencias de situación, contexto y sensibilidad no empañan e tema fundamental que reúne a estos notables escritores: una cierta pulsión vitalista que se propone enfrentar la crueldad del mundo, su lenguaje vacío y sus mecanismos de sujeción. Frente\n a la arbitrariedad del poder laboral siempre hubo estrategias de resistencia: la ironía, la abstención, la simulación y la redundancia son modos ambiguos de obediencia. <br /></p>"
  },
  {
    cod: "FEDLAI008",
    título: "La imposible realidad",
    autoría: "Federico Ferroggiaro (compilador); Natalia Massei; Pablo Colacrai; Jorge Riestra; Marcelo Britos; Vanesa Gómez; Mateo Booz; Osvaldo Aguirre; Angélica Gorodischer",
    editorial: "Casagrande",
    páginas: 178,
    año: 2018,
    ejemplares: 3,
    categoria: "Cuentos",
    sinopsis: "<p dir=\"ltr\" style=\"text-align:justify;padding:1em;\">Este volumen se estructura a partir las postulaciones y planteos sobre la estética realista. Se busca reunir relatos que presenten distintas realidades “representadas” o que operen como la fuente de inspiración de los mismos. Esa realidad se reinventa\n y se reconstruye en los textos literarios que pretenden dar cuenta de ella con cierta pretensión de objetividad. Es decir, generan una nueva realidad a partir de los discursos ficcionales que cuestiona, impugna o desestima la noción misma de realidad,\n suplantándola por la idea de “verosímil”.<br /></p>"
  },
  {
    cod: "JAVVAR009",
    título: "Variaciones del fantástico",
    autoría: "Javier Núñez; Federico Ferroggiaro; María Florencia Moscato; Patricia Suárez; Alma Maritano; Daniel Basilio; Ber Stinco",
    editorial: "Casagrande",
    páginas: 158,
    año: 2018,
    ejemplares: 2,
    categoria: "Cuentos",
    sinopsis: "<p dir=\"ltr\" style=\"text-align:justify;padding:1em;\">En este volumen se presentarán diversas definiciones del género fantástico, partiendo de la conceptualización y la clasificación de T. Todorov en <em>Introducción a la literatura fantástica</em>. Desde esta perspectiva, se ampliará la serie para\n incluir también a los relatos maravillosos y a los surrealistas, estableciendo una nueva clasificación que los contenga y los diferencie de los planteos del Realismo. Seguidamente, se desarrollarán los recursos retóricos característicos del género,\n explicados en <i>Lo fantástico </i>de Remo Ceserami, y se esbozará el funcionamiento de los mismos en los relatos que integran la antología. Por último, antes de dar lugar a los textos literarios, se reflexionará sobre los modos de irrupción\n de lo fantástico en diversos dominios de la vida cotidiana.<br /></p>"
  },
  {
    cod: "ROSLOS010",
    título: "Los reinos de Poesía",
    autoría: "Rosana Guardalá (compiladora); Francisco Gandolfo; Cecilia Moscovich; José Pedroni; Emilia Bertolé; Jorge Isaías y Concepción Bertone; Beatriz Vallejo; Aguirre Molina; Hugo Padeletti; Aldo Oliva; Julia Enriquez y Andrea Ocampo; Mirta Rosemberg; Gabriela De Cicco; Estela Figueroa; Arturo Fruttero; Maia Morosano; Méndez Bujonok",
    editorial: "Casagrande",
    páginas: 108,
    año: 2018,
    ejemplares: 2,
    categoria: "Poesia",
    sinopsis: "<p dir=\"ltr\" style=\"text-align:justify;padding:1em;\">La antología se organiza en torno a un eje temático-semántico: Los Reinos de Poesía y se dividen en cuatro secciones. Ellos se tejen en la relación entre los sentidos y las emociones. Todos los reinos indagan y abordan las construcciones subjetivas, no\n como unificadas ni divididas, sino como múltiple por contradictorio:<br /><strong>1. El reino de los afectos perdidos: </strong>Nos abren en las formas del perder y las vivencias que provocan las pérdidas, una puerta para que los alumnos puedan poetizar/se, a partir de una mirada poética sobre sus propias pérdidas y cómo\n éstas nos generan, nos vuelven más o menos cariñosos, atentos y reticentes. En otras palabras, como las pérdidas nos devuelven fragmentos<br /> de lo que somos. Poetas: José Pedroni, Diana Bellessi, Gervasio Monchietti, Beatriz Vignoli y Verónica Laurino.<br /><strong>2. El reino de los mapas internos: </strong>En los poemas de esta sección los alumnos pueden ensayar nuevas cartografías personales, grupales, sociales que abran las preguntas sobre sus relaciones sociales y afectivas. Poetas: Francisco Gandolfo,\n Cecilia Moscovich, José Pedroni, Emilia Bertolé, Jorge Isaías y Concepción Bertone.<br /><strong>3. El reino de los gestos ajenos o de los recuerdos prestados:</strong> poemas que vienen a mostrar que la palabra poética se presenta como el momento en el que vivimos y revivimos a partir de imágenes que uno ya no sabe sin son propias o\n adquiridas, pero sí compartidas. Este reino les permitirá a los alumnos revisar la memoria colectiva a partir de cierta documentalidad poética<br /> no sólo histórica. Pero también, les abre paso a la escritura creativa como otro modo de pensar la memoria\n a partir de lo mínimo y comenzar a escribir una historización poética. Poetas: Beatriz Vallejo, Aguirre Molina, Hugo Padeletti, Aldo Oliva, Julia Enriquez y Andrea Ocampo.<br /><strong>4. El reino de las palabras imposibles</strong>: En este reino aparecen dinámicas del decir que dejan a la vista el lenguaje como comunicación y transparencia. La lectura vehiculiza la musicalidad del poema mostrando que no existe un modo\n sino modos decir. La voz como modo de sostener pero también de decir y de hacer. En el recorrido de estos poemas, los alumnos podrán deshacerse de la noción equívoca del lenguaje entendido como un decir siempre igual, idéntico.<br /> Los poemas que\n deambulan en este reino abren a los lectores el poder de reflexionar sobre los modos de decir, la verdad y la construcción de la realidad. Poetas: Rosemberg, Gabriela De Cicco, Estela Figueroa, Arturo Fruttero, Maia Morosano, Méndez Bujonok.\n <br /></p>"
  },
  {
    cod: "BIBELM011",
    título: "El monstruo de Frankenstein",
    autoría: "Biblioteca Nacional Mariano Moreno",
    editorial: "Biblioteca Nacional Mariano Moreno",
    páginas: 119,
    año: 2018,
    ejemplares: 0,
    categoria: "Otros",
    sinopsis: "<p dir=\"ltr\" style=\"text-align:justify;padding:1em;\">\n<span><strong><a href=\"https://www.bn.gov.ar/micrositios/exposiciones/categoria1/el-monstruo-de-frankenstein\">Catálogo de la exposición llevada a cabo en la Sala Leopoldo Lugones de la Biblioteca Nacional Mariano Moreno de la República Argentina, de junio de 2018 a marzo de 2019</a>. </strong></span><em><strong><br /></strong></em><br /><em>El monstruo de Frankenstein</em> revela aspectos poco conocidos de Mary Shelley y de su obra y propone un recorrido a través de las relaciones intelectuales en las que creció la autora. Shelley, quien tenía dieciocho años cuando concibió este relato,\n utilizó elementos del gótico, del romanticismo y del positivismo, de la ciencia y del ocultismo para escribir esta novela que terminó siendo, como el engendro sin nombre de Víctor Frankenstein, una criatura heterogénea, hecha de fragmentos de distinta\n procedencia. <br />\nLa muestra exhibe ediciones ilustradas de <em>Frankenstein</em>, los libros en los que Mary Shelley se inspiró a la hora de escribir su novela, tanto científicos como filosóficos y literarios, en ediciones muy antiguas pertenecientes al acervo de la Biblioteca\n Nacional. También los textos de los padres de la escritora: Mary Wollstonecraft, autora de uno de los primeros libros feministas, <em>Vindicación de los derechos de la mujer</em>, de 1792, y William Godwin, precursor del pensamiento anarquista con<em> Investigación sobre la justicia política y su influencia en la virtud y felicidad de la gente</em>,\n de 1793. Además de una selección de fragmentos de los clásicos cinematográficos más destacados basados en <em>Frankenstein</em>, afiches de los filmes, historietas y libros infantiles que toman al monstruo como protagonista. La escenografía recrea\n el espíritu de época y las condiciones de producción del personaje. Doscientos años después de su publicación, <em>Frankenstein </em>ocupa en el imaginario popular un lugar de privilegio al que esta muestra rinde homenaje.<br /></p>"
  }
];

//Creación y exportación de una promesa que simula una llamada asíncrona
export const getProducts = ()=>{
    let error = false
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                //existe el error, rechazamos
                reject('Hubo un error intente mas tarde')
            }else{
                resolve(productos)
            }   
        },2000)
    })
}

export const getItem = (cod) =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            let prod = productos.find((item)=> item.cod === cod)
            resolve(prod)
        },2000)
    })
}
