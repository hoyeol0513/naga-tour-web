import React from "react";

const LocationTable = ({si}) => {
  return (
    <div>
      <nav style={{ marginTop: "100px", textAlign: "center" }}>
        <ul
          style={{
            display: "inline-block",
            padding: "0 20px",
            borderRadius: "10px",
          }}
        >
          {si.map((v, index)=>
          <button type="button" className="btn btn-light">
            <a style={{ color: "inherit", textDecoration: "none" }} href="#">
              {v.name}
            </a>
          </button>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default LocationTable;
