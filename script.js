// Step 1: Define translations for each language
// Define translations for each language
const translations = {
    en: {
        title: "Important Notice",
        intro: "I have coeliac disease (gluten intolerance).",
        cannotEat: "I cannot eat foods containing gluten, found in wheat, rye, barley, and oats. My meal should not contain:",
        items: [
            "Bread, breadcrumbs, semolina, or pasta",
            "Biscuits, cookies, cakes, muffins, or pies",
            "Flour, various sausages, and dough-based products",
            "Sauces, soups, malt, malt extract, stock, and beer"
        ],
        crossContamination: "Cross-contamination risk",
        warning: "Even a small amount of gluten can make me very ill. It is crucial that my food does not come into contact with gluten or contaminated surfaces.",
        safeFoods: "Safe foods",
        safeItems: [
            "Meat, fish, eggs",
            "Fruits, vegetables, legumes",
            "Rice, corn, soy, potatoes",
            "Wine, cheese, milk"
        ],
        closing: "Thank you for preparing a meal that I can eat safely!"
    }, 
    ga: {
        title: "Fógra Tábhachtach",
        intro: "Tá galar ceiliach orm (éadulaingt glútan).",
        cannotEat: "Ní féidir liom bia a bhfuil glútan ann a ithe, a fhaightear i gcruithneacht, seagal, eorna, agus coirce. Níor cheart go mbeadh na rudaí seo a leanas i mo bhéile:",
        items: [
            "Arán, blúiríní aráin, semolina nó pasta",
            "Brioscaí, fianáin, cácaí, muffins nó pióga",
            "Plúr, ispíní éagsúla agus táirgí déanta as taos",
            "Anlainn, anraithí, malt, eastóscán eorna, brat agus beoir"
        ],
        crossContamination: "Baol tras-éillithe",
        warning: "Féadfaidh fiú méid beag glútan an-tinn a dhéanamh dom. Tá sé ríthábhachtach nach mbeidh mo bhia i dteagmháil le glútan nó le dromchlaí atá éillithe.",
        safeFoods: "Bia sábháilte",
        safeItems: [
            "Feoil, iasc, uibheacha",
            "Torthaí, glasraí, luibhicríocha",
            "Rís, arbhar, soighe, prátaí",
            "Fíon, cáis, bainne"
        ],
        closing: "Go raibh maith agat as béile a ullmhú gur féidir liom a ithe go sábháilte!"
    },
    fr: {
        title: "Avis important",
        intro: "Je suis atteint(e) de la maladie cœliaque (intolérance au gluten).",
        cannotEat: "Je ne peux pas manger d'aliments qui contiennant du gluten, que l'on trouve dans le blé, le seigle, l'orge et l'avoine. Mon repas ne doit pas contenir :",
        items: [
            "Pain, chapelure, semoule ou pâtes",
            "Biscuits, cookies, gâteaux, muffins ou tartes",
            "Farine, diverses saucisses, et produits à base de pâte",
            "Sauces, soupes, malt, extrait de malt, bouillon et bière"
        ],
        crossContamination: "Risque de contamination croisée",
        warning: "Même une petite quantité de gluten peut me rendre très malade. Il est crucial que ma nourriture ne soit pas en contact avec du gluten ou des surfaces contaminées.",
        safeFoods: "Aliments sans risque",
        safeItems: [
            "Viande, poisson, œufs",
            "Fruits, légumes, légumineuses",
            "Riz, maïs, soja, pommes de terre",
            "Vin, fromage, lait"
        ],
        closing: "Merci beaucoup pour votre attention à mes besoins de santé !"
    },
    it: {
        title: "Avviso importante",
        intro: "Sono celiaco/a (intolleranza al glutine).",
        cannotEat: "Non posso mangiare alimenti contenenti glutine, presenti in frumento, segale, orzo e avena. Il mio pasto non deve contenere:",
        items: [
            "Pane, pangrattato, semola o pasta",
            "Biscotti, torte, muffin o crostate",
            "Farina, varie salsicce e prodotti a base di pasta",
            "Salse, zuppe, malto, estratto di malto, brodo e birra"
        ],
        crossContamination: "Rischio di contaminazione crociata",
        warning: "Anche una piccola quantità di glutine può farmi stare molto male. È fondamentale che il mio cibo non entri in contatto con il glutine o superfici contaminate.",
        safeFoods: "Alimenti sicuri",
        safeItems: [
            "Carne, pesce, uova",
            "Frutta, verdura, legumi",
            "Riso, mais, soia, patate",
            "Vino, formaggio, latte"
        ],
        closing: "Grazie mille per aver preparato un pasto che posso mangiare in sicurezza!"
    },
    es: {
        title: "Aviso importante",
        intro: "Tengo enfermedad celíaca (intolerancia al gluten).",
        cannotEat: "No puedo comer alimentos que contengan gluten, que se encuentra en trigo, centeno, cebada y avena. Mi comida no debe contener:",
        items: [
            "Pan, pan rallado, sémola o pasta",
            "Galletas, pasteles, muffins o tartas",
            "Harina, varias salchichas y productos a base de masa",
            "Salsas, sopas, malta, extracto de malta, caldo y cerveza"
        ],
        crossContamination: "Riesgo de contaminación cruzada",
        warning: "Incluso una pequeña cantidad de gluten puede hacerme sentir muy mal. Es crucial que mi comida no entre en contacto con gluten o superficies contaminadas.",
        safeFoods: "Alimentos seguros",
        safeItems: [
            "Carne, pescado, huevos",
            "Frutas, verduras, legumbres",
            "Arroz, maíz, soja, patatas",
            "Vino, queso, leche"
        ],
        closing: "¡Muchas gracias por preparar una comida que puedo comer con seguridad!"
    },
    de: {
        title: "Wichtiger Hinweis",
        intro: "Ich habe Zöliakie (Glutenunverträglichkeit).",
        cannotEat: "Ich darf keine Lebensmittel essen, die Gluten enthalten, das in Weizen, Roggen, Gerste und Hafer vorkommt. Mein Essen sollte keines der folgenden Zutaten enthalten:",
        items: [
            "Brot, Semmelbrösel, Grieß oder Nudeln",
            "Kekse, Kuchen, Muffins oder Torten",
            "Mehl, verschiedene Würste und Teigprodukte",
            "Soßen, Suppen, Malz, Malzextrakt, Brühe und Bier"
        ],
        crossContamination: "Kreuzkontaminationsrisiko",
        warning: "Schon eine kleine Menge Gluten kann mich sehr krank machen. Es ist entscheidend, dass mein Essen nicht mit Gluten oder kontaminierten Oberflächen in Kontakt kommt.",
        safeFoods: "Sichere Lebensmittel",
        safeItems: [
            "Fleisch, Fisch, Eier",
            "Obst, Gemüse, Hülsenfrüchte",
            "Reis, Mais, Soja, Kartoffeln",
            "Wein, Käse, Milch"
        ],
        closing: "Vielen Dank für die Zubereitung einer Mahlzeit, die ich sicher essen kann!"
    },
    nl: {
        title: "Belangrijke mededeling",
        intro: "Ik heb coeliakie (glutenintolerantie).",
        cannotEat: "Ik mag geen voedsel eten waar gluten in zit, zoals tarwe, rogge, gerst en haver. Mijn maaltijd mag het volgende niet bevatten:",
        items: [
            "Brood, paneermeel, griesmeel of pasta",
            "Koekjes, cakes, muffins of taarten",
            "Meel, verschillende worsten en deegproducten",
            "Sauzen, soepen, mout, moutextract, bouillon en bier"
        ],
        crossContamination: "Kruisbesmettingsrisico",
        warning: "Zelfs een kleine hoeveelheid gluten kan me erg ziek maken. Het is hell belangrijk dat mijn eten niet in contact komt met gluten of besmette oppervlakken.",
        safeFoods: "Veilige voedingsmiddelen",
        safeItems: [
            "Vlees, vis, eieren",
            "Fruit, groenten, peulvruchten",
            "Rijst, maïs, soja, aardappelen",
            "Wijn, kaas, melk"
        ],
        closing: "Hartelijk dank voor het bereiden van een veilig glutenvrije maaltijd!"
    },
    pl: {
        title: "Ważna informacja",
        intro: "Mam celiakię (nietolerancję glutenu).",
        cannotEat: "Nie mogę jeść produktów zawierających gluten, który występuje w pszenicy, życie, jęczmieniu i owsie. Moje jedzenie nie powinno zawierać:",
        items: [
            "Chleb, bułka tarta, kasza manna lub makaron",
            "Ciastka, ciasteczka, ciasta, babeczki lub tarty",
            "Mąka, różne kiełbasy i produkty z ciasta",
            "Sosy, zupy, słód, ekstrakt słodowy, bulion i piwo"
        ],
        crossContamination: "Ryzyko zanieczyszczenia krzyżowego",
        warning: "Nawet niewielka ilość glutenu może sprawić, że bardzo źle się poczuję. Ważne jest, aby moje jedzenie nie miało kontaktu z glutenem ani skażonymi powierzchniami.",
        safeFoods: "Bezpieczne produkty",
        safeItems: [
            "Mięso, ryby, jajka",
            "Owoce, warzywa, rośliny strączkowe",
            "Ryż, kukurydza, soja, ziemniaki",
            "Wino, ser, mleko"
        ],
        closing: "Dziękuję bardzo za przygotowanie posiłku, który mogę bezpiecznie zjeść!"
    },
    sq: {
        title: "Njoftim i rëndësishëm",
        intro: "Unë kam sëmundjen e celiakisë (intolerancë ndaj glutenit).",
        cannotEat: "Nuk mund të ha ushqime që përmbajnë gluten, që gjendet në grurë, thekër, elb dhe tërshërë. Vakti im nuk duhet të përmbajë:",
        items: [
            "Bukë, thërrime buke, semolinë ose makarona",
            "Biskota, ëmbëlsira, kekë ose tarta",
            "Miell, sallam të ndryshëm dhe produkte brumi",
            "Salca, supa, malt, ekstrakt meli, lëngje mishi dhe birrë"
        ],
        crossContamination: "Rreziku i ndotjes së kryqëzuar",
        warning: "Edhe një sasi e vogël gluteni mund të më sëmurë shumë. Është thelbësore që ushqimi im të mos ketë kontakt me gluten apo sipërfaqe të kontaminuara.",
        safeFoods: "Ushqime të sigurta",
        safeItems: [
            "Mish, peshk, vezë",
            "Fruta, perime, bishtajore",
            "Oriz, misër, sojë, patate",
            "Verë, djathë, qumësht"
        ],
        closing: "Faleminderit shumë për përgatitjen e një vakti që mund ta ha pa problem!"
    },
    hr: {
        title: "Važna Obavijest",
        intro: "Imam celijakiju (netoleranciju glutena).",
        cannotEat: "Ne mogu jesti hranu koja sadrži gluten, prisutan u pšenici, raži, ječmu i zobi. Moj obrok ne smije sadržavati:",
        items: [
            "Kruh, krušne mrvice, griz ili tjesteninu",
            "Kekse, kolače, muffine ili pite",
            "Brašno, razne kobasice i proizvode od tijesta",
            "Umake, juhe, slad, sladni ekstrakt, temeljac i pivo"
        ],
        crossContamination: "Rizik od unakrsne kontaminacije",
        warning: "Čak i mala količina glutena može me jako razboljeti. Ključno je da moja hrana ne dolazi u dodir s glutenom ili kontaminiranim površinama.",
        safeFoods: "Sigurna hrana",
        safeItems: [
            "Meso, riba, jaja",
            "Voće, povrće, mahunarke",
            "Riža, kukuruz, soja, krumpir",
            "Vino, sir, mlijeko"
        ],
        closing: "Hvala vam puno na pripremi obroka koji mogu sigurno jesti!"
    },
    sr: {
        title: "Važno Obaveštenje",
        intro: "Imam celijakiju (netoleranciju na gluten).",
        cannotEat: "Ne mogu da jedem hranu koja sadrži gluten, prisutan u pšenici, raži, ječmu i zobi. Moj obrok ne sme da sadrži:",
        items: [
            "Hleb, prezle, griz ili testeninu",
            "Kolače, biskvite, torte ili pite",
            "Brašno, razne kobasice i proizvode od testa",
            "Soseve, supe, slad, ekstrakt slada, bujon i pivo"
        ],
        crossContamination: "Rizik od unakrsne kontaminacije",
        warning: "Čak i mala količina glutena može me jako razboleti. Ključno je da moja hrana ne dođe u dodir sa glutenom ili kontaminiranim površinama.",
        safeFoods: "Sigurna hrana",
        safeItems: [
            "Meso, riba, jaja",
            "Voće, povrće, mahunarke",
            "Pirinč, kukuruz, soja, krompir",
            "Vino, sir, mleko"
        ],
        closing: "Hvala vam puno što ste pripremili obrok koji mogu sigurno da jedem!"
    },
    sv: {
        title: "Viktig Information",
        intro: "Jag har celiaki (glutenintolerans).",
        cannotEat: "Jag kan inte äta livsmedel som innehåller gluten, som finns i vete, råg, korn och havre. Min måltid ska inte innehålla:",
        items: [
            "Bröd, ströbröd, mannagryn eller pasta",
            "Kakor, kex, muffins eller pajer",
            "Mjöl, olika korvar och degbaserade produkter",
            "Såser, soppor, malt, maltextrakt, buljong och öl"
        ],
        crossContamination: "Risk för korskontaminering",
        warning: "Även en liten mängd gluten kan göra mig mycket sjuk. Det är viktigt att min mat inte kommer i kontakt med gluten eller förorenade ytor.",
        safeFoods: "Säker mat",
        safeItems: [
            "Kött, fisk, ägg",
            "Frukt, grönsaker, baljväxter",
            "Ris, majs, soja, potatis",
            "Vin, ost, mjölk"
        ],
        closing: "Tack så mycket för att du tillagar en måltid som jag kan äta säkert!"
    },
    no: {
        title: "Viktig Beskjed",
        intro: "Jeg har cøliaki (glutenintoleranse).",
        cannotEat: "Jeg kan ikke spise mat som inneholder gluten, som finnes i hvete, rug, bygg og havre. Måltidet mitt skal ikke inneholde:",
        items: [
            "Brød, brødsmuler, semule eller pasta",
            "Kaker, kjeks, muffins eller paier",
            "Mel, ulike pølser og deigbaserte produkter",
            "Sauser, supper, malt, maltekstrakt, buljong og øl"
        ],
        crossContamination: "Risiko for kryssforurensning",
        warning: "Selv en liten mengde gluten kan gjøre meg veldig syk. Det er viktig at maten min ikke kommer i kontakt med gluten eller forurensede overflater.",
        safeFoods: "Sikker mat",
        safeItems: [
            "Kjøtt, fisk, egg",
            "Frukt, grønnsaker, belgfrukter",
            "Ris, mais, soya, poteter",
            "Vin, ost, melk"
        ],
        closing: "Tusen takk for at du tilbereder et måltid som jeg kan spise trygt!"
    },
    fi: {
        title: "Tärkeä Ilmoitus",
        intro: "Minulla on keliakia (gluteeni-intoleranssi).",
        cannotEat: "En voi syödä ruokia, jotka sisältävät gluteenia, jota on vehnässä, rukiissa, ohrassa ja kaurassa. Ateriani ei saa sisältää:",
        items: [
            "Leipää, korppujauhoja, mannasuurimoita tai pastaa",
            "Keksejä, kakkuja, muffineja tai piirakoita",
            "Jauhoja, erilaisia makkaroita ja taikinatuotteita",
            "Kastikkeita, keittoja, mallasta, mallasuuteita, lientä ja olutta"
        ],
        crossContamination: "Ristisaastumisen riski",
        warning: "Jo pieni määrä gluteenia voi tehdä minut hyvin sairaaksi. On tärkeää, että ruokani ei ole kosketuksissa gluteenin tai saastuneiden pintojen kanssa.",
        safeFoods: "Turvalliset ruoat",
        safeItems: [
            "Lihaa, kalaa, munia",
            "Hedelmiä, vihanneksia, palkokasveja",
            "Riisiä, maissia, soijaa, perunoita",
            "Viiniä, juustoa, maitoa"
        ],
        closing: "Kiitos paljon, että valmistit aterian, jota voin turvallisesti syödä!"
    },
    pt: {
        title: "Aviso Importante",
        intro: "Tenho doença celíaca (intolerância ao glúten).",
        cannotEat: "Não posso comer alimentos que contenham glúten, encontrado no trigo, centeio, cevada e aveia. A minha refeição não deve conter:",
        items: [
            "Pão, pão ralado, sêmola ou massa",
            "Biscoitos, bolos, muffins ou tartes",
            "Farinha, vários tipos de salsichas e produtos de massa",
            "Molhos, sopas, malte, extrato de malte, caldo e cerveja"
        ],
        crossContamination: "Risco de contaminação cruzada",
        warning: "Mesmo uma pequena quantidade de glúten pode deixar-me muito doente. É crucial que a minha comida não entre em contacto com glúten ou superfícies contaminadas.",
        safeFoods: "Alimentos seguros",
        safeItems: [
            "Carne, peixe, ovos",
            "Frutas, vegetais, leguminosas",
            "Arroz, milho, soja, batatas",
            "Vinho, queijo, leite"
        ],
        closing: "Muito obrigado por preparar uma refeição que eu possa comer em segurança!"
    },
    mt: {
        title: "Avviż Importanti",
        intro: "Għandi mard ċelijaku (intolleranza għall-glutina).",
        cannotEat: "Ma nistax niekol ikel li jkun fih glutina, li tinsab qamh xgħir, rye u l-ħafur. L-ikel tiegħi m’għandux ikun fih:",
        items: [
            "Ħobż, frak tal-ħobż, semolina jew għaġin",
            "Gallentini, kejkijiet, muffins jew torti",
            "Dqiq, diversi zalzett u prodotti tal-għaġina",
            "Zalza, sopop, malt, estratt tal-malt, stokk u birra"
        ],
        crossContamination: "Riskju ta' kontaminazzjoni trasversali",
        warning: "Anke ammont żgħir ta' glutina jista' jagħmilli morda ħafna. Huwa kruċjali li l-ikel tiegħi ma jkollux kuntatt mal-glutina jew mal ucuh kontaminati.",
        safeFoods: "Ikel Sikur",
        safeItems: [
            "Laħam, ħut, bajd",
            "Frott, ħaxix, legumi",
            "Ross, qamħirrum, sojja, patata",
            "Inbid, ġobon, ħalib"
        ],
        closing: "Grazzi ħafna talli ħejjejt ikla li nista' niekol b'mod sigur!"
    },
    he: {
        title: "הודעה חשובה",
        intro: "אני חולה בצליאק (רגישות לגלוטן).",
        cannotEat: "איני יכול/ה לאכול מזונות המכילים גלוטן, הנמצא בחיטה, שיפון, שעורה ושיבולת שועל. הארוחה שלי לא צריכה להכיל:",
        items: [
            "לחם, פירורי לחם, סולת או פסטה",
            "עוגיות, עוגות, מאפינס או פשטידות",
            "קמח, נקניקים שונים ומוצרי בצק",
            "רטבים, מרקים, לתת, תמצית לתת, מרק ובירה"
        ],
        crossContamination: "סיכון לזיהום משני",
        warning: "גם כמות קטנה של גלוטן עלולה לגרום לי לחלות מאוד. חשוב שהאוכל שלי לא יבוא במגע עם גלוטן או עם משטחים מזוהמים.",
        safeFoods: "מזונות בטוחים",
        safeItems: [
            "בשר, דגים, ביצים",
            "פירות, ירקות, קטניות",
            "אורז, תירס, סויה, תפוחי אדמה",
            "יין, גבינה, חלב"
        ],
        closing: "תודה רבה על הכנת ארוחה שאני יכול/ה לאכול בבטחה!"
    },
    ar: {
        title: "إشعار هام",
        intro: "أعاني من مرض الاضطرابات الهضمية (حساسية تجاه الغلوتين).",
        cannotEat: "لا أستطيع تناول الأطعمة التي تحتوي على الغلوتين الموجود في القمح، والشعير، والجاودار، والشوفان. يجب ألا تحتوي وجبتي على:",
        items: [
            "خبز، فتات الخبز، السميد أو المعكرونة",
            "بسكويت، كعك، فطائر أو تورتات",
            "دقيق، نقانق متنوعة ومنتجات العجين",
            "الصلصات، الحساء، الشعير، مستخلص الشعير، المرق والبيرة"
        ],
        crossContamination: "خطر التلوث المتبادل",
        warning: "حتى كمية صغيرة من الغلوتين قد تجعلني مريضًا جدًا. من الضروري أن لا يتلامس طعامي مع الغلوتين أو الأسطح الملوثة.",
        safeFoods: "أطعمة آمنة",
        safeItems: [
            "اللحم، السمك، البيض",
            "الفواكه، الخضروات، البقوليات",
            "الأرز، الذرة، الصويا، البطاطس",
            "النبيذ، الجبن، الحليب"
        ],
        closing: "شكرًا جزيلاً لتحضير وجبة يمكنني تناولها بأمان!"
    },
    bg: {
        title: "Важно съобщение",
        intro: "Имам целиакия (непоносимост към глутен).",
        cannotEat: "Не мога да ям храни, съдържащи глутен, намиращ се в пшеница, ръж, ечемик и овес. Моята храна не трябва да съдържа:",
        items: [
            "Хляб, галета, грис или паста",
            "Бисквити, сладкиши, мъфини или пайове",
            "Брашно, различни колбаси и тестени изделия",
            "Сосове, супи, малц, екстракт от малц, бульон и бира"
        ],
        crossContamination: "Риск от кръстосано замърсяване",
        warning: "Дори малко количество глутен може да ме направи много болен. Важно е храната ми да не влиза в контакт с глутен или замърсени повърхности.",
        safeFoods: "Безопасни храни",
        safeItems: [
            "Месо, риба, яйца",
            "Плодове, зеленчуци, бобови култури",
            "Ориз, царевица, соя, картофи",
            "Вино, сирене, мляко"
        ],
        closing: "Благодаря ви много, че приготвихте ястие, което мога да консумирам безопасно!"
    },
    cs: {
        title: "Důležité oznámení",
        intro: "Mám celiakii (nesnášenlivost lepku).",
        cannotEat: "Nemohu jíst potraviny obsahující lepek, který se nachází v pšenici, žitě, ječmeni a ovsu. Moje jídlo by nemělo obsahovat:",
        items: [
            "Chléb, strouhanka, krupice nebo těstoviny",
            "Sušenky, koláče, muffiny nebo dorty",
            "Mouka, různé klobásy a těstové výrobky",
            "Omáčky, polévky, slad, sladový extrakt, vývar a pivo"
        ],
        crossContamination: "Riziko křížové kontaminace",
        warning: "I malé množství lepku mě může velmi rozbolet. Je důležité, aby moje jídlo nepřicházelo do styku s lepkem nebo kontaminovanými povrchy.",
        safeFoods: "Bezpečné potraviny",
        safeItems: [
            "Maso, ryby, vejce",
            "Ovoce, zelenina, luštěniny",
            "Rýže, kukuřice, sója, brambory",
            "Víno, sýr, mléko"
        ],
        closing: "Děkuji moc za přípravu jídla, které mohu bezpečně sníst!"
    },
    da: {
        title: "Vigtig Meddelelse",
        intro: "Jeg har cøliaki (glutenintolerance).",
        cannotEat: "Jeg kan ikke spise fødevarer, der indeholder gluten, som findes i hvede, rug, byg og havre. Min mad må ikke indeholde:",
        items: [
            "Brød, rasp, semulje eller pasta",
            "Kager, småkager, muffins eller tærter",
            "Mel, forskellige pølser og dejprodukter",
            "Saucer, supper, malt, maltekstrakt, bouillon og øl"
        ],
        crossContamination: "Risiko for krydskontaminering",
        warning: "Selv en lille mængde gluten kan gøre mig meget syg. Det er vigtigt, at min mad ikke kommer i kontakt med gluten eller forurenede overflader.",
        safeFoods: "Sikre fødevarer",
        safeItems: [
            "Kød, fisk, æg",
            "Frugt, grøntsager, bælgfrugter",
            "Ris, majs, soja, kartofler",
            "Vin, ost, mælk"
        ],
        closing: "Mange tak for at tilberede et måltid, jeg kan spise sikkert!"
    },
    hu: {
        title: "Fontos Értesítés",
        intro: "Lisztérzékeny vagyok (glutén intolerancia).",
        cannotEat: "Nem fogyaszthatok glutént tartalmazó ételeket, amelyek búzában, rozsban, árpában és zabban találhatók. Az ételem nem tartalmazhatja:",
        items: [
            "Kenyér, zsemlemorzsa, dara vagy tészta",
            "Kekszek, sütemények, muffinok vagy piték",
            "Liszt, különféle kolbászok és tésztatermékek",
            "Szószok, levesek, maláta, malátakivonat, húsleves és sör"
        ],
        crossContamination: "Keresztszennyezés kockázata",
        warning: "Még egy kis mennyiségű glutén is súlyosan megbetegíthet. Lényeges, hogy az ételem ne kerüljön kapcsolatba gluténnel vagy szennyezett felületekkel.",
        safeFoods: "Biztonságos ételek",
        safeItems: [
            "Hús, hal, tojás",
            "Gyümölcsök, zöldségek, hüvelyesek",
            "Rizs, kukorica, szója, burgonya",
            "Bor, sajt, tej"
        ],
        closing: "Nagyon köszönöm, hogy elkészítette a biztonságosan fogyasztható ételt!"
    },
    ro: {
        title: "Atenție Importantă",
        intro: "Sunt celiac (intoleranță la gluten).",
        cannotEat: "Nu pot mânca alimente care conțin gluten, care se găsește în grâu, secară, orz și ovăz. Mâncarea mea nu trebuie să conțină:",
        items: [
            "Pâine, pesmet, griș sau paste",
            "Biscuiți, prăjituri, brioșe sau plăcinte",
            "Făină, diverse cârnați și produse din aluat",
            "Sosuri, supe, malț, extract de malț, bulion și bere"
        ],
        crossContamination: "Risc de contaminare încrucișată",
        warning: "Chiar și o cantitate mică de gluten mă poate îmbolnăvi foarte tare. Este esențial ca mâncarea mea să nu intre în contact cu gluten sau suprafețe contaminate.",
        safeFoods: "Alimente sigure",
        safeItems: [
            "Carne, pește, ouă",
            "Fructe, legume, leguminoase",
            "Orez, porumb, soia, cartofi",
            "Vin, brânză, lapte"
        ],
        closing: "Vă mulțumesc foarte mult pentru pregătirea unei mese pe care o pot consuma în siguranță!"
    },
    sk: {
        title: "Dôležité upozornenie",
        intro: "Mám celiakiu (intoleranciu na lepok).",
        cannotEat: "Nemôžem jesť potraviny obsahujúce lepok, ktorý sa nachádza v pšenici, raži, jačmeni a ovse. Moje jedlo nesmie obsahovať:",
        items: [
            "Chlieb, strúhanku, krupicu alebo cestoviny",
            "Sušienky, koláče, muffiny alebo torty",
            "Múka, rôzne klobásy a výrobky z cesta",
            "Omáčky, polievky, slad, sladový extrakt, vývar a pivo"
        ],
        crossContamination: "Riziko krížovej kontaminácie",
        warning: "Aj malé množstvo lepku ma môže veľmi rozbolieť. Je dôležité, aby moje jedlo neprichádzalo do styku s lepkom alebo kontaminovanými povrchmi.",
        safeFoods: "Bezpečné potraviny",
        safeItems: [
            "Mäso, ryby, vajcia",
            "Ovocie, zelenina, strukoviny",
            "Ryža, kukurica, sója, zemiaky",
            "Víno, syr, mlieko"
        ],
        closing: "Ďakujem veľmi pekne za prípravu jedla, ktoré môžem bezpečne zjesť!"
    },
    sl: {
        title: "Pomembno obvestilo",
        intro: "Imam celiakijo (intoleranca na gluten).",
        cannotEat: "Ne smem jesti hrane, ki vsebuje gluten, ki ga najdemo v pšenici, rži, ječmenu in ovsu. Moja hrana ne sme vsebovati:",
        items: [
            "Kruh, drobtine, zdrob ali testenine",
            "Piškoti, pecivo, muffini ali pite",
            "Moka, različne klobase in izdelki iz testa",
            "Omake, juhe, slad, sladni izvleček, juhe in pivo"
        ],
        crossContamination: "Tveganje za navzkrižno kontaminacijo",
        warning: "Tudi majhna količina glutena me lahko močno zboli. Bistveno je, da moja hrana ne pride v stik z glutenom ali kontaminiranimi površinami.",
        safeFoods: "Varna hrana",
        safeItems: [
            "Meso, ribe, jajca",
            "Sadje, zelenjava, stročnice",
            "Riž, koruza, soja, krompir",
            "Vino, sir, mleko"
        ],
        closing: "Hvala, ker ste pripravili obrok, ki ga lahko varno zaužijem!"
    },
    tr: {
        title: "Önemli Uyarı",
        intro: "Çölyak hastasıyım (gluten intoleransı).",
        cannotEat: "Buğday, çavdar, arpa ve yulaf içeren glüteni tüketemem. Yemeğim şu maddeleri içermemelidir:",
        items: [
            "Ekmek, galeta unu, irmik veya makarna",
            "Bisküvi, kurabiye, kek, muffin veya turtalar",
            "Un, çeşitli sosisler ve hamur işleri",
            "Soslar, çorbalar, malt, malt özü, et suyu ve bira"
        ],
        crossContamination: "Çapraz bulaşma riski",
        warning: "Az miktarda gluten bile beni çok hasta edebilir. Yemeğim glüten içeren ürünlerle veya kirlenmiş yüzeylerle temas etmemelidir.",
        safeFoods: "Güvenli yiyecekler",
        safeItems: [
            "Et, balık, yumurta",
            "Meyveler, sebzeler, baklagiller",
            "Pirinç, mısır, soya, patates",
            "Şarap, peynir, süt"
        ],
        closing: "Güvenle yiyebileceğim bir yemek hazırladığınız için çok teşekkür ederim!"
    },
    zh: {
        title: "重要通知",
        intro: "我患有乳糜泻（对麸质不耐受）。",
        cannotEat: "我不能吃含有麸质的食物，麸质存在于小麦、黑麦、大麦和燕麦中。我的餐点不应包含以下内容：",
        items: [
            "面包，面包屑，粗面粉或面食",
            "饼干，蛋糕，松饼或派",
            "面粉，各种香肠和面团制品",
            "酱料，汤，麦芽，麦芽提取物，肉汤和啤酒"
        ],
        crossContamination: "交叉污染风险",
        warning: "即使是少量的麸质也会让我非常不适。我的食物绝对不能与麸质或被污染的表面接触。",
        safeFoods: "安全食物",
        safeItems: [
            "肉，鱼，鸡蛋",
            "水果，蔬菜，豆类",
            "大米，玉米，大豆，土豆",
            "葡萄酒，奶酪，牛奶"
        ],
        closing: "非常感谢您准备我可以安全食用的餐点！"
    },
    ja: {
        title: "重要なお知らせ",
        intro: "私はセリアック病（グルテン不耐症）です。",
        cannotEat: "私はグルテンを含む食品を食べることができません。グルテンは小麦、ライ麦、大麦、オーツ麦に含まれています。私の食事には以下のものを含めないでください：",
        items: [
            "パン、パン粉、セモリナ粉、またはパスタ",
            "ビスケット、クッキー、ケーキ、マフィン、またはパイ",
            "小麦粉、さまざまな種類のソーセージや生地製品",
            "ソース、スープ、モルト、モルトエキス、ブイヨン、ビール"
        ],
        crossContamination: "交差汚染のリスク",
        warning: "少量のグルテンでも非常に具合が悪くなる可能性があります。私の食事がグルテンや汚染された表面に触れないようにすることが非常に重要です。",
        safeFoods: "安全な食べ物",
        safeItems: [
            "肉、魚、卵",
            "果物、野菜、豆類",
            "米、トウモロコシ、大豆、じゃがいも",
            "ワイン、チーズ、牛乳"
        ],
        closing: "安全に食べられる食事を準備していただきありがとうございます！"
    },
    hi: {
        title: "महत्वपूर्ण सूचना",
        intro: "मुझे सीलिएक रोग है (ग्लूटेन असहिष्णुता)।",
        cannotEat: "मैं ग्लूटेन युक्त खाद्य पदार्थों का सेवन नहीं कर सकता/सकती, जो गेहूं, जौ, राई और जई में पाया जाता है। मेरे भोजन में निम्नलिखित चीजें नहीं होनी चाहिए:",
        items: [
            "रोटी, ब्रेडक्रम्ब्स, सूजी या पास्ता",
            "बिस्कुट, कुकीज़, केक, मफिन या पाई",
            "आटा, विभिन्न प्रकार की सॉसेज और आटे से बने उत्पाद",
            "सॉस, सूप, मॉल्ट, मॉल्ट एक्सट्रैक्ट, शोरबा और बीयर"
        ],
        crossContamination: "क्रॉस-संक्रमण का खतरा",
        warning: "थोड़ी सी मात्रा में ग्लूटेन भी मुझे बहुत बीमार कर सकता/सकती है। यह महत्वपूर्ण है कि मेरा भोजन ग्लूटेन या दूषित सतहों के संपर्क में न आए।",
        safeFoods: "सुरक्षित खाद्य पदार्थ",
        safeItems: [
            "मांस, मछली, अंडे",
            "फल, सब्जियां, दालें",
            "चावल, मक्का, सोया, आलू",
            "शराब, पनीर, दूध"
        ],
        closing: "मेरे लिए सुरक्षित भोजन तैयार करने के लिए आपका बहुत धन्यवाद!"
    }
};

// Step 2: Function to display the card content
function displayCard(language) {
    const card = translations[language]; // Get the translation for the selected language
    const cardContent = `
        <div class="card-content">
            <img src="CSILogo.png" alt="Coeliac Society Logo" class="card-logo">
            <h3>${card.title}</h3>
            <p>${card.intro}</p>
            <p>${card.cannotEat}</p>
            <ul>
                ${card.items.map(item => `<li>${item}</li>`).join('')}
            </ul>
            <h3>${card.crossContamination}</h3>
            <p>${card.warning}</p>
            <h3>${card.safeFoods}</h3>
            <ul>
                ${card.safeItems.map(item => `<li>${item}</li>`).join('')}
            </ul>
            <p><em>${card.closing}</em></p>
        </div>
    `;
    cardDisplay.innerHTML = cardContent;  // Inject the generated HTML into the display area
    cardDisplay.style.display = 'block';  // Show the card
}

// Step 3: Event listener to show the card when a language is selected
showCardButton.addEventListener('click', () => {
    const selectedLanguage = languageSelect.value;
    displayCard(selectedLanguage);
});