import { ITarefa } from '../../../types/tarefas';
import style from './item.module.scss';

interface Props extends ITarefa{
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function Item(
  {
    tarefa,
    tempo,
    selecionado,
    completado,
    id,
    selecionaTarefa
  }: Props) {
  return(
    <li onClick={() => selecionaTarefa({
      tarefa,
      tempo,
      selecionado,
      completado,
      id
    })}
    className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`}
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  )
}
