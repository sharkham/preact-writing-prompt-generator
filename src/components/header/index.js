import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<h1>Prompt Generator</h1>
		<nav>
			<Link activeClassName={style.active} href="/">Words</Link>
			<Link activeClassName={style.active} href="/nautical">Nautical Words</Link>
		</nav>
	</header>
);

export default Header;
