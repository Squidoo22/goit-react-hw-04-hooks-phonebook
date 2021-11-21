import s from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <>
    <div>
      <label className={s.label} htmlFor="filter">
        Find contacts by name
      </label>
    </div>
    <input
      type="text"
      id="filter"
      name="filter"
      value={value}
      onChange={onChange}
      className={s.input}
    />
  </>
);

export default Filter;
