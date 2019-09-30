let sandboxEl;

function createSandbox() {
	if (document.querySelector('.sandbox')) {
		sandboxEl = document.querySelector('.sandbox');
	} else {
		sandboxEl = document.createElement('div');
		sandboxEl.setAttribute('class', 'sandbox');
		document.body.appendChild(sandboxEl);
	}
}

function reset() {
	sandboxEl.innerHTML = '';
}

function insert(html) {
	createSandbox();
	sandboxEl.innerHTML = html;
}

function simple () {
	const html = `
	<div data-o-component="o-expander" class="o-expander items" data-o-expander-shrink-to="2" data-o-expander-count-selector="li" id="element">
		<h2>Collapsing to number of items in a list</h2>
		<ul class="o-expander__content">
			<li>item</li>
			<li>item</li>
			<li>item</li>
			<li>item</li>
		</ul>
		<a href='#' class="o-expander__toggle click-for-testing"></a>
	</div>

	<div data-o-component="o-expander" class="o-expander height" data-o-expander-shrink-to="height">
		<h2>Collapsing to height of content (resize window to see toggle appear and disappear in a content-aware manner)</h2>
		<div class="o-expander__content">
			word word word word word word word word word word word word word word word word word word word word word word
		</div>
		<a href='#' class="o-expander__toggle"></a>
	</div>

	<div data-o-component="o-expander" class="o-expander" data-o-expander-shrink-to="hidden">
		<h2>Hiding content</h2>
		<div class="o-expander__content">
			word word word word word word word word word word word word word word word word word word word word word word
		</div>
		<a href='#' class="o-expander__toggle"></a>
	</div>

	`;
	insert(html);
}

function manualInit () {
	const html = `
	<div id="expander" data-o-component="o-expander" class="o-expander">
		<h2>Collapsing to number of items in a list</h2>
		<ul id="expander-content" class="o-expander__content">
			<li>item</li>
			<li>item</li>
			<li>item</li>
			<li>item</li>
		</ul>
		<a href='#' id="expander-toggle" class="o-expander__toggle">default</a>
	</div>
	`;
	insert(html);
}

function custom () {
	const html = `
	<div id="expander" class="my-expander">
		<h2>Collapsing to number of items in a list</h2>
		<ul id="expander-content" class="my-expander__content">
			<li>item</li>
			<li>item</li>
			<li>item</li>
			<li>item</li>
		</ul>
		<a href='#' id="expander-toggle" class="my-expander__toggle">default</a>
	</div>
	`;
	insert(html);
}

export {
	custom,
	manualInit,
	simple,
	reset
};
