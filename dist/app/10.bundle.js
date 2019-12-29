(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{227:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=function(e,n,t){return n&&i(e.prototype,n),t&&i(e,t),e};function i(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var r=m(t(0)),o=t(4),s=t(290),l=t(8),d=t(291),p=m(t(246)),c=t(240),u=t(20);function m(e){return e&&e.__esModule?e:{default:e}}t(292);var h=(function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(f,r.default.Component),a(f,[{key:"render",value:function(){return r.default.createElement(r.default.Fragment,null,r.default.createElement(u.CloseButton,{classNames:"page medium"}),r.default.createElement("div",{id:"visitor-privacy-policy",className:"container medium-container shadowed",onClick:function(e){return e.stopPropagation()}},this.pageHeaderProvider("fas fa-user-shield",{pl:"Polityka Prywatności",en:"Privacy Policy"}),r.default.createElement("div",{className:"privacy-policy"},d.text.map(function(e,n){return r.default.createElement(p.default,{key:"privacyPolicy"+n,data:{tier:e.tier,item:e.item,pl:e.pl,en:e.en}})}))))}}]),f);function f(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,f);var n=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(f.__proto__||Object.getPrototypeOf(f)).call(this,e));return n.languageHandler=l.languageHandler.bind(n),n.languageObjectHandler=l.languageObjectHandler.bind(n),n.pageHeaderProvider=c.pageHeaderProvider.bind(n),n}n.default=(0,o.connect)(s.mapStateToProps,s.mapDispatchToProps)(h)},240:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.pageHeaderProvider=function(e,n){return r.default.createElement("h2",{className:"page-header"},r.default.createElement("i",{className:e}),this.languageObjectHandler(n))},n.sectionHeaderProvider=function(e,n){return r.default.createElement("h3",{className:"section-header"},r.default.createElement("i",{className:e}),this.languageObjectHandler(n))};var a,i=t(0),r=(a=i)&&a.__esModule?a:{default:a}},246:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=function(e,n,t){return n&&i(e.prototype,n),t&&i(e,t),e};function i(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var r,o=t(0),s=(r=o)&&r.__esModule?r:{default:r},l=t(4),d=t(247),p=t(8);t(248);var c=(function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(u,s.default.Component),a(u,[{key:"render",value:function(){return s.default.createElement("div",{className:"provision "+this.props.data.tier},s.default.createElement("div",{className:"indent"}),s.default.createElement("div",{className:"mark"},this.props.data.item),s.default.createElement("div",{className:"text"},this.languageHandler(this.props.data.pl,this.props.data.en)),s.default.createElement("div",{className:"float-clear"}))}}]),u);function u(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,u);var n=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,e));return n.languageHandler=p.languageHandler.bind(n),n}n.default=(0,l.connect)(d.mapStateToProps,d.mapDispatchToProps)(c)},247:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.mapStateToProps=function(e){return{language:e.app.language}},n.mapDispatchToProps=function(){return{}}},248:function(e,n,t){var a=t(249);"string"==typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0,transform:void 0};t(6)(a,i);a.locals&&(e.exports=a.locals)},249:function(e,n,t){(e.exports=t(5)(!1)).push([e.i,".container {\n  position: relative;\n  background: #FDFEFE;\n  border-radius: 3px;\n  padding: 25px; }\n\n.wide-container {\n  width: 1200px; }\n\n.medium-container {\n  width: 720px; }\n  @media only screen and (max-width: 768px) {\n    .medium-container {\n      width: auto; } }\n  @media only screen and (max-width: 480px) {\n    .medium-container {\n      padding: 15px; } }\n\n.narrow-container {\n  width: 456px; }\n  @media only screen and (max-width: 480px) {\n    .narrow-container {\n      padding: 15px;\n      width: 100%; } }\n\n.shadowed {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 3px 8px 3px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.provision {\n  margin-bottom: 5px;\n  color: #2E4053;\n  font-size: 15px;\n  line-height: 20px; }\n  .provision.header {\n    margin-top: 24px;\n    font-weight: bold;\n    position: relative; }\n    .provision.header .mark {\n      position: absolute;\n      line-height: 20px; }\n    .provision.header .text {\n      float: left;\n      text-align: justify;\n      line-height: 20px;\n      padding-left: 48px; }\n      @media only screen and (max-width: 480px) {\n        .provision.header .text {\n          padding-left: 36px; } }\n  .provision.point .mark {\n    position: absolute;\n    line-height: 20px; }\n  .provision.point .text {\n    float: left;\n    text-align: justify;\n    width: 100%;\n    line-height: 20px;\n    padding-left: 48px; }\n    @media only screen and (max-width: 480px) {\n      .provision.point .text {\n        padding-left: 36px; } }\n  .provision.subpoint .mark {\n    position: absolute;\n    padding-left: 48px;\n    line-height: 20px; }\n    @media only screen and (max-width: 480px) {\n      .provision.subpoint .mark {\n        padding-left: 36px; } }\n  .provision.subpoint .text {\n    float: left;\n    padding-left: 86px;\n    text-align: justify;\n    line-height: 20px; }\n    @media only screen and (max-width: 480px) {\n      .provision.subpoint .text {\n        padding-left: 72px; } }\n",""])},290:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.mapStateToProps=function(e){return{language:e.app.language}},n.mapDispatchToProps=function(){return{}}},291:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.text=void 0;var a,i=t(0),r=(a=i)&&a.__esModule?a:{default:a};var o="1.0 (2019.07.28)";n.text=[{item:"1.",tier:"header",version:o,pl:r.default.createElement("span",null,"Jaki podmiot jest administratorem danych osobowych?"),en:r.default.createElement("span",null,"Which entity is the administrator of the personal data?")},{item:"",tier:"point",version:o,pl:r.default.createElement("span",null,"Administratorem zbierancyh w Serwisie danych osobowych w rozumieniu Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych) jest Administrator, czyli Warsaw Digital Sp. z o.o., z siedzibą w Warszawie."),en:r.default.createElement("span",null,"The administrator of the personal data gathered in the Service with the meaning of the Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation) is the Administrator, i.e. Warsaw Digital Sp. z o.o., with its registered office in Warsaw.")},{item:"2.",tier:"header",version:o,pl:r.default.createElement("span",null,"Kim są Zaufani Partnerzy Administratora?"),en:r.default.createElement("span",null,"Who are the Trusted Partners of the Administrator?")},{item:"",tier:"point",version:o,pl:r.default.createElement("span",null,"W niniejsze Polityce Prywatności, jak i w całym Regulaminie, przez Zaufanych Partnerów rozumie się podmioty świadczące na rzecz Administratora usługi hostingu danych, wysyłania wiadomości email oraz sms, generowania map, prowadzenia statystyki, oraz współpracujące z Administratorem w odniesieniu do wyświetlania treści marketingowych."),en:r.default.createElement("span",null,"In this Privacy Policy, as well as in the Terms of Service as a whole, entities rendering to the Administrator the services of data hosting, email and phone messaging, map generation, statistics, and cooperating with the Administrator with regard to marketing content are considered Trusted Partners.")},{item:"3.",tier:"header",version:o,pl:r.default.createElement("span",null,"Jakie rodzaje danych osobowych zbierane są przez Administratora?"),en:r.default.createElement("span",null,"What kinds of personal data are gathered by the Administrator?")},{item:"",tier:"point",version:o,pl:r.default.createElement("span",null,"Założenie Konta w Serwisie wymaga podania firmy (nazwy) przedsiębiorcy oraz jego numer telefonu. Ponadto, przedsiębiorca lub osoba reprezentująca przedsiębiorcę przy zakładaniu konta podaje swój adres email oraz hasło. Wystawienie faktury może wymagać podania dalszych danych, takich jak NIP oraz adres przedsiębiorcy."),en:r.default.createElement("span",null,"The registration of an Account in the Service requires provision of the business name of the entrepreneur and its phone number. Furthermore, the entrepreneur or the person representing the entrepreneur at the Account registration provides its email address and password. Invoice issuance may require provision of additional data, such as tax ID number of the entreprenur and its address.")},{item:"",tier:"point",version:o,pl:r.default.createElement("span",null,"Ponadto, Administrator może gromadzić informacje o Odwiedzającyh Serwis odnoszące się do ich zachowań w Serwisie oraz rodzaju urządzeń wykorzystywanych do odwiedzania serwisu."),en:r.default.createElement("span",null,"Furthermore, the Administrator may gather data regarding Service's Visitors regarding their behavior in the Service and kinds of devices used during visiting the Service.")},{item:"",tier:"point",version:o,pl:r.default.createElement("span",null,"Dane, o których mowa powyżej przechowywane są na serwerach usługodawców świadczących usługi hostingu na rzecz Administratora. W bazie danych Administratora firma (nazwa) przedsiębiorcy, numer NIP, numer telefonu oraz adres email są szyfrowane, a hasło podwójnie haszowane (ang. ",r.default.createElement("i",null,"hashing"),")."),en:r.default.createElement("span",null,"The data referred to above is hosted on the servers of entites providing hosting services to the Administrator. In the Administrator's database the business name, NIP (tax ID) number, phone number and email address are encrypted, and the password is doubly hashed.")},{item:"4.",tier:"header",version:o,pl:r.default.createElement("span",null,"Jakie dane osobowe są udostępniane publicznie?"),en:r.default.createElement("span",null,"What kinds of personal data are available publicly?")},{item:"",tier:"point",version:o,pl:r.default.createElement("span",null,"Przy każdym dodanym Ogłoszeniu dostępny jest publicznie numer telefonu Ogłoszeniodawcy oraz jego firma (nazwa)."),en:r.default.createElement("span",null,"With each added Announcement the phone number and the business name of its Announcer are available publicly.")},{item:"5.",tier:"header",version:o,pl:r.default.createElement("span",null,"W jaki sposób Administrator gromadzi dane osobowe?"),en:r.default.createElement("span",null,"By what means the Administrator gathers the personal data?")},{item:"",tier:"point",version:o,pl:r.default.createElement("span",null,"Administrator gromadzi dane osobowe pozyskane od Użytkowników przy tworzeniu i zmianie danych Konta oraz od Odwiedzających poprzez zanonimizowaną, zsumowaną analizę ich zachowań w Serwisie przy zastosowaniu między innymi technologii, o których mowa w ",r.default.createElement("u",null,"Polityce Plików Cookies"),"."),en:r.default.createElement("span",null,"The Administrator gathers personal data acquired from the Users at the Account registration and changing Account data, and, from the Visitors through anonymised, combined analysis of their behaviour through usage of - among others - technologies reffered to under the ",r.default.createElement("u",null,"Cookies Policy"),".")},{item:"6.",tier:"header",version:o,pl:r.default.createElement("span",null,"W jakim celu Administrator zbiera dane osobowe"),en:r.default.createElement("span",null,"What is the purpose of gathering of the personal data by the Administrator?")},{item:"",tier:"point",version:o,pl:r.default.createElement("span",null,"Administrator zbiera dane osobowe w celu:"),en:r.default.createElement("span",null,"The Administrator gathers personal data to:")},{item:"a)",tier:"subpoint",version:o,pl:r.default.createElement("span",null,"umożliwienia korzystania z Serwisu, w tym, między innymi, dodawania Ogłoszeń,"),en:r.default.createElement("span",null,"enable usage of the Service, including, among others, adding Announcements,")},{item:"b)",tier:"subpoint",version:o,pl:r.default.createElement("span",null,"zapewnienia bezpieczeństwa Użytkowników, Ogłoszeniodawców, Odwiedzających oraz Serwisu,"),en:r.default.createElement("span",null,"ensure safety of the Users, Announcers, Visitors and the Service,")},{item:"c)",tier:"subpoint",version:o,pl:r.default.createElement("span",null,"prowadzenia statystyki,"),en:r.default.createElement("span",null,"to maintain statistics,")},{item:"d)",tier:"subpoint",version:o,pl:r.default.createElement("span",null,"dostosowania treści marketingowych do preferencji Odwiedzających, oraz"),en:r.default.createElement("span",null,"adjust marketing content to Visitors' preferences, and")},{item:"e)",tier:"subpoint",version:o,pl:r.default.createElement("span",null,"umożliwienia przeprowadzania transakcji płatności elektronicznych."),en:r.default.createElement("span",null,"enable electronic payments.")},{item:"7.",tier:"header",version:o,pl:r.default.createElement("span",null,"Czy dane osobowe przekazywane są podmiotom trzecim?"),en:r.default.createElement("span",null,"Is the personal data transferred to third parties?")},{item:"",tier:"point",version:o,pl:r.default.createElement("span",null,"Dla wypełnienia celów, o których mowa w Punkcie 6 niniejsze Polityki Prywatności, dane osobowe zbierane przez Administratora mogą być przekazywane Zaufanym Partnerom."),en:r.default.createElement("span",null,"To fulfill purposes referred to under Point 6 of this Privacy Policy, the personal data gathered by the Administrator may be transferred to the Trusted Partners.")},{item:"",tier:"point",version:o,pl:r.default.createElement("span",null,"Administrator oraz Zaufani Partnerzy mogą przekazywać zbierane dane osobowe organom publicznym w przypadkach wymaganych przepisami prawa."),en:r.default.createElement("span",null,"The Administrator and the Trusted Partners may provide the public authorities with the personal data in the cases envisioned by the law.")},{item:"8.",tier:"header",version:o,pl:r.default.createElement("span",null,"Jaki jest zakres obowiązywania niniejszej Polityki w odniesieniu przekierowań?"),en:r.default.createElement("span",null,"What is the scope of this Privacy Policy with respect to redirects?")},{item:"",tier:"point",version:o,pl:r.default.createElement("span",null,"W przypadku, w którym w Serwisie zawarte są przekierowania (",r.default.createElement("i",null,"linki"),") lub Ogłoszeniodawcy zawierają w treści ogłoszeń przekierowania do stron internetowych innych niż Serwis, Odwiedzający podążający za takim przekierowaniem przyjmuje do wiadomości, że niniejsza Polityka Prywatności nie znajduje zastosowania do tych stron, a proces przetwarzania tych danych odbywa się na zasadach i warunkach przewidzianych przez regułu odnoszące się do tych stron."),en:r.default.createElement("span",null,"In case in which the Service includes redirests (",r.default.createElement("i",null,"links"),") and/or Announcers include in their Announcements redirects to websites other than the Service, the Visitor following such a redirect acknowledges that this Privacy Policy is not applicable to those websites, and data processing is governed by the terms and conditions envisioned by the rules relevant to those websites.")},{item:"9.",tier:"header",version:o,pl:r.default.createElement("span",null,"Jakie mam prawa w odniesieniu do moich danych osobowych?"),en:r.default.createElement("span",null,"What are my rights with respect to my personal data?")},{item:"",tier:"point",version:o,pl:r.default.createElement("span",null,"W odniesieniu do Twoich danych osobowych przysługują Tobie prawa między innymi do:"),en:r.default.createElement("span",null,"With respect to your personal data you have, among others, the rights of:")},{item:"a)",tier:"subpoint",version:o,pl:r.default.createElement("span",null,"dostępu,"),en:r.default.createElement("span",null,"access,")},{item:"b)",tier:"subpoint",version:o,pl:r.default.createElement("span",null,"sprostowywania,"),en:r.default.createElement("span",null,"rectification,")},{item:"c)",tier:"subpoint",version:o,pl:r.default.createElement("span",null,"wyrażenia sprzeciwu co ich przetwarzania,"),en:r.default.createElement("span",null,"objection to the processing,")},{item:"c)",tier:"subpoint",version:o,pl:r.default.createElement("span",null,"żądania ograniczenia ich przetwarzania,"),en:r.default.createElement("span",null,"demanding processing restriction,")},{item:"d)",tier:"subpoint",version:o,pl:r.default.createElement("span",null,"żądania ich usunięcia,"),en:r.default.createElement("span",null,"demanding its erasure,")},{item:"d)",tier:"subpoint",version:o,pl:r.default.createElement("span",null,"cofnięcia wyrażonych zgód, oraz"),en:r.default.createElement("span",null,"withdrawal of the consents, and")},{item:"e)",tier:"subpoint",version:o,pl:r.default.createElement("span",null,"transferu."),en:r.default.createElement("span",null,"transfer.")},{item:"",tier:"point",version:o,pl:r.default.createElement("span",null,"Wykonanie powyższych praw pozostaje bez wpływu na dotychczasowe przetwarzanie, a ponadto może wiązać się z ograniczeniem funkcjonalności Serwisu, takich jak, między innymi, posiadanie Konta oraz dodawanie Ogłoszeń."),en:r.default.createElement("span",null,"The execution of the abovementioned rights does not influence the past processing, and, furthermore, may be connected with limitation of the Service's functionality, such as, among others, Account possession and adding Announcements.")},{item:"",tier:"point",version:o,pl:r.default.createElement("span",null,"Wykonanie powyższych praw następuje poprzez wysłanie pisma na adres korespondencyjny Administratora lub emaila na adres ",r.default.createElement("i",null,"kontakt@warsaw.digital")," wskazujących wykonywane prawa."),en:r.default.createElement("span",null,"The execution of the abovementioned rights is made through sending a letter to the Administrator's correspondence address or an email to ",r.default.createElement("i",null,"contact@warsaw.digital")," with indication of the rights being executed.")},{item:"10.",tier:"header",version:o,pl:r.default.createElement("span",null,"Czy dane osobowe przekazywane są poza EOG?"),en:r.default.createElement("span",null,"Is personal data transferred outside of EEA?")},{item:"",tier:"point",version:o,pl:r.default.createElement("span",null,"W celach wskazanych w Punkcie 6. niniejszej Polityki Prywatności, Administrator korzysta z usług Zaufanych Partnerów mających siedziby na obszarze Europejskiego Obszaru Gospodarczego (EOG) lub w Stanach Zjednoczonych. W związku z tym dane osobowe mogą być przekazywane poza granice EOG. Gwarancje należytej ochrony danych osobowych przez Zaufanych Partnerów mających siedziby w Stanach Zjednoczoncyh opierają się między innymi na zobowiązaniach do stosowania przez te podmioty standardowych klauzul umownych przyjętych przez Komisję Unii Europejskiej oraz uczestnictwa w Tarczy Prywatności (ang. Privacy Shield)."),en:r.default.createElement("span",null,"With the purposes referred to under Point 6 of this Privacy Policy, the Administrator employs the services of Trusted Partners with registered offices within the European Economic Area and/or in the the United States. Therefore, the personal data may be transferred outside of EEA. The guarantees of the proper protection of the personal data by the Trusted Partners with their registered offices in United States are based, among others, on the obligations of those entities to apply standard contractual clauses approved by the Commission of the European Union and the participation in the Privacy Shield program.")},{item:"11.",tier:"header",version:o,pl:r.default.createElement("span",null,"Jak długo przechowywane są dane osobowe przez Administratora?"),en:r.default.createElement("span",null,"How long the personal data is stored by the Administrator?")},{item:"",tier:"point",version:o,pl:r.default.createElement("span",null,"Dane osobowe przechowywane są przez Administratora przez okres nieprzekraczający terminu przedawnienia roszczeń w odniesieniu do relacji łączących Administratora z daną osobą."),en:r.default.createElement("span",null,"The personal data is stored by the Administrator for the period not surpassing the period of limitation with respect to relations connecting the Administrator with a given person.")},{item:"",tier:"",version:o,pl:r.default.createElement("span",null),en:r.default.createElement("span",null)}]},292:function(e,n,t){var a=t(293);"string"==typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0,transform:void 0};t(6)(a,i);a.locals&&(e.exports=a.locals)},293:function(e,n,t){(e.exports=t(5)(!1)).push([e.i,".container {\n  position: relative;\n  background: #FDFEFE;\n  border-radius: 3px;\n  padding: 25px; }\n\n.wide-container {\n  width: 1200px; }\n\n.medium-container {\n  width: 720px; }\n  @media only screen and (max-width: 768px) {\n    .medium-container {\n      width: auto; } }\n  @media only screen and (max-width: 480px) {\n    .medium-container {\n      padding: 15px; } }\n\n.narrow-container {\n  width: 456px; }\n  @media only screen and (max-width: 480px) {\n    .narrow-container {\n      padding: 15px;\n      width: 100%; } }\n\n.shadowed {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 3px 8px 3px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n#visitor-privacy-policy {\n  overflow-y: scroll;\n  max-height: 72%; }\n  @media only screen and (max-width: 480px) {\n    #visitor-privacy-policy {\n      max-height: none; } }\n",""])}}]);