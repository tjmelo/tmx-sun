import './Loading.scss';
import { Card, CircularProgress } from '@mui/material';

export const Loading = () => {
    return (
        <Card className='Loading'>
            <CircularProgress />
        </Card>
    )
}
