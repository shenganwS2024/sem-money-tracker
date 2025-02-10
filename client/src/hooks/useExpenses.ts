import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const useExpenses = () => {
    return useSelector((state: RootState) => state.expenses.expenses);
};
