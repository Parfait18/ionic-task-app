/*
@Param {string} label - The label
@Param {(s: string) => void} onChange - The onChange
@Parm {boolean} checked - Whether the label is checked
*/
import { useId } from "react";
import "../theme/variables.css";

interface CheckboxInterface {
  label?: string;
  isChecked: boolean | false;
  id?: string;
  onChange: (s: any) => void;
}
function Checkbox({ id, label, isChecked, onChange }: CheckboxInterface) {
  const getId = useId();
  return (
    <div className="m-2">
      {/* <div className="md:w-1/3"></div> */}
      <label className="md:w-2/3 block text-gray-500 font-medium">
        <input
          type="checkbox"
          name="isChekecd"
          id={id ? id : getId}
          checked={isChecked}
          className="leading-tigh"
          onChange={(e) => onChange(e.target.checked)}
        />
        {label && <span className="text-sm">{label}</span>}
      </label>
    </div>
  );
}

export default Checkbox;
