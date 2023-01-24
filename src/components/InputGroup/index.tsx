interface InputGroupProps {
  value: string;
  setValue: (e: any) => void;
  onCreateTask: () => void;
}

export function InputGroup({ value, setValue, onCreateTask }: InputGroupProps) {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={onCreateTask}>ADD</button>
    </div>
  );
}
