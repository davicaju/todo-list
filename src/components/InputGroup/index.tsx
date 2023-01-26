import { FormEvent } from "react";

import "./styles.scss";

interface InputGroupProps {
  value: string;
  setValue: (e: any) => void;
  onCreateTask: (e: FormEvent) => void;
}

export function InputGroup({ value, setValue, onCreateTask }: InputGroupProps) {
  return (
    <div className="inputGroup">
      <form onSubmit={onCreateTask}>
        <input
          type="text"
          placeholder="Add your activity here"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" onClick={onCreateTask}>
          ADD
        </button>
      </form>
    </div>
  );
}
