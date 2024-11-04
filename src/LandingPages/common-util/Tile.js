const Tile = ({
  checked_state,
  img_src,
  callback_func,
  func_param,
  name,
  alt,
  tileName,
  show_checkbox = true,
}) => {
  const getCheckBox = () => {
    if (show_checkbox) {
      return (
        <div className="align-right">
          <input
            type="checkbox"
            name={name}
            id={name}
            className="onboard-checkbox"
            checked={checked_state}
          />
        </div>
      );
    }
  };

  const moveImageDown = () => {
    if (!show_checkbox) {
      return { marginTop: "20px" };
    } else {
      return { marginTop: "5px" };
    }
  };

  return (
    <div className="onboard-tile" onClick={() => callback_func(func_param)}>
      {getCheckBox()}
      <img
        className="onboard-icon"
        src={img_src}
        alt={alt}
        style={moveImageDown()}
      />
      <h6 className="onboard-tilename">{tileName}</h6>
    </div>
  );
};

export default Tile;
