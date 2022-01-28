import Button from "../share/button/Button";

export const Count = ({ count, addOne, minusOne }) => (
    <div>
      <h1>{count} </h1>
      <div>
        <Button text="+1" onClick={addOne} />
        <Button text="-1" onClick={minusOne} />
      </div>
    </div>
  );