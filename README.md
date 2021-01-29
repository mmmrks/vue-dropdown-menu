# VueJS dropdown menu
![](https://res.cloudinary.com/practicaldev/image/fetch/s--h3PnY8eM--/c_imagga_scale,f_auto,fl_progressive,h_420,q_66,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/1mh3u6ifsn672u92pn73.gif)

## Install
```bash
npm i @mmmrks/vue-dropdown-menu
```

## Usage

```javascript
import dropdownMenu from '@mmmrks/vue-dropdown-menu
```
```html
<dropdown-menu menu-title="Vue Dropdown Menu" dark-mode="auto" class="menu">

	<section class="option">
		<button @click="sayHello">This is button for method</button>
        <span class="desc">This is Vue dropdown menu method that says hello for you.</span>
	</section>

	<section class="option">
		<a href="https://duckduckgo.com">This is basic a -link</a>
        <span class="desc">Clicking this takes you somewhere else.</span>
	</section>

	<section class="option">
		<router-link to="/about">This is Vue router link</router-link>
        <span class="desc">Clicking this takes you somewhere else.</span>
	</section>

</dropdown-menu>
```
## props
```html
menu-title
```
Obvious.

```html
dark-mode
```
false = Always light mode
auto = Change according to what user prefers
force = Always dark mode
