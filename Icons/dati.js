// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

console.log(icons);

// Milestone 2
// Coloriamo le icone per tipo.

// combinando il css e gli elementi degli oggetti nell'array scrivo una stringa di div con al suo interno una i e un p 🐱‍👤

icons.forEach((icone) => {
	$("main").append(`<div class="card flex ${icone.type}"><i class="${icone.family} ${icone.prefix}${icone.name} ${icone.type}"></i><p>${icone.name}</p></div>`);
});

// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone
// uso la funzione change sul select🐱‍👤
$("#selection").change(function(){
	// dichiaro una varibile type dandole il valore del'opzione cliccata🐱‍👤
	let valore = $(this).val();
	// se il valore è "all" allora mostra tutte le card🐱‍👤
	if (valore == "all") {
		$(".card").show();
		// altrimenti🐱‍👤
	} else {
		// nascondi tutte le card🐱‍👤
		$(".card").hide();
		// e mostra solo quelle che hanno come classe il valore cliccato🐱‍👤
		$(`.card.${valore}`).show();
	}
})
