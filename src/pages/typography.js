import React from 'react';
import Link from 'gatsby-link';

const TypographyPage = () => (
  <div className="container">
		<h1>Heading 1</h1>
		<p className="content__intro">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, doloribus temporibus soluta?</p>
		<h2>Heading 2</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, nesciunt, pariatur. Eum <a href="#">repellendus</a> facilis, dolor voluptate reiciendis. Quisquam, dolorem, iusto! <q>Whoa, what a cool quote!</q></p>
		<blockquote>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum ipsum ea natus sint sed doloremque omnis, nobis nemo facilis perferendis, assumenda id ut facere magnam rerum, voluptate porro? Quas, aliquid.
		</blockquote>
		<p>Lorem ipsum dolor sit amet, <mark>consectetur adipisicing elit</mark>. Officia adipisci recusandae quibusdam omnis? Unde aperiam facilis enim totam sapiente quo harum atque fugit distinctio excepturi optio saepe maiores error eligendi beatae sint accusantium commodi non, porro velit sequi consequatur reprehenderit.</p>
		<ul>
			<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
			<li>Culpa expedita voluptas est voluptates, architecto qui exercitationem.</li>
			<li>Inventore praesentium quas animi dolores cumque quo accusantium!</li>
			<li>Quae assumenda porro harum adipisci ipsa, quia eligendi.</li>
			<li>Nulla reiciendis, laborum vel officia minima eos atque.</li>
		</ul>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi mollitia enim suscipit commodi, qui sequi odit quae quidem velit dolore.</p>
		<ol>
			<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis reprehenderit aliquid recusandae voluptate iure quaerat perferendis?</li>
			<li>Quis architecto rerum consequuntur iure, a, ea id minima libero sunt, quos suscipit temporibus, placeat qui.</li>
			<li>Nam aspernatur, neque eaque quis ratione temporibus! Voluptas vero reprehenderit necessitatibus architecto eveniet quam odio, veritatis.</li>
			<li>Tempore maxime dolore, reprehenderit ad nam. Nam fugiat maxime cumque, perspiciatis est unde quia minima autem.</li>
		</ol>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, consequuntur.</p>
		<dl>
			<dt>Word 1</dt>
			<dd>Word 1 defintion</dd>
			<dt>Word 2</dt>
			<dd>Word 2 defintion</dd>
			<dt>Word 3</dt>
			<dd>Word 3 defintion</dd>
			<dt>Word 4</dt>
			<dd>Word 4 defintion</dd>
		</dl>
	</div>
);

export default TypographyPage;