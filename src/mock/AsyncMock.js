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
    categoria: "Poesía",
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
  },
  {
    cod: "SOFANT012",
    título: "Antología degenerada: una cartografía del lenguaje inclusivo",
    autoría: "Sofía de Mauro (compiladora); Daniela Catrileo; val flores; María Moreno; Susy Shock; Emmanuel Theumer; Lucas Monstro; Mara Glozman; Morena García; María Pia López; Maleno Damin Abba; Paula Salerno; Nadia Zúñiga; emma song; Celeste Saravia; Ga Veleizan; Javier Gasparri; Gabby De Cicco",
    editorial: "Ediciones Biblioteca Nacional",
    páginas: 265,
    año: 2021,
    ejemplares: 1,
    sinopsis: "<p dir=\"ltr\" style=\"text-align:justify;padding:1em;\">Antología degenerada es un llamado por lo colectivo. Es un grito que impulsa el trazado de una cartografía insurrecta, deslenguada, atrevida, desacatada. No venimos a proponer una forma de hablar o a vaticinar un cambio lingüístico. No esperen leer en\n las próximas páginas una guía de uso, un manual de estilo, alguna definición precisa o instrucciones de corrección política. Esta antología invita a recorrer las maneras en que imaginamos habitar vidas no binarias, antipatriarcales, antirracistas,\n en un mundo que se obstina por lo binario, patriarcal y racista. Armamos una cartografía posible en torno al problema del lenguaje “inclusivo”. Posible, porque presentamos algunas formas de imaginarnos: nuestras trincheras en los márgenes del mapa\n oficial. Y hablamos de la inclusión como problema porque es un término que nos cobija y nos expulsa al mismo tiempo, nos incomoda y lo venimos a incomodar. Este libro es un problema y una posibilidad.<br /></p>"
  },
  {
    cod: "JESLEN013",
    título: "Lengua y literatura en foco: ESI en la formación docente",
    autoría: "Jesica Baez (compiladora)",
    editorial: "Homo Sapiens",
    páginas: "",
    año: "",
    ejemplares: 3,
    sinopsis: "<p dir=\"ltr\" style=\"text-align:justify;padding:1em;\">¿Qué educaciones sexuales insisten en la formación de “profes de Letras”? ¿Qué apuestas y estrategias son necesarias para implementar la ESI en este campo disciplinar? ¿Cuál es el canon literario y qué acciones críticas/transformadoras habilita la ESI?\n ¿Qué implica la transversalización de la perspectiva de género en la enseñanza de la teoría literaria? ¿Qué debates hace visibles el “lenguaje inclusivo”? ¿Qué motorizaciones se hacen posibles a la tarea de escribir, leer y editar cuándo se permea\n la enseñanza desde una pedagogía feminista?<br /></p>"
  },
  {
    cod: "GRAEDU014",
    título: "Educación sexual integral con perspectiva de género: la lupa de la ESI en el aula",
    autoría: "Graciela Morgade (coordinadora); Jescia Baez; Paula Fainsold; Susana Zattara; Catalina Gonzalez del Cerro; Gabi Díaz Villa; Cecilia Ortman; Andres Malizia; Mónica Melo; Marta Busca; Graciela Reale",
    editorial: "Homo Sapiens",
    páginas: 134,
    año: 2019,
    ejemplares: 2,
    sinopsis: "<div style=\"text-align:justify;padding:1em;\">\n<p><span xml:lang=\"es\" lang=\"es\">La colección “La lupa de la ESI” presenta\naportes para las diferentes “materias” que forman el currículum escolar\nclásico, intentando desplegar un análisis de cómo se modifican los\nconocimientos de referencia de cada disciplina y las formas de la enseñanza con\nla mirada de la ESI. Desde la\ninvestigación pedagógica en clases reales intentamos colaborar en la\nconstrucción de la “transversalidad” proclamada pero frecuentemente ausente en\nlas escuelas. </span></p>\n<p>Índice</p>\n<p>Presentación - p. 7</p>\n<p>1. Aproximaciones teóricas en género y sexualidades. Estado de situación - p. 13</p>\n<p>2. Géneros y sexualidades en la educación de hoy - p. 23</p>\n<p>3. Docentes y pedagogía ESI/queer/trans - p. 47</p>\n<p>4. Políticas educativas y ESI - p. 65</p>\n<p>5. Debates epistemológicos y metodológicos de la investigación y la intervención educativa en ESI - p. 83\n</p>\n<p>6. ¿Transversal? Límites y posibilidades - p. 97</p>\n<p>7. Recursos - p. 117</p>\n<p>Bibliografía citada - p. 131</p><br /><p></p></div>"
  },
  {
    cod: "JESGE015",
    título: "Generizando\" la lengua y la literatura desde la cotidianeidad del aula",
    autoría: "Jésica Báez; Andrés Malizia; Mónica Melo",
    editorial: "Homo Sapiens",
    páginas: 134,
    año: 2020,
    ejemplares: 2,
    sinopsis: "<p dir=\"ltr\" style=\"text-align:justify;padding:1em;\">¿Cómo abordar la Educación Sexual con perspectiva de género en la materia de Lengua y Literatura en el aula? En este cuarto libro exploraremos distintos itinerarios para abrir la reflexión: ¿se trata de incluir un canon de textos específicos que aborden\n las sexualidades?, ¿incluir mujeres autoras es una alternativa?, ¿implica tematizar los derechos sexuales y reproductivos? En la primera parte se reflexiona en torno a la configuración de la asignatura de Lengua y Literatura, como disciplina escolar,\n los aportes de la perspectiva de género y pedagogía feminista, para comenzar a dar respuesta a cómo incluir la educación sexual en el aula. En la segunda se revisan los lineamientos curriculares dispuestos a partir de la ESI. En la tercera se comparten\n y analizan tres experiencias de inclusión de educación sexual en espacios de Lengua y Literatura que acontecieron en escuelas secundarias públicas de la Ciudad de Buenos Aires entre el 2009 y el 2014.<br /></p>"
  },
  {
    cod: "NORLAE016",
    título: "La enseñanza de la lengua en la Escuela Media: Fundamentos y desafíos",
    autoría: "Norma B. Desinano; Liliana Sanjurjo; Marcia Arbusti; Ma. Cecilia Milan; Lucía Romanini; María Fernanda Foresi",
    editorial: "Homo Sapiens",
    páginas: 259,
    año: 2016,
    ejemplares: 0,
    sinopsis: "<p dir=\"ltr\" style=\"text-align:justify;padding:1em;\">Esta publicación es la tercera de una colección que tiene como objetivo tomar diversas contribuciones teóricas sobre el tratamiento didáctico de contenidos específicos, apuntando a resoluciones didácticas posibles. No es un estudio crítico de teorías\n ni un repositorio de estrategias didácticas. Lo que se busca es fundamentar nuestras elecciones para mostrar cómo determinados conocimientos podrían verse reflejados en mejores prácticas lingüístico-discursivas.<br /></p>"
  },
  {
    cod: "SILCLU017",
    título: "Clubes de lectura y de escritura. Hacia la construcción de una pedagogía del deseo de la palabra",
    autoría: "Silvia Paglieta",
    editorial: "Homo Sapiens",
    páginas: 126,
    año: 2020,
    ejemplares: 1,
    sinopsis: "<p dir=\"ltr\" style=\"text-align:justify;padding:1em;\">Los clubes de lectura y de escritura constituyen una oportunidad para organizar propuestas vinculadas con la palabra. Se constituyen como una experiencia de trabajo sostenida tanto en ámbitos educativos como en espacios no convencionales, para lectores\n y escritores experimentados o para los que recién empiezan. Los clubes de lectura convocan, unifican, sostienen acciones donde los libros, las historias personales o no, los relatos y los poemas son herramientas de comunicación real y concreta. No\n son espacios teóricos sino de práctica y de encuentro en la práctica donde, desde del desarrollo de consignas y de acciones vinculadas con la aceptación de la experiencia propia y la compartida se avanza en la palabra como paso fundamental en la construcción\n de la subjetividad. Este libro presenta modos de organización, modalidad y propuestas variadas para que cada mediador pueda elegir y enriquecer cada una de las postas que aquí se señalan. No es una oportunidad más, una oferta pedagógica más. Es una\n propuesta posible, concreta y duradera. Así como duran las palabras.<br /></p>"
  },
  {
    cod: "KARLIT018",
    título: "Literatura y adolescencia: cómo entusiasmar a los jóvenes lectores",
    autoría: "Karina Echeverría",
    editorial: "Homo Sapiens",
    páginas: 126,
    año: 2019,
    ejemplares: 3,
    sinopsis: "<p dir=\"ltr\" style=\"text-align:justify;padding:1em;\">Leer con jóvenes (y no solo leer para jóvenes) es una de las premisas de “Literatura y adolescencia”, que desarrolla con efectividad sus propuestas de selección de textos y actividades para el aula. A partir de conceptos clave como la motivación, el diálogo\n y la autonomía, el libro explora, además, las posibilidades didácticas de redes, app, TV, youtube. Afirma la autora: “De nuestra convicción sobre el valor de la lectura literaria, de nuestro ejemplo como lectores y de nuestra apertura al diálogo surgirán\n nuevas lecturas y relecturas”.<br /></p>"
  },
  {
    cod: "NORSAB019",
    título: "Saber de lectura",
    autoría: "Norma Desinano",
    editorial: "Aique",
    páginas: 88,
    año: 2020,
    ejemplares: 2,
    sinopsis: "<p dir=\"ltr\" style=\"text-align:justify;padding:1em;\">\nEste libro ofrece una apoyatura epistemológica para llegar al concepto de lectura. Por eso, el concepto “surgirá de la elaboración consciente de los criterios que guían nuestros propios procesos de lectura,\n de las actividades que realizamos durante esos procesos, y de los alcances y los límites de toda estrategia que propongamos para orientar nuestras acciones didácticas cotidianas en el ámbito escolar”,\n dice la autora. Como los otros libros de esta Colección, este tiende un puente entre los docentes y los estudiantes de profesorados, y los especialistas en disciplinas específicas, quienes ponen\n a nuestro alcance, de manera sencilla, teorías, explicaciones y conceptos que ayudan a superarnos al contar con las herramientas requeridas para entender y actuar de manera adecuada en las aulas.</p>"
  },
  {
    cod: "HUGELN020",
    título: "El nuevo desafío de la ortografía",
    autoría: "Hugo Salgado",
    editorial: "Aique",
    páginas: 176,
    año: 2011,
    ejemplares: 2,
    sinopsis: "<div style=\"text-align:justify;padding:1em;\">\n\n <p>El nuevo desafío de la ortografía aborda todas las dificultades ortográficas del español a partir de estrategias de observación y deducción, de diversos juegos y de actividades con propuestas para repasar todo lo aprendido.Con la misma propuesta\n didáctica que subyace en los anteriores Desafíos y en los Quitafaltas, este Nuevo Desafío profundiza dicha concepción trabajando las dificultades ortográficas (b/v, c/s/z, g/j, tilde/ausencia de tilde, coma/punto y coma, etc.). De este\n modo, además de suministrarse la información que dan las reglas, se trata de promover la conciencia de las diversas posibilidades de error que caracterizan nuestro sistema de escritura. Esta conciencia ortográfica constituye el conocimiento\n previo necesario para alcanzar la correcta escritura. (Nadie puede corregir aquel error del cual no es consciente).</p>\n <p>El tratamiento de los temas se ajusta a una actualización que se funda en los estudios que la Real Academia Española desarrolla para el uso del español de hoy en día. Por ejemplo, el lector podrá reconocer los usos de la tilde en casos especiales,\n como los que adquiere una palabra con pronombres enclíticos o proclíticos, o bien, en el caso de la “o”, que se sugiere sea tildada entre guarismos.</p>\n <p><strong>Estructura del libro</strong></p>\n <p>El material está dividido en tres secciones (uso de letras, uso de tilde y uso de mayúscula y signos de puntuación), pues cada área presenta particularidades propias que exigen abordajes didácticos diferentes. Al término de cada una de ellas,\n aparecen recopiladas en una sola hoja todas las reglas estudiadas. De este modo, aquel que lo desee puede recortar dichas hojas y tenerlas siempre a mano, como un Índice ortográfico de fácil consulta.</p>\n </div>"
  },
  {
    cod: "MARREF021",
    título: "Reflexiones en torno a la diversidad lingüística: propuestas para el aula de escuela secundaria",
    autoría: "Marcia Arbusti",
    editorial: "UNR",
    páginas: "",
    año: 2018,
    ejemplares: 1,
    sinopsis: "<p dir=\"ltr\" style=\"text-align:left;\">Serie: Lectura y escritura en la escuela secundaria - Cuaderno 3 - Programa de Voluntariado UNR<br /></p>"
  },
  {
    cod: "MARREF022",
    título: "Reflexiones en torno a la comunicación: propuestas para el aula de escuela secundaria",
    autoría: "Marcia Arbusti",
    editorial: "UNR",
    páginas: "",
    año: 2018,
    ejemplares: 1,
    sinopsis: "<p dir=\"ltr\" style=\"text-align:left;\">Serie: Lectura y escritura en la escuela secundaria - Cuaderno 4 - Programa de Voluntariado UNR<br /></p>"
  },
  {
    cod: "LUCREF023",
    título: "Reflexiones en torno a las perspectivas sobre el discurso, la lectura y la escritura: propuestas para el aula de escuela secundaria",
    autoría: "Lucía Romanini",
    editorial: "UNR",
    páginas: "",
    año: 2018,
    ejemplares: 1,
    sinopsis: "Serie: Lectura y escritura en la escuela secundaria - Cuaderno 1 - Programa de Voluntariado UNR"
  },
  {
    cod: "MARREF024",
    título: "Reflexiones en torno a las prácticas de lectura y escritura: propuestas para el aula de escuela secundaria",
    autoría: "María Cecilia Milan",
    editorial: "UNR",
    páginas: "",
    año: 2018,
    ejemplares: 1,
    sinopsis: "<p dir=\"ltr\" style=\"text-align:left;\">Serie: Lectura y escritura en la escuela secundaria - Cuaderno 2 - Programa de Voluntariado UNR<br /></p>"
  },
  {
    cod: "LUICOS025",
    título: "Cosas que quedaron lejos",
    autoría: "Luisina Valenti",
    editorial: "Fondo Editorial Municipal de Rafaela",
    páginas: 84,
    año: 2021,
    ejemplares: 1,
    sinopsis: "<div style=\"text-align:justify;padding:1em;\">\n <p dir=\"ltr\">Todo lo que es sencillamente hermoso, el día y sus aires de libertad. En los poemas de Luisina hay perros vagos al sol y grillos que fuman por las noches, plazas con árboles dinosaurios y estrellas con vestidos incandescentes, tacitas rotas y chancleteadas\n sandalias de charol. Hay chicas que besan, que bailan, que se acompañan, que duermen en colchones como princesas junto a una montaña de mochilas y zapatillas. Chicas comunes y silvestres como florcitas de un jardín plebeyo. Todo se siente tan\n cercano.<br />Margarita Porete llamaba “el lejoscerca” a esa presencia amorosa que llena el alma de las cosas. Así que Luisi usa unos anteojos de ver lejoscerca y descubre en lo cotidiano destellos de belleza total. Por eso sus poemas son translucidos,\n dejan pasar la luz, que se vuelca por la ventana y se derrama en el piso, que salta por la reja , corre por el pasillo y se escapa como las liebres.<br />Entonces un poema puede ser del azul Klein del atardecer, o del color de la luz de la mañana\n que se diluye a través de una cortina fuccia. Hay otros color verde cielo, color lluvia lila, color charco, color mandala, color tarde lavada.<br />Las palabras son joyas de fruta en esta escritura. ¡Que placer, poemas con sabor a fresa y a crema\n pálida! ¡Que deleite, poemas con olor a limón silvestre y a caramelo de limón de la canción de 2 minutos! <br />Calidez del sol. Leer este libro es como ponerse un abrigo blando, como meter el hocico de cachorro en el hueco tibio de una clavícula\n y dormirse ahí.<br />Transparencia de la lluvia. Llorar es ser una con el universo.<br />Versos que fluyen lejoscerca revelando la simpleza de su amorosidad.<br />Dice la poeta usando una voz de mojarrita: río dulce / qué fácil me arrastraste / si solo\n supieras / que fui yo /quien se dejó llevar.\n <br /> <br />ROBERTA IANNAMICO<br /><br /></p>\n</div>"
  },
  {
    cod: "MARFRA026",
    título: "Frankenstein",
    autoría: "Mary Shelley",
    editorial: "Plaza & Janes",
    páginas: 297,
    año: 1818,
    ejemplares: 1,
    sinopsis: "<p dir=\"ltr\" style=\"text-align:justify;padding:1em;\"><span><span>En el verano de 1816, Lord Byron invita al poeta Percy Bysshe Shelley y a su joven esposa, Mary, a su casa de Suiza. Los días son lluviosos y el anfitrión propone que cada uno escriba un relato de fantasmas. Así surgirá Frankenstein o el moderno Prometeo, publicada en 1818 y considerada la primera novela del género de ciencia ficción. Atrapado en los hielos del Ártico, Victor Frankenstein es rescatado por el capitán Walton. Dedicará sus últimos días a narrarle la trágica historia de sus experimentos en búsqueda del poder de dotar de vida a la materia inerte y cómo el ser que creó se rebelaría contra él. </span></span><br /></p>"
  },
  {
    cod: "EMICUM027",
    título: "Cumbres borrascosas",
    autoría: "Emily Brontë",
    editorial: "Gradifco",
    páginas: 320,
    año: 1847,
    ejemplares: 1,
    sinopsis: "<p dir=\"ltr\" style=\"text-align:justify;padding:1em;\"><span><span>Cumbres borrascosas, la única novela de Emily Brontë, narra la \népica historia de Catherine y Heathcliff, situada en los sombríos y \ndesolados páramos de Yorkshire, constituye una asombrosa visión \nmetafísica del destino, la obsesión, la pasión y la venganza. Con ella, \nEmily Brontë, que la publicó bajo un seudónimo masculino (Ellis Bell), rompió por \ncompleto con los cánones del decoro que la Inglaterra victoriana exigía \nen toda novela, tanto en el tema escogido como en la descripción de los \npersonajes.</span></span><br /></p>"
  },
  {
    cod: "PABELI028",
    título: "El inventor de juegos",
    autoría: "Pablo de Santis",
    editorial: "loqueleo",
    páginas: 220,
    año: "",
    ejemplares: 1,
    sinopsis: "<p dir=\"ltr\" style=\"text-align:justify;\">Iván Dragó participa en un concurso de juegos. Inventa un juego y recibe una carta en la que le dicen que ha resultado elegido entre otros diez mil chicos. Esta situación le cambia la vida. Sus padres desaparecen y se ve obligado a vivir primero con su\n tía y luego con su abuelo, el famoso inventor de juegos Nicolás Dragó. En la ciudad de Zyl, cuna de los juegos, se abrirá para él un mundo de aventuras y misterios.<br /></p>"
  },
  {
    cod: "SERTRE029",
    título: "Tres marcianos",
    autoría: "Sergio Bizzio",
    editorial: "Interzona",
    páginas: 81,
    año: 2020,
    ejemplares: 1,
    sinopsis: "<div dir=\"ltr\" style=\"text-align:justify;\">\n<p><em>“-¿Qué hacés disfrazado así, no tenés calor?</em></p>\n\n<p><em>–No estoy disfrazado, soy un ser de otro planeta”.</em></p>\n\n<p> </p>\n\n<p>Hay unos destellos que iluminan por un instante la negrura del espacio exterior. Son tres cuentos brillantes de Sergio Bizzio con protagonistas que vienen del campo, de la ciudad o de otros planetas.</p>\n\n<p>Un gaucho le asegura a su cortejada que hay un plato volador estacionado en la cima de un monte y que, esa misma noche, están invitados a conocer a sus tripulantes.</p>\n\n<p>Un ser al que solo se lo puede visitar con turno previo ha conmocionado la vida de todo el pueblo; los vecinos no consiguen asimilar lo que ocurre durante esos encuentros.</p>\n\n<p>Tras un viaje espacial de más de dos años, una pareja vuelve a verse, sin embargo, el abrazo se torna inquietante: el otro parece no ser exactamente la misma persona que se abandonó.</p>\n\n<p>Tres encuentros cercanos del primer tipo al mejor estilo Bizzio: atrapantes desde la primera línea, visuales en todo momento y que dejan la impresión -o la duda- de haber ocurrido realmente.</p><br /><p></p></div>"
  },
  {
    cod: "HERLOS030",
    título: "Los muertos del Riachuelo",
    autoría: "Hernán Dominguez Nimo",
    editorial: "Interzona",
    páginas: 111,
    año: 2018,
    ejemplares: 1,
    sinopsis: "<div dir=\"ltr\" style=\"text-align:justify;\">\"Bizarra, sangrienta pero también desopilante, la historia que nos cuenta un anónimo cronista político, por boca de Hernán Domínguez Nimo, circula a velocidades exquisitas, combina una prosa sarcástica y precisa con el cine clase B, el gore, la cultura\n popular, el humor oscurísimo y hasta la ternura. Narrador de probada imaginación, sofisticado creador de mundos, el autor se mete esta vez con una Argentina posible y construye una alegoría loca que hace reír y horroriza, una trama tan absurda como\n verdadera porque sale de su propio, su más actual barro maloliente. En la frontera de Buenos Aires, las aguas negras y aceitosas del Riachuelo esconden muertos. Cada muerto es una historia, una deuda, una injusticia impune. Contaminación, política\n corrupta, un Estado que abandona a la gente más vulnerable son causas previsibles. Lo imprevisible es lo que está por ocurrir\".<br /><br /> Elsa Drucaroff<br /></div>"
  },
  {
    cod: "NOROCT031",
    título: "Octubre, un crimen",
    autoría: "Norma Huidobro",
    editorial: "Norma",
    páginas: 175,
    año: 2022,
    ejemplares: 1,
    sinopsis: "<p dir=\"ltr\" style=\"text-align:left;\"></p><div><p>Inés encuentra, en \nel ruedo de un vestido, una carta de 1958. En ella, una adolescente pide\n ayuda a una amiga para evitar el asesinato de su padre y tal vez su \npropia muerte. Intrigada, la protagonista se embarca en una búsqueda \ndetectivesca que la llevará al barrio de San Telmo, a una casa antigua y\n a dos asesinatos sin resolver. ¿Será posible encontrar a los \nresponsables después de más de cuarenta años? Inés se pone en contacto \ncon Amparito, una jubilada que conoció a Elena, la autora de la \nmisteriosa carta. Juntas irán superando obstáculos, atando cabos hasta \nllegar a develar la verdad. <b>Obra ganadora del premio El Barco de Vapor 2004</b>.</p></div><br /><p></p>"
  },
  {
    cod: "BENARI032",
    título: "Aristóteles y Dante descubren los secretos del universo",
    autoría: "Benjamin Alire Sáenz",
    editorial: "Planeta",
    páginas: 328,
    año: 2012,
    ejemplares: 1,
    sinopsis: "<div dir=\"ltr\" style=\"text-align:justify;\">\n<p>Dante sabe nadar. Aristóteles, no. Dante es hablador y seguro de sí mismo. Ari duda todo el tiempo y le cuesta entablar una conversación con alguien. Dante no para de pensar en poesía y arte. Ari vuelve constantemente al recuerdo de su hermano que\n está en prisión. Dante es un sabelotodo que tiene una manera especial de entender el mundo. Ari es introvertido. Dante es más bien blanco. Ari es moreno.</p>\n<p>Y aunque a simple vista no tienen nada en común, se encuentran, y empiezan a pasar tiempo juntos. Así construyen una amistad entrañable que les permitirá aprender a creer en ellos mismos, a ser más grandes y descubrir los secretos del universo.</p><br /><p></p></div>"
  },
  {
    cod: "SIREST033",
    título: "Estudio en escarlata",
    autoría: "Sir Arthus Conan Doyle",
    editorial: "Penguin",
    páginas: 134,
    año: 1887,
    ejemplares: 1,
    sinopsis: "<p dir=\"ltr\" style=\"text-align:justify;\">Sherlock Holmes, reconocido universalmente como el mejor de los detectives, se enfrenta, con la inestimable ayuda de su amigo el Doctor Watson, a su primer caso. En una explosiva mezcla de crimen, suspense, pistas falsas y venganza, nuestros héroes deberán\n seguir el rastro de un misterioso asesino en las calles de Londres. La primera de muchas aventuras por venir, <i>Estudio en escarlata</i> nos introduce en el universo de Arthur Conan Doyle, uno de los padres de la novela policiaca. Un libro imprescindible\n para todo amante de la literatura que nos lleva a los orígenes de un personaje que se ha convertido en leyenda y que nunca pasa de moda.<br /></p>"
  },
  {
    cod: "SIRELP034",
    título: "El perro de los Baskerville",
    autoría: "Sir Arthus Conan Doyle",
    editorial: "Penguin",
    páginas: 199,
    año: 1902,
    ejemplares: 1,
    sinopsis: "<p dir=\"ltr\" style=\"text-align:justify;\">Después de que Charles Baskerville aparece muerto en circunstancias extrañas, Holmes y Watson se trasladan a los páramos de Dartmoor (Inglaterra) para ayudar a la familia Baskerville, víctima de una antigua y terrible maldición. Un perro diabólico parece\n acechar en los alrededores, amenazando la vida del nuevo heredero, y los detectives se verán envueltos en un laberinto de oscuras venganzas. Holmes tratará de que las supersticiones no enturbien su juicio, pero ¿conseguirá desentrañar el misterio\n antes de que la bestia ataque de nuevo? «No es cuestión de lo que sabemos, sino de lo que podemos demostrar».<br /></p>"
  },
  {
    cod: "LEADEC035",
    título: "De chicos a hombres: Guía de educación sexual integral para trabajar con los varones en la escuela y la familia",
    autoría: "Leandro Cahn, Mar Lucas, Cecilia Valeriano, y Marcela Gutiérrez",
    editorial: "Siglo XXI",
    páginas: 176,
    año: 2023,
    ejemplares: 1,
    sinopsis: "<p dir=\"ltr\" style=\"text-align:left;\">Aprendieron (les enseñamos) que debían ser fuertes, valientes, protectores y proveedores. Que las emociones no se muestran. Pero la realidad cambió, y ahora les exige reconocer sus privilegios y hacerse cargo de las violencias que conllevan. A veces con alivio, otras con enojo y frustración, tienen que desaprender reglas que no inventaron y responsabilizarse de una herencia que no pretendían. Mientras lidian con mandatos y eluden prejuicios, chicos y adolescentes de hoy van descubriendo cómo hacerse hombres en este mundo de verdades que tambalean. Son tiempos de redes, escraches, protocolos, en los que las chicas asumieron un protagonismo novedoso y a veces inquietante. Por eso, con una perspectiva basada en la Educación Sexual Integral, Leandro Cahn y el equipo de Fundación Huésped proponen empezar por un glosario que a la vez aclara y desafía nuestras nociones más internalizadas: cómo se incorporan los roles de género, qué son los micromachismos, de dónde surgen y cómo trabajan los discursos de odio. Pero como no se trata de formular nuevos mandatos ni de agitar consignas, este libro recorre historias reales de adolescentes reales para pensar y ofrecer herramientas con las que acompañarlos en su camino de crecer, desde la libertad y el respeto, en las muchas formas posibles de ser varón. Con la mirada atenta en lo que les pasa a chicos y chicas, en cómo viven los cambios las familias, y también en cómo se transforman y adaptan instituciones y normativas, De chicos a hombres propone estrategias de intervención concretas para cada ámbito: escuelas, familias, centros de educación no formal, espacios de salud. Es una extraordinaria guía práctica, un manual de navegación para estos mares inciertos y, sobre todo, una invitación a la conversación franca con la que acompañar a niños, niñas y adolescentes a desarrollarse y ser quienes quieren ser. <br /></p>"
  },
  {
    cod: "HORENU036",
    título: "En un lugar incierto",
    autoría: "Horacio Covertini, Florencia Gattari, Esteban Valentino, Marcelo Damiani, Sebastián Vargas, Fabián Martínez Siccardi, Liza Porcelli Piussi, George Orwell, Mario Vargas Llosa",
    editorial: "SM",
    páginas: 128,
    año: 2014,
    ejemplares: 1,
    sinopsis: "<p dir=\"ltr\" style=\"text-align:left;\">Antología narrativa<br /></p>"
  },
  {
    cod: "JORMIE037",
    título: "Mientras caminamos",
    autoría: "Jorge Accame, Roberto Arlt, Horacio Covertini, Julio Cortázar, Marcelo Damiani, Filisberto Hernández, Miguel Hernández, Alberto Manguel, Mary Flannery O'Connor, Luza Porcelli Piussi, Horacio Quiroga, Verónica Sukaczer, Esteban Valentino, Beatriz Vignoli, Eduardo Wilde",
    editorial: "SM",
    páginas: 80,
    año: 2014,
    ejemplares: 1,
    sinopsis: "<p dir=\"ltr\" style=\"text-align:left;\">Antología<br /></p>"
  },
  {
    cod: "CECPRO038",
    título: "Proyecto Yuyal: Otoño",
    autoría: "Cecilia Alvado (comp.), Susana Altuna (comp.), Miriam Priotti (comp.), Agustina Baligue, Diego Margutti, Marcela Fumale, Julian Piñero Flores, Zoe Armigol, Susana Zamberletti, Florencia Giacometti,",
    editorial: "Proyecto Yuyal",
    páginas: "",
    año: 2023,
    ejemplares: 1,
    sinopsis: "<p dir=\"ltr\" style=\"text-align:left;\">Poesía venadense.<br /></p>"
  },
  {
    cod: "CECPRO039",
    título: "Proyecto Yuyal: Invierno",
    autoría: "Cecilia Alvado (comp.), Susana Altuna (comp.), Marias Vazquez, Elsa Pfleiderer, Francisco Santi Barbey, Lucas Martinez, Cristian Foresi, Melina Jazmin, Xiomara Parola, Sol Paolli, Victoria Roldán, Lucúa Wysem, Iara Zallio",
    editorial: "Proyecto Yuyal",
    páginas: "",
    año: 2023,
    ejemplares: 1,
    sinopsis: ""
  },
  {
    cod: "CECLEN040",
    título: "Lengua y literatura 2: Proyecto Nodos",
    autoría: "Cecilia Serpa, Noelia Nair Vitalli, Mariana Calcagno, Andrea Cordobes, Andrea Baronzini",
    editorial: "SM",
    páginas: 272,
    año: 2014,
    ejemplares: 1,
    sinopsis: "<p dir=\"ltr\" style=\"text-align:left;\">Manual escolar<br /></p>"
  },
  {
    cod: "STAREL041",
    título: "Relatos del piloto Pirx",
    autoría: "Stanislaw Lem",
    editorial: "Interzona",
    páginas: 456,
    año: "",
    ejemplares: 1,
    sinopsis: "<div dir=\"ltr\" style=\"text-align:justify;padding:1em;\">A lo largo de estos cuentos tan divertidos como mordaces, seguiremos la vida de Pirx desde que es un joven cadete hasta que llega a convertirse en un renombrado cosmonauta mientras atraviesa las pruebas más duras valiéndose únicamente de su sentido común, una buena dosis de suerte y, sobre todo, sus propias limitaciones. Lejos de ser un superhéroe, se ha convertido en uno de los personajes más famosos de la literatura de ciencia ficción, gracias a su simpleza de hombre común, a su cobardía y sus prejuicios. Un héroe que no destaca ni por su talento ni por su astucia, pero que sin embargo siempre consigue salir victorioso o al menos indemne de las más curiosas y complicadas situaciones.<br />Aventuras filosóficas para ser leídas por jóvenes de entre 7 y 107 años, ambientadas en una humanidad en plena conquista del espacio y que nos invitan a reflexionar sobre la naturaleza humana, la inteligencia artificial y otros despropósitos semejantes para demostrar con argumentos tan irrefutables como la risa que la vida es algo pasajero y desprovisto de sentido. Los turbulentos viajes de Pirx nos enseñan que al fin y al cabo, con un poco de audacia, curiosidad y buena suerte, es posible reunir el coraje suficiente para enfrentar las frías extensiones del espacio infinito.</div>"
  },
  {
    cod: "CÉSELM042",
    título: "El mármol",
    autoría: "César Aira",
    editorial: "La Bestia Equilátera",
    páginas: 152,
    año: 2011,
    ejemplares: 1,
    sinopsis: "<p dir=\"ltr\" style=\"text-align:justify;padding:1em;\">A falta de cambio, el cajero de un supermercado chino le ofrece al protagonista de esta novela que elija entre un montón de naderías. Resignado, el hombre manotea al azar unas pilas chinas, un ojo de goma con luz, una tabla de proteínas, una hebilla dorada, una cucharita lupa, un anillo de plástico y una cámara fotográfica del tamaño de un dado. Ignora que al salir lo espera una aventura, y que a esos objetos que cree inútiles podrá darles una función insólita en cada capítulo de sus andanzas.<br />Las novelas de César Aira convocan a un lector dispuesto a jugar con él el juego de la improvisación. Con la irreverencia de un niño y la inocencia de un artista genial, Aira consigue lo imposible: crear la sensación de que lo que cuenta va naciendo, frase a frase, en el puro presente del lector.<br />Heredero de las vanguardias del siglo XX, César Aira encontró en sus procedimientos un atajo hacia la fuente primordial de la narración y, con más de sesenta novelas publicadas, ha creado una obra entregada al riesgo y tocada por la gracia de una rara libertad.</p>"
  },
  {
    cod: "IVÁPOR043",
    título: "Por qué te vas",
    autoría: "Iván Hochman",
    editorial: "Alfaguara",
    páginas: 144,
    año: 2023,
    ejemplares: 1,
    sinopsis: "<div dir=\"ltr\" style=\"text-align:justify;padding:1em;\">\n<p>Milo vive con sus padres y su hermana, pero se quiere independizar. Mientras recorre la ciudad en bicicleta, visita departamentos en alquiler y se cruza con personajes desopilantes, alguien le va dejando, como pistas que no llevan a ningún lado, notas en las que se repite una pregunta: \"¿Por qué te vas?\". Condensando las ansias de toda una generación, <b>Iván Hochman</b> construye un relato con reminiscencias salingerianas, tierno, honesto y con un agudo sentido del humor en torno a la decisión de irse a vivir solo. <b>Por qué te vas</b> es una obra polifónica donde los testimonios de amigos que dieron el salto, las listas de pendientes y ciertos objetos queridos cuentan una historia e iluminan un futuro.</p>\n<p>Leer un fragmento <a href=\"https://www.penguinlibros.com/ar/literatura-contemporanea/338265-libro-por-que-te-vas-9786313010295/fragmento\">online</a>.</p>\n</div>"
  },
  {
    cod: "BORCUE044",
    título: "Cuentos duplicados",
    autoría: "Borges; Panpini; Unamuno; Cortázar; Mujica Láinez; Ándersen",
    editorial: "Cántaro",
    páginas: 156,
    año: 2005,
    ejemplares: 1,
    sinopsis: "<div dir=\"ltr\" style=\"text-align:justify;padding:1em;\">\n<p>Con frecuencia, el espejo nos sorprende con una imagen que nos desconcierta. En ocasiones, nos inquieta saber de alguien que se nos parece demasiado. ¿Quiénes son esos otros? ¿Imágenes duplicadas, sombras fantasmas...? ¿Qué hacer cuando nuestra identidad se ve amenazada? La literatura fantástica siempre ha jugado con las duplicaciones con las multiplicaciones del yo; del mismo modo en que la psicología ha teorizado acerca de los símbolos culturales de la dualidad y del inconsciente humano.</p>\n</div>"
  },
  {
    cod: "MARSHA045",
    título: "Shakespeare para todos",
    autoría: "Marcos Mayer (ed.)",
    editorial: "Planeta",
    páginas: 199,
    año: 1997,
    ejemplares: 1,
    sinopsis: "<div dir=\"ltr\" style=\"text-align:justify;padding:1em;\">\n<p>Adaptación de una selección de obras de teatro de William Shakespeare a formato cuento.</p>\n</div>"
  },
  {
    cod: "MARELP046",
    título: "El príncipe y el mendigo",
    autoría: "Mark Twain",
    editorial: "Atlántida",
    páginas: 297,
    año: 1881,
    ejemplares: 1,
    sinopsis: "<div dir=\"ltr\" style=\"text-align:justify;padding:1em;\">¿Puede el destino de dos personas, tan parecidas como dos gotas de agua, ser tan distinto solo por vestir ropajes disímiles? ¿Puede la suerte cambiar tanto la vida si uno está ataviado como un mendigo o como un príncipe?<br />Tomás Canty, un chico condenado a la mendicidad por su padre, y el joven príncipe de Gales son los protagonistas de esta historia. Ambientada en la ciudad de Londres, en el siglo XVI, esta novela de corte histórico, que Mark Twain publicó por primera vez en 1881, refleja la existencia de dos mundos opuestos: el de la corte real y el del barrio de Offal Court, donde habitan los súbditos más pobres de la corona. Sin embargo, lo que empezó como un juego se convertirá en una aventura que cambiará para siempre la vida de estos jóvenes.\n<div> </div>\n</div>"
  },
  {
    cod: "FRAMUN047",
    título: "Mundo Kafka: La metmorfosis y otros relatos extraños",
    autoría: "Franz Kafka",
    editorial: "La Estación",
    páginas: 143,
    año: 1915,
    ejemplares: 1,
    sinopsis: "<div dir=\"ltr\" style=\"text-align:justify;padding:1em;\">\n<p>Gregorio Samsa se despierta convertido en un bicho. Poseidón cumple horario de oficina y se aburre de la distribución de aguas. Un hombre se encuentra ante las puertas de la ley, pero un guardia no le permite entrar.<br />Mundo Kafka presenta personajes inmersos en situaciones absurdas y burocráticas. ¿Cuál será la salida del laberinto? ¿Por dónde romper con la rutina?<br />Cada relato de esta antología esencial permite explorar el género extraño y acercarse a un clásico de la literatura universal.</p>\n</div>"
  },
  {
    cod: "STAELC048",
    título: "El congreso de futurología",
    autoría: "Stanislaw Lem",
    editorial: "Interzona",
    páginas: 128,
    año: 1971,
    ejemplares: 1,
    sinopsis: "<div dir=\"ltr\" style=\"text-align:justify;padding:1em;\">\n<p>Ijon Tichy es invitado al Octavo Congreso Mundial de Futurología en Costarricana, Nounas. Pero una fuerte presencia policial lanza <em>bampas</em> (Bombas de Amor al Prójimo) frente al Hilton, donde se hospedan los congresistas, para controlar una protesta social. Toda la población es sumida en una locura de confusión emocional. Así comienza la aventura alucinatoria de Tichy por extraños escenarios donde la ficción se confunde con la realidad y viceversa. Nuestro protagonista descubre, además de lo absurdo que puede llegar a resultar el universo en manos de los seres humanos, los efectos de la psiquímica, y la imposibilidad de conocer realmente algo en un mundo en el que las percepciones y hasta los sentimientos pueden ser manipulados sin límites. <br /><br />interZona presenta dentro de la colección Línea C <em>El congreso de futurología</em> en donde Stanisław Lem, universalmente reconocido como uno de los más grandes autores de literatura fantástica del siglo XX, retrata a través de una genial narrativa, plagada de humor e ironía, la aspiración al bienestar y los ideales de la sociedad contemporánea.</p>\n</div>"
  },
  {
    cod: "MARALG049",
    título: "Algo más",
    autoría: "Marcelo Cohen",
    editorial: "Sigilo",
    páginas: 208,
    año: 2016,
    ejemplares: 1,
    sinopsis: "<div dir=\"ltr\" style=\"text-align:justify;padding:1em;\">\n<p>Tras décadas de prosperidad, Isla Kump está en crisis. La población ha salido a la calle a reclamar la cabeza del gobierno sin tener una idea clara de para qué la quiere. Dos jóvenes se chocan en una esquina. Gaco lleva una piedra en la mano; Tamastú, un palo. Los mueve el mismo anhelo, la misma insatisfacción. Para cambiar el mundo, piensan, no basta con indignarse. Hay que hacer algo más. En eso se pasarán toda la vida.</p>\n<p>En el tono ligero de una novela de peripecias, y con el ritmo que impone una causa urgente, Marcelo Cohen actualiza los dilemas políticos del sujeto contemporáneo en la piel de un dúo dinámico que no puede parar de idear y llevar a la práctica formas de resistencia y modos del hacer que contesten la eterna pregunta de cómo vivir juntos. Todo cabe en esta isla del Delta Panorámico: el arte, la ciencia y la empresa privada, los conflictos con el poder y los vínculos entre pares, los trabajos de la ciudad y el campo, el riesgo ecológico, la búsqueda de la autonomía en un entramado de interdependencias, la celebración de la vida en su prodigiosa variedad.</p>\n<p>Creador de palabras y de mundos, Marcelo Cohen encontró en el género fantástico un espacio de libertad radical que le permite contar nuevas historias de maneras siempre originales. Algo más es otra muestra de su afán por ampliar el horizonte de posibilidades de la literatura.</p>\n</div>"
  },
  {
    cod: "JOSELM050",
    título: "El mundo de Sofía",
    autoría: "Jostein Gaarder",
    editorial: "Siruela",
    páginas: 638,
    año: 1994,
    ejemplares: 1,
    sinopsis: "<div dir=\"ltr\" style=\"text-align:justify;padding:1em;\">\n<p>Poco antes de cumplir quince años, la joven Sofía recibe una misteriosa carta anónima con las siguientes preguntas: “¿quién eres?”, “¿de dónde viene el mundo?”. Éste es el punto de partida de una apasionada expedición a través de la historia de la filosofía. A lo largo de la novela, Sofía irá desarrollando su identidad a medida que va ampliando su pensmaiento a través de estas enseñanzas: porque la verdad es mucho más interesante y más compleja de lo que podría haber imaginado en un principio. </p>\n<p>Muestra disponible en la <a href=\"https://rincondepitagoras.sytes.net/web/libros/cultura/3A.372613811-El-Mundo-de-Sofia.pdf\">web</a>.</p>\n</div>"
  },
  {
    cod: "DAPLOS051",
    título: "Los pájaros",
    autoría: "Daphne Du Maurier; Alfred Hitchcok",
    editorial: "La Estación",
    páginas: 109,
    año: 2018,
    ejemplares: 1,
    sinopsis: "<div dir=\"ltr\" style=\"text-align:justify;padding:1em;\">\n<p>Nat Hocken vive con su familia en un típico pueblo inglés. Sin embargo, algo extraño está ocurriendo con los pájaros. Se ven más inquietos que nunca. En esta novela breve de Daphne du Maurier, estos animales se vuelven furiosos y la naturaleza amenaza al hombre. Además, Los Pájaros incluye una entrevista al maestro del suspenso, Alfred Hitchcock, quien adaptó esta novela al cine y la convirtió en un clásico. <br /><br />Adelanto disponible en la <a href=\"https://laestacioneditora.com/books/los-pajaros#\">web</a>.</p>\n</div>"
  },
  {
    cod: "ISACUE052",
    título: "Cuentos de Eva Luna",
    autoría: "Isabel Allende",
    editorial: "Sudamericana",
    páginas: 277,
    año: "",
    ejemplares: 1,
    sinopsis: ""
  },
  {
    cod: "MARALD053",
    título: "Aldao",
    autoría: "María Andruetto",
    editorial: "Random House",
    páginas: 224,
    año: 2023,
    ejemplares: 1,
    sinopsis: "<div dir=\"ltr\" style=\"text-align:justify;padding:1em;\">\n<p>Parir y abortar en la clandestinidad, insilio, prostitución y locura, la libertad y su pérdida, la búsqueda persistente de un padre, un linaje de mujeres unidas por las violencias de su tiempo y el regreso a Aldao, territorio ficcional convertido en caleidoscopio que, como el óleo de un paisaje de llanura, irradia historias con su sol de fuego.<br /><br />«Su fuerza, que la convierte en la Annie Ernaux sudamericana, consiste en no psicologizar, en no subrayar nada». Andrea Marcolongo, La Stampa Parir y abortar en la clandestinidad, autos cazando a chicos como moscas, delatores por todas partes, personas abandonadas a la buena de Dios, prostitución, militancia, locura e instituciones psiquiátricas atraviesan esta novela de María Teresa Andruetto. También la libertad y su pérdida, la búsqueda persistente de un padre, la dictadura, el insilio, la construcción de identidad y un linaje de mujeres unidas por las violencias de su tiempo. Y vuelve Aldao, territorio ficcional presente en sus otras novelas, convertido aquí en caleidoscopio que, como el óleo de un paisaje de llanura, irradia historias con su sol de fuego. «La memoria es un carretel que empieza a rodar y se me escapa de las manos y de la voluntad, porque una cosa lleva a la otra, como un río de montaña que serpentea, pega saltos y salpica aquí y allá sin que podamos detenerlo».<br /><br />Muestra disponible en la <a href=\"https://www.penguinlibros.com/ar/literatura-contemporanea/317179-libro-aldao-9789877692655/fragmento\">web</a>.</p>\n</div>"
  },
  {
    cod: "JOSLOS054",
    título: "Los ríos profundos",
    autoría: "José María Arguedas",
    editorial: "Horizonte",
    páginas: 231,
    año: 1958,
    ejemplares: 1,
    sinopsis: "<div dir=\"ltr\" style=\"text-align:justify;padding:1em;\">\n<p>Esta novela de Arguedas es importante, según el crítico Julio Ortega, no sólo \"por habernos descubierto un mundo nativo sino también la de revelarnos una nueva literatura, que él iniciaba con esta novela, clausurando por una parte el viejo indigenismo de buena voluntad y comenzando, por otra, nuestra moderna lectura de ese mundo discordante que resultaba ser el más nuestro, el más próximo y propio\". Ortega subraya que \"con esta novela, en efecto, el universo indígena peruano ingresa a la literatura universal por medio de un texto fundamental cuya calidad literaria fue de inmediato reconocida\"</p>\n</div>"
  },
  {
    cod: "ISAAMO055",
    título: "Amor",
    autoría: "Isabel Allende",
    editorial: "Sudamericana",
    páginas: 231,
    año: 2011,
    ejemplares: 1,
    sinopsis: "<div dir=\"ltr\" style=\"text-align:justify;padding:1em;\">\n<p>«Mi vida sexual comenzó temprano, más o menos a los cinco años, en el kindergarten de las monjas ursulinas, en Santiago de Chile.» Con estas palabras, Isabel Allende inicia este compendio sobre amor y eros compuesto por fragmentos escogidos de sus obras, que esbozan a través de sus personajes la propia trayectoria vital de la autora. Si hay alguien capaz de describir con maestría, personalidad y humor la naturaleza caprichosa del amor, es Isabel Allende. Esta recopilación de escenas de amor, seleccionadas de entre sus libros, son una invitación a sumergirse en la lectura, soñar y sonreír. </p>\n<p>Muestra disponible en la <a href=\"https://isabelallende.com/es/book/amor/excerpt\">web</a>.</p>\n</div>"
  },
  {
    cod: "DOMFAC056",
    título: "Facundo (o civilización y barbarie en las pampas argentinas)",
    autoría: "Domingo Faustino Sarmiento",
    editorial: "Grupo Editor Altamira",
    páginas: 253,
    año: 1845,
    ejemplares: 1,
    sinopsis: "<div dir=\"ltr\" style=\"text-align:justify;padding:1em;\">\n<p style=\"text-align:justify;\"><span style=\"font-weight:400;\">El </span><i><span style=\"font-weight:400;\">Facundo </span></i><span style=\"font-weight:400;\">de Domingo Faustino Sarmiento es escrito durante su exilio en Chile. La obra narra la vida del caudillo federal Juan Facundo Quiroga, quien desde la perspectiva sarmientina es considerado actor principal de la guerra intestina que desangró a las tierras del sur de América. Con un estilo de escritura combativa y portadora de un ideario político, la vida del Tigre de los Llanos es reflejada en el texto, diez años después de su muerte, siendo una crítica y denuncia del gobierno de Juan Manuel de Rosas.</span></p>\n<p style=\"text-align:justify;\"><span style=\"font-weight:400;\">Obra completa en la <a href=\"https://es.wikisource.org/wiki/Facundo_o_civilizaci%C3%B3n_y_barbarie_en_las_pampas_argentinas\">web</a>.<br /></span></p>\n</div>"
  },
  {
    cod: "MIGDON057",
    título: "Don Quijote de la Mancha",
    autoría: "Migue de Cervantes Saavedra",
    editorial: "Gradifco",
    páginas: 765,
    año: 1605,
    ejemplares: 1,
    sinopsis: "<div dir=\"ltr\" style=\"text-align:justify;padding:1em;\">\n<p>\"Don Quijote de La mancha\" es una obra fundamental de la literatura mundial. Es considerada la primera novela escrita en lengua castellana. Tanto en la primera parte (publicada en 1604) como en la segunda (publicada diez años después), Miguel de Cervantes Saavedra relata las aventuras y desventuras de Don Quijote, quien ha perdido la razón por leer ávidamente muchísimas novelas de caballería. La locura de Don Quijote consiste en creerse él mismo un caballero andante, como los protagonistas de aquellas novelas. Así sale a los caminos buscando aventuras y arrastra consigo a quien será su amigo y fiel escudero Sancho Panza.</p>\n</div>"
  },
  {
    cod: "HORCUE058",
    título: "Cuentos de amor, de locura y de muerte",
    autoría: "Horacio Quiroga",
    editorial: "Losada",
    páginas: 156,
    año: 1917,
    ejemplares: 1,
    sinopsis: "<div dir=\"ltr\" style=\"text-align:justify;padding:1em;\">\n<p>Muestra disponible en la <a href=\"https://es.wikisource.org/wiki/Cuentos_de_amor_de_locura_y_de_muerte\">web</a>.</p>\n</div>"
  },
  {
    cod: "ALELOS059",
    título: "Los áboles mueren de pie",
    autoría: "Alejandro Casona",
    editorial: "Losada",
    páginas: 105,
    año: 1949,
    ejemplares: 1,
    sinopsis: "<div dir=\"ltr\" style=\"text-align:justify;padding:1em;\">\n<p>Esta obra teatral fue estrenda en Bs. As. en 1953. Un anciano se empeña en mostrarle a su mujer, a través de cartas que él mismo le enviaba, que el nieto de ambos que vive en Canadá es una excelente persona, mientras que la realidad es que en los últimos quince años que éste reside en el exterior, llegó a transformarse en un delincuente estafador. Cuando el abuelo se entera de la supuesta muerte de su nieto en un accidente aéreo, contrata los servicios de Mauricio, director de una institución encargada de prestar fantasía, y a Isabel, para que reemplacen a su nieto y esposa que regresaban a la Argentina y de esta manera \"La Abuela\" no se entere ni del fallecimiento ni de la vida infame de su nieto. Es así entonces que estos personajes comienzan a vivir dentro de una hermosa ilusión hasta que la realidad les juega una mala pasada.</p>\n<p>Una ingeniosa mezcla entre realidad y fantasía, que hace que el público se divierta y emocione, y permanezca atento a un sorprendente y maravilloso final.</p>\n</div>"
  },
  {
    cod: "E.TELH060",
    título: "El hombre de arena",
    autoría: "E. T. A. Hoffmann",
    editorial: "Interzona",
    páginas: 80,
    año: 1817,
    ejemplares: 1,
    sinopsis: "<p dir=\"ltr\" style=\"text-align:justify;\">“¡El hombre de la arena! ¡El hombre de la arena!”. Yo corría a\n esconderme en el dormitorio, y la noche entera me atormentaba la imagen\n pavorosa del hombre de la arena. Ya era grande para darme cuenta de que\n el cuento de la criada sobre el hombre de la arena y los niños en la\n luna podía no ser cierta; sin embargo, el hombre de la arena seguía\nsiendo para mí un espectro terrorífico, y me horrorizaba no solo al\n oírlo subir las escaleras, sino también cuando abría con violencia la\n puerta del gabinete de mi padre y entraba en él.<br /></p>"
  },
  {
    cod: "JOHFAL061",
    título: "Fall River: trece cuentos no reunidos",
    autoría: "John Cheever",
    editorial: "Godot",
    páginas: 160,
    año: 2023,
    ejemplares: 1,
    sinopsis: "<p style=\"text-align:justify;\">La primera edición en inglés de Fall River. Trece cuentos no reunidos fue publicada en 1994 por Academy Chicago Publishers. Los trece cuentos incluidos constituyen la fuente más importante para acceder a la obra temprana de la escritura de John Cheever y entender las raíces de toda su trayectoria literaria. Los cuentos fueron ordenados cronológicamente, y en cada caso se indica el nombre de la publicación y la fecha en la que fueron editados. \"Hemos sido olvidados. Todo lo que sabemos no sirve para nada. Pero cuando pienso en mis tiempos por los caminos y en lo que hacía y en lo que ha sido de mí, rara vez pienso en todo eso con amargura. Hemos sido olvidados como viejas guías telefónicas o como almanaques viejos o como la luz de gas o esas grandes casas amarillas con cornisas y cúpulas que construían antes. Eso es todo. Aunque a veces me siento como si mi vida hubiese sido un fracaso total. Lo siento a veces por la mañana, mientras me estoy afeitando. Me pongo enfermo, como si hubiese comido algo que no me cayera bien, y tengo que bajar la navaja y sostenerme de la pared”.</p>"
  },
  {
    cod: "MANENE062",
    título: "En el corazón de un país sin nombre",
    autoría: "Manuel Bozzo",
    editorial: "Editorial Municipal de Rosario",
    páginas: 32,
    año: 2023,
    ejemplares: 1,
    sinopsis: "<p>La inmovilidad se apodera de la tarde y es como caminar por el interior de una fotografía. Las líneas del mapa dibujan interrogantes, hay malezas en los acordes y una trapecista escribe con su sombra. Nada para contar, solo construcciones delicadas, asimétricas, hechas con palabras revestidas por el timbre de una voz afilada como un cuchillo. Tal es el pulso de esta poesía visionaria en la que los elementos comunes de la realidad son llevados al exilio de las geometrías. </p>"
  },
  {
    cod: "LEOLAS063",
    título: "Las fuerzas extrañas",
    autoría: "Leopoldo Lugones",
    editorial: "Terramar Ediciones",
    páginas: 208,
    año: 1906,
    ejemplares: 1,
    sinopsis: "<p dir=\"ltr\" style=\"text-align:justify;\"><em>Las fuerzas extrañas</em>, de Leopoldo Lugones, es una serie de\n relatos publicados en 1906. Es un libro clave de la ciencia ficción y la\n fantasía argentina. Las historias giran en torno al conocimiento\n humano, y muchas están presentadas de una misma forma: un científico\n invita a alguien a su laboratorio para que vea los resultados de sus\n experimentos y a partir de ahí se desencadenan los acontecimientos. Los relatos de <em>Las fuerzas extrañas</em>\n suelen terminar con finales trágicos. Y se especula que muchas\n explicaciones pseudocientíficas de estas narraciones demostraron ser\n teorías científicas válidas años después.</p><p dir=\"ltr\" style=\"text-align:justify;\">El libro se encuentra, en otras ediciones, disponible en la <a href=\"https://www.argentina.gob.ar/sites/default/files/fuerzas_extranas_leopoldo_lugones.pdf\">web</a>.</p>"
  },
  {
    cod: "VIRLAM064",
    título: "La muerte de la polilla",
    autoría: "Virginia Woolf",
    editorial: "La bestia equilátera",
    páginas: 272,
    año: "",
    ejemplares: 1,
    sinopsis: "<p>Virginia Woolf encontró la clave para que vida y literatura fluyan en la página con pareja intensidad. La materia puede ser una carta a un joven poeta, la memoria personal e histórica del imprevisible Henry James, las primeras mujeres profesionales o el relato desnudo, donde la autora ejecuta una nota de elegancia elegíaca por la muerte de una polilla. En cada caso, Virginia Woolf revela que es sin duda uno de los genios más admirables y amistosos de la literatura universal.<br />La percepción recupera el valor intrínseco de la anécdota; una irreverencia fecunda proporciona desde el vamos el método riguroso e intransferible de la argumentación o el análisis. Recopilado poco después de la muerte de la escritora por el marido, Leonard Woolf, para darle continuidad a la variada sutileza de <em>Un cuarto propio</em> y <em>El lector común</em>, <em>La muerte de la polilla y otros ensayos</em> contiene el fuego indestructible de la autora de <em>Orlando</em> y <em>Las olas</em>, un elemento que cada uno reservará para sí mismo como un obsequio personal.</p>"
  },
  {
    cod: "ROBMEM065",
    título: "Memoria Romana y otros relatos inéditos",
    autoría: "Roberto Fogwill",
    editorial: "Blatt & Rios",
    páginas: 152,
    año: 2018,
    ejemplares: 1,
    sinopsis: "<div style=\"text-align:left;\">\n<p><i>Memoria Romana y otros relatos inéditos</i> incluye once textos de\n Fogwill fechados en los años setenta, ochenta y dos mil. Diez de ellos\n fueron rescatados de entre sus pertenencias, papeles personales y\n correspondencia, y forman parte del Archivo Fogwill. El otro, titulado\n “Un cambio de orgánico”, le fue robado al autor por uno de los editores\n de este libro.</p>\n<p>Los fechados en la década del setenta, anteriores a <i>Mis muertos punk</i>,\n su primer libro de relatos, muestran a un joven Fogwill experimentando\n en el género cuento, que lo iba a consagrar como uno de los mejores\n escritores argentinos del siglo XX. “Memoria Romana” es una novela\n corta, interrumpida pero no inconclusa, escrita durante la Guerra de\n Malvinas; tiene forma de diario y es contemporánea de <i>Los pichiciegos</i>. En los fechados en los dos mil está el Fogwill ya maduro y seguro de sus herramientas.</p>\n<p>Algunos más autobiográficos, otros más delirantes, siempre agudos, a\n veces provocadores, en todos brillan la potencia de la lengua y la\n imaginación para tramar historias, voces, miradas y fraseos que los\n lectores evocamos cuando leemos la palabra <i>Fogwill</i>.</p><br />\n</div>"
  },
  {
    cod: "JULELB066",
    título: "El bosque infinitesimal",
    autoría: "Julián López",
    editorial: "Penguin Random House",
    páginas: 224,
    año: 2022,
    ejemplares: 1,
    sinopsis: "<p>Virginia Woolf encontró la clave para que vida y literatura fluyan en la página con pareja intensidad. La materia puede ser una carta a un joven poeta, la memoria personal e histórica del imprevisible Henry James, las primeras mujeres profesionales o el relato desnudo, donde la autora ejecuta una nota de elegancia elegíaca por la muerte de una polilla. En cada caso, Virginia Woolf revela que es sin duda uno de los genios más admirables y amistosos de la literatura universal.<br />La percepción recupera el valor intrínseco de la anécdota; una irreverencia fecunda proporciona desde el vamos el método riguroso e intransferible de la argumentación o el análisis. Recopilado poco después de la muerte de la escritora por el marido, Leonard Woolf, para darle continuidad a la variada sutileza de <em>Un cuarto propio</em> y <em>El lector común</em>, <em>La muerte de la polilla y otros ensayos</em> contiene el fuego indestructible de la autora de <em>Orlando</em> y <em>Las olas</em>, un elemento que cada uno reservará para sí mismo como un obsequio personal.</p>"
  },
  {
    cod: "FEDOLI067",
    título: "Oliveros",
    autoría: "Federico Aicardi",
    editorial: "UNR Editora",
    páginas: 382,
    año: "",
    ejemplares: 1,
    sinopsis: "<p>A cinco minutos de comprarse la primera remera rockera negra, a cinco minutos de tener una casaca de Central (original) e ir solo a la cancha, nuestro Fer – protagonista absoluto de Oliveros- arranca unas vacaciones familiares y la década del 90 con una prolijidad, tanto en su vida como en su vestimenta, que pronto se verá salpicada literalmente de sangre. Un pueblo rebalsado de secretos, una colonia psiquiátrica con un prontuario real y otro de habladurías que suman mayor inquietud a lo que está ocurriendo durante aquel verano, crueldad animal y en el medio de una pesadilla que día a día se va corporizando; encima enamorarse. Fede Aicardi orgullosamente exhibe un ADN en el que conviven la obra de Stephen King, las películas de terror en VHS y el dúo sueco Roxette. Bestia Bebé rosarina: lo quiero mucho a este muchacho.</p>"
  },
  {
    cod: "GUAPEN068",
    título: "Pensar con otros: una guía de supervivencia en tiempos de posverdad",
    autoría: "Guadalupe Nogués",
    editorial: "El Gatos y la Caja",
    páginas: 368,
    año: 2020,
    ejemplares: 1,
    sinopsis: "<p dir=\"ltr\" style=\"text-align:justify;\">Este libro se propone ser un puntapié inicial para desmenuzar la\n posverdad en sus componentes principales a través de ejemplos concretos,\n como un modo de prepararnos mejor para identificar las estructuras que\n propician posverdad y de esa manera lograr, juntos, sobrevivir y vencer.\n La posverdad permite que los hechos se vuelvan hechos en la medida en\n que encajen en los deseos de cada grupo, de cada tribu. Cada uno de\n estos grupos desarrolla su propia narrativa con un lenguaje que\n privilegia la capacidad de incitar a las emociones, y empuja a esas\n emociones a construir paisajes solo accesibles a quienes compartan la\n forma de mirarlos. Esta discontinuidad en el paisaje es una amenaza\n para la existencia y desarrollo de vínculos humanos significativos, para\n nuestra convivencia como especie en este planeta y, así, para nuestra\n supervivencia. Por esto, consideraremos a la posverdad como un\n importante y urgente problema de salud pública, y este es nuestro aporte\n para solucionarlo entre todos.</p><p dir=\"ltr\" style=\"text-align:justify;\">Índice y contenidos en la <a href=\"https://elgatoylacaja.com/pensarconotros/indice\">web</a>.</p>"
  },
  {
    cod: "SANISL069",
    título: "Isla Decepción",
    autoría: "Santiago Hernández Aparicio",
    editorial: "EMR",
    páginas: 60,
    año: 2023,
    ejemplares: 1,
    sinopsis: "<p dir=\"ltr\" style=\"text-align:justify;\">Como el engaño en el que suelen caer navegantes y traductores, que a\n veces produce verdaderos hallazgos, el estado entre el sueño y la\n vigilia puede conducir al poeta al descubrimiento de otra realidad. Los\n nombres, escenas e imágenes de su biografía se amalgaman con temas y\n paisajes de cultura de un modo impredecible pero concertado, como el\n tambor de un lavarropas con un cuarteto de Beethoven. Entre el soneto y\n la prosa breve, una corriente continua de ensoñación lírica subyace a la\n heterogeneidad formal del libro.</p>\n<p dir=\"ltr\" style=\"text-align:justify;\">Santiago Hernández Aparicio nació en Salta en 1990. Se graduó en Letras\n por la Facultad de Humanidades y Artes (UNR), donde actualmente enseña\n griego antiguo. También ejerce la docencia en la escuela secundaria. Ha\n publicado un libro de poemas, <em>Sermón...</em><br /></p>"
  },
  {
    cod: "AGATRA070",
    título: "Tragedia en tres actos",
    autoría: "Agatha Christie",
    editorial: "Círculo de lectores",
    páginas: 196,
    año: 1981,
    ejemplares: 1,
    sinopsis: "<div class=\"m_3874531350688387870gmail-\" style=\"text-align:justify;\">\n<div class=\"texto1 clearfix\" style=\"margin-top:10px;\">\n<div class=\"colaborador\" style=\"line-height:18px;margin:15px 0px;\">\n<div>\n<p><span style=\"color:#444444;\"><span style=\"font-family:verdana;\">Sir Charles Cartwright debería habérselo pensado dos veces antes de invitar a cenar a trece personas en su casa. Pues la velada concluye con uno de los invitados muerto tras haber ingerido un cóctel en el que no se encuentra ningún rastro de veneno.</span></span></p>\n<p><span style=\"color:#444444;\"><span style=\"font-family:verdana;\">Hasta el momento, nada que pueda sorprender al detective belga. Lo que sí resulta sorprendente para Poirot es que no haya ni un solo motivo que pueda explicar el asesinato.</span></span></p>\n</div>\n</div>\n</div>\n</div>"
  },
  {
    cod: "FERAHO071",
    título: "Ahora que no soy atleta",
    autoría: "Fernanda Jurado",
    editorial: "Editorial Municipal de Rosario",
    páginas: 44,
    año: 2023,
    ejemplares: 1,
    sinopsis: "<p>Para la primera persona que habla en esta serie de poemas, la nostalgia infinita de no haber sido convive con la comprobación de lo que ya no se es, así como lo que sigue sucediendo se completa con el fantaseo de lo inminente. Flashes de la infancia y la adolescencia, trabajos atrasados y el anhelo de una síntesis total. Se escribe como se desea, en los brazos, en una remera, con los pies en el agua o conduciendo a toda velocidad por una ruta que atraviesa los pueblos del sur santafesino. </p>"
  },
  {
    cod: "EZEELU072",
    título: "El universo en una tabla",
    autoría: "Ezequiel Calvo Roitber; Tonino Adessi; ; Romi Ledesma; ; Sofía Lescano; ; Hernán Aguirre; ; Jesuana Aizcorbe; ; Eugenia López ; ; Federico Álvarez; ; Jordi López ; ; María Paula Álvarez; ; Natalia Magnani; ; Damián Álvarez Paggi; ; Timoteo Marchini; ; Cecilia Martínez ; ; Juan Cruz Balian; ; Nahuel Martínez ; ; Fernando Baroli; ; Luciana Mentasti; ; Pedro Bekinschtein; ; Nathalie Miller; ; Bruno Bianchi; ; Tomás Monicat; ; Romina Bodoira; ; Agustina Murgia; ; Gabriela Bonan; ; Mariana Noto Guillén; ; Valeria Bosio; ; Nahuel Núñez; ; Emilio Burgueño; ; Raúl Ojer; ; Lourdes Cáceres; ; Verónica Pastor ; ; Salvador Calanni; ; Martin Pérez Comisso; ; Ezequiel Calvo Roitberg; ; M. Alejandra Petino Zappala; ; Juan Manuel Carballeda; ; Agueda Placenti; ; Andrés Cassagnes; ; Valeria Castagna; ; Paula Cramer; ; Edmundo David; ; Daniela Di Lello Carrique; José Edgardo Díaz; Darío A. Estrin; Rober Etchenique; Marcos Feole; Victoria Flexer; Rocio Foltran; Leandro Gabilondo; Francisco Gallo; Mariana Gallo; Marina Gendelman; Diego Golombek; Guadalupe Gómez; Antonella Gutiérrez; Julieta Habif; Matías Izzo; Samantha Kucher; Juan Cruz Landoni; Victoria Posner; Rocio Priegue; José Prieto; Daniela Putrino; Rocío Ramírez Paulino; Andrés Rieznik; Sergio Rodríguez; Sara Romano; Santiago Rostán Talasimov; Andrés M. Rousselot Ascarza; Noelia Saldumbehere; Valeria C. Sanabria; Claudio H. Sánchez; Javier Sendra; Jessica Sulkes Cuevas; Marcos Tacca; Tamara Ulla; Franco Vairoletti; Ignacio Vardé; Nahuel Agustín Vega; Melina Vladisauskas; María Belén Zanoni; Romina Lasagni Vitar; Ari Zeida",
    editorial: "El Gatos y la Caja / Abre",
    páginas: 220,
    año: 2020,
    ejemplares: 1,
    sinopsis: "<p dir=\"ltr\" style=\"text-align:justify;\">Existen pocos íconos de la ciencia tan reconocibles como la tabla\n periódica de los elementos. Sabemos cómo luce y a menudo eso es todo lo\n que sabemos. Pero entonces nos estamos perdiendo de mucho: la razón por\n la cual se ve así, por qué es una herramienta relevante y qué historias\n encierra detrás de ese aspecto críptico.<br /><br />Este proyecto es un\n intento de compartir los cómos y los porqués de una de las obras más\n hermosas e increíbles de la historia de la humanidad. Queremos rescatar\n el valor de la tabla como forma elegante y, especialmente, informativa\n de acomodar los elementos constitutivos de la materia y, además,\n compartir la forma en la que cada una de las personas involucradas en\n crear la tabla periódica observaron y moldearon el mundo que nos rodea.\n Por eso decidimos que esta tabla se construyera de manera similar:\n incluyendo a tantas personas de tantos lugares, formaciones y\n perspectivas como fuese posible.<br /><br />118. El universo en una tabla,\n un proyecto sumamente abierto y colaborativo para que seamos muchas\n personas contando diferentes historias sobre los elementos que forman\n nuestro Universo.</p><p dir=\"ltr\" style=\"text-align:justify;\">Libro gratis disponible en la <a href=\"https://elgatoylacaja.com/tabla/indice\">web</a>. <br /></p>"
  },
  {
    cod: "LÓPOK,073",
    título: "Ok, Pandora. Seis ensayos sobre inteligencia artificial.",
    autoría: "López, Consuelo; Balmaceda, Tomás; Zeller, Maximiliano; Peller, Julián; Aguerre, Carolina; Tagliazucchi, Enzo",
    editorial: "El gato y la caja",
    páginas: 192,
    año: 2024,
    ejemplares: 1,
    sinopsis: "<p>Seis autores y autoras abordan, en seis ensayos distintos, la inteligencia artificial como un proceso histórico, un desafío tecnológico, una pregunta filosófica y un problema social. ¿Es posible hacer un libro sobre IA antes de que los últimos avances lo dejen obsoleto? Este libro dice que sí, que existen problemas y desafíos de fondo, transversales, que no se resuelven con una app o con un nuevo modelo de lenguaje: hablamos del problema de la intimidad de los usuarios, de los desafíos para las instituciones gubernamentales, de la corriente ideológica transhumanista de los hombres blancos de Silicon Valley, de la pregunta por la conciencia de las máquinas y de las medidas que estamos tomando (o fracasando en tomar) para garantizar que no estemos forjando la espada con la que daremos fin a nuestras especie. Un libro hecho 95% por seres humanos… y un poquito con IA.</p>"
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
.esle {
  setDetalle(res);
}
.catch((error) => console.error(error));