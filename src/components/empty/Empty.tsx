import SelectAllIcon from '@mui/icons-material/SelectAll';
import './Empty.scss';
import { Card } from '@mui/material';

export const Empty = () => {
    return (
        <Card className='Empty'>
            <SelectAllIcon color="primary" fontSize="large"/>
            <h3>Nenhum projeto selecionado</h3>
            <p>Escolha um projeto na lista ao lado e interaja com as aplicações.</p>
        </Card>
    )
}