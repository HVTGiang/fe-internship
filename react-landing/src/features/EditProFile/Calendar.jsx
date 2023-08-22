export default function Calendar() {
  return (
    <div className="calendar calendar--hide">
      <p className="calendar__format">MM/DD/YYYY</p>
      <div className="calendar__wrapper">
        <header>
          <div className="select-group month">
            <i className="fa-sharp fa-solid fa-angle-left setting-month"></i>
            <div className="wrapper">
              <div className="select selected-item">
                <span>Select item</span>
                <i className="fa-solid fa-caret-down toggle"></i>
              </div>
              <div className="drop-list drop-list--hide">
                <div className="option">Item1</div>
                <div className="option option--selected">Item2</div>
                <div className="option">Item3</div>
              </div>
            </div>
            <i className="fa-sharp fa-solid fa-angle-right setting-month"></i>
          </div>
          <div className="select-group year">
            <i className="fa-sharp fa-solid fa-angle-left setting-year"></i>
            <div className="wrapper">
              <div className="select selected-item">
                <span>Select item</span>
                <i className="fa-solid fa-caret-down toggle"></i>
              </div>
              <div className="drop-list drop-list--hide">
                <div className="option">Item1</div>
                <div className="option option--selected">Item2</div>
                <div className="option">Item3</div>
              </div>
            </div>
            <i className="fa-sharp fa-solid fa-angle-right setting-year"></i>
          </div>
        </header>
        <div className="calendar__space">
          <ul className="weeks">
            <li>S</li>
            <li>M</li>
            <li>T</li>
            <li>W</li>
            <li>T</li>
            <li>F</li>
            <li>S</li>
          </ul>
          <ul className="days"></ul>
        </div>
        <div className="calendar__action">
          <span className="calendar__cancel">Cancel</span>
          <span className="calendar__ok">OK</span>
        </div>
      </div>
    </div>
  );
}
