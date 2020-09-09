import { h } from 'preact';
import style from './style.css';

const About = () => (
	<div class={style.about}>
      <p>This is a writing prompt generator built with Preact. Check out the code on GitHub <a target="blank" href="https://github.com/sharkham/preact-writing-prompt-generator">here</a>!</p>
      <p>Want to get in touch? You can find my contact info <a target="blank" href="https://github.com/sharkham">here</a>.</p>
	</div>
);

export default About;
