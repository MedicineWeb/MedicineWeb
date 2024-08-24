import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { PositiveButton } from '../common/Button';
import { addDrugDataAction } from '../../store/slices/managerSlice';
import { useState } from 'react';
import Input from '../common/Input';

const ManagerDrugAdd = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, error } = useSelector((state: RootState) => state.manager);

  const [drugData, setDrugData] = useState({
    drugId: 999999999,
    itemName: '',
    ingrEngName: '',
    ingrKorName: '',
    efcyQesitm: '',
    printFront: '',
    printBack: '',
    dosageForm: '',
    drugShape: '',
    colorClass1: '',
    colorClass2: '',
    lineFront: '',
    lineBack: '',
    strength: '',
    itemImage: '',
    useMethodQesitm: '',
    seQesitm: '',
    depositMethodQesitm: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setDrugData((prevData) => ({
      ...prevData,
      [name]: name === 'drugId' ? Number(value) : value,
    }));
  };

  const handleAddClick = () => {
    dispatch(addDrugDataAction(drugData));
  };

  return (
    <div className="flex flex-col items-center justify-center flex-grow bg-medicineNeutral">
      <h3 className="w-full px-5 py-1 m-1 font-semibold text-left text-medicineFontBlue">
        데이터 추가
      </h3>
      <div className="flex flex-col justify-center w-full gap-1 px-4 text-xs">
        <Input
          value={drugData.drugId}
          placeholder={'품복번호'}
          onChange={handleChange}
          name={'drugId'}
        />
        <Input
          value={drugData.itemName}
          placeholder={'의약품명'}
          onChange={handleChange}
          name={'itemName'}
        />
        <Input
          value={drugData.ingrEngName}
          placeholder={'성분명(영문)'}
          onChange={handleChange}
          name={'ingrEngName'}
        />
        <Input
          value={drugData.ingrKorName}
          placeholder={'성분명(한문)'}
          onChange={handleChange}
          name={'ingrKorName'}
        />
        <Input
          value={drugData.strength}
          placeholder={'함량: 여러개 작성 시 10.5mg, 100mg, ...'}
          onChange={handleChange}
          name={'strength'}
        />
        <Input
          value={drugData.itemImage}
          placeholder={'이미지URL'}
          onChange={handleChange}
          name={'itemImage'}
        />
        <Input
          value={drugData.dosageForm}
          placeholder={'제형'}
          onChange={handleChange}
          name={'dosageForm'}
        />
        <Input
          value={drugData.drugShape}
          placeholder={'모양 gap-1'}
          onChange={handleChange}
          name={'drugShape'}
        />
        <Input
          value={drugData.printFront}
          placeholder={'식별문자(뒤)'}
          onChange={handleChange}
          name={'printFront'}
        />
        <Input
          value={drugData.printBack}
          placeholder={'식별문자(뒤)'}
          onChange={handleChange}
          name={'printBack'}
        />
        <Input
          value={drugData.lineFront}
          placeholder={'분할선1(앞): -'}
          onChange={handleChange}
          name={'lineFront'}
        />
        <Input
          value={drugData.lineBack}
          placeholder={'분할선2(뒤): +'}
          onChange={handleChange}
          name={'lineBack'}
        />
        <Input
          value={drugData.colorClass1}
          placeholder={'색깔1(앞)'}
          onChange={handleChange}
          name={'colorClass1'}
        />
        <Input
          value={drugData.colorClass2}
          placeholder={'색깔2(뒤)'}
          onChange={handleChange}
          name={'colorClass2'}
        />
        <textarea
          name="efcyQesitm"
          placeholder="효능 효과"
          value={drugData.efcyQesitm}
          onChange={handleChange}
          className="p-1 mb-2 border rounded-lg"
        />
        <textarea
          name="useMethodQesitm"
          placeholder="복용 방법"
          value={drugData.useMethodQesitm}
          onChange={handleChange}
          className="p-1 mb-2 border rounded-lg"
        />
        <textarea
          name="seQesitm"
          placeholder="주의 사항"
          value={drugData.seQesitm}
          onChange={handleChange}
          className="p-1 mb-2 border rounded-lg"
        />
        <textarea
          name="depositMethodQesitm"
          placeholder="보관 방법"
          value={drugData.depositMethodQesitm}
          onChange={handleChange}
          className="p-1 mb-2 border rounded-lg"
        />
      </div>
      <PositiveButton onClick={handleAddClick}>추가하기</PositiveButton>
      {isLoading && <p className="text-xs">추가 중...</p>}
      {error && <p className="text-xs text-red-500">추가 실패: {error}</p>}
    </div>
  );
};

export default ManagerDrugAdd;
