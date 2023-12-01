import React from "react";

const Address = () => {
  return (
    <form className=" address">
      <label htmlFor="add">Address:</label>
      <input type="text" id="add" name="address" required />

      <label htmlFor="postal-code">Postal Code:</label>
      <input type="number" id="postal-code" name="postal-code" required />

      <label htmlFor="city">City:</label>
      <input type="text" id="city" name="city" required />

      <label htmlFor="state">State:</label>
      <input type="text" id="state" name="state" required />

      <label htmlFor="country">Country:</label>
      <input type="text" id="country" name="country" required />

      <div className="button-container">
        <button type="submit">Add New</button>
        <button type="button" className="cancel">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Address;
