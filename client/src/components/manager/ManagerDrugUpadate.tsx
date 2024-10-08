import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { updateDrugDataAction } from '../../store/slices/managerSlice';
import { PositiveButton } from '../common/Button';
import { FaSpinner } from 'react-icons/fa';

const ManagerDrugUpadate = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, error } = useSelector((state: RootState) => state.manager);

  const handleUpdateClick = () => {
    dispatch(updateDrugDataAction());
  };

  return (
    <div className="flex items-end gap-1 text-xs">
      {isLoading && (
        <div className="flex items-center gap-1 p-1 text-sm text-medicineFontBlue">
          <FaSpinner className="animate-spin" />
          업데이트 중...
        </div>
      )}
      {error && <p className="text-red-500">업데이트 실패: {error}</p>}
      <PositiveButton onClick={handleUpdateClick}>
        의약품 데이터 자동 업데이트
      </PositiveButton>
    </div>
  );
};

export default ManagerDrugUpadate;
