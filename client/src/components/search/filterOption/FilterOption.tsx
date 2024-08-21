import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { toggleSelection } from '../../../store/slices/filterSlice';

interface FilterOptionProps {
  label: string;
  icon: React.ElementType;
  field: keyof RootState['filter'];
  value: string;
  color?: string;
}

const FilterOption: React.FC<FilterOptionProps> = ({
  label,
  icon: Icon,
  field,
  value,
  color,
}) => {
  const dispatch = useDispatch();
  const isSelected = useSelector(
    (state: RootState) => state.filter[field] === value
  );

  const iconStyle = color ? { color } : {};

  return (
    <div
      onClick={() => dispatch(toggleSelection({ field, value }))}
      className={`p-2 px-5 border-2 border-blue-400 cursor-pointer ${isSelected ? 'bg-blue-200' : ''}`}
      role="button"
      aria-label={label}
    >
      <Icon className="text-3xl" style={iconStyle} />
      {label}
    </div>
  );
};

export default FilterOption;