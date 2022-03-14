import style from './ColorPicker.module.css';

function ColorPicker({ options }) {
  return (
    <div className={style.container}>
      <h2 className={style.title}>Color Picker</h2>
      <div>
        {options.map(option => (
          <span
            className={style.option}
            style={{ backgroundColor: option.color }}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default ColorPicker;
