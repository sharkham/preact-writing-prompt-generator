import { h } from 'preact';
import style from './style.css';
import Generator from '../../components/generator';
import {nautical} from '../../assets/nautical'

const Nautical = () => (
	<div class={style.nautical}>
		<p>Write 250 words about:</p>
    <Generator dataset={nautical}/>
	</div>
);

export default Nautical;
