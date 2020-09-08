import { h } from 'preact';
import style from './style.css';
import Generator from '../components/generator';

const Home = () => (
	<div class={style.home}>
		<p>Write 250 words about:</p>
    <Generator dataset={words}/>
	</div>
);

export default Home;
