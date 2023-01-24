import "./styles.scss";

interface InputGroupProps {
  value: string;
  setValue: (e: any) => void;
  onCreateTask: () => void;
}

export function InputGroup({ value, setValue, onCreateTask }: InputGroupProps) {
  return (
    <div className="inputGroup">
      <input
        type="text"
        placeholder="Add your activity here"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={onCreateTask}>ADD</button>
    </div>
  );
}
