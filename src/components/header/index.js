import { h } from 'preact';
import { Link } from 'preact-router/match';

const Header = () => (
	<header>
		<nav class="navbar is-primary" role="navigation" aria-label="main navigation">
			<div class="navbar-brand">
				AIRT
			</div>
		</nav>
		{/* <h1>Preact App</h1>
		<nav>
			<Link activeClassName={style.active} href="/">Home</Link>
			<Link activeClassName={style.active} href="/profile">Me</Link>
			<Link activeClassName={style.active} href="/profile/john">John</Link>
		</nav> */}
	</header>
);

export default Header;
