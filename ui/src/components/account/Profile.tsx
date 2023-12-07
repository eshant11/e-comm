import React from "react";
import { useAppSelector } from "../../app/hooks";
import { UserData } from "../interface";

const Profile = () => {
  const currentUserDeatils: UserData | undefined = useAppSelector(
    (state) => state.app.currentUser
  );
  return (
    <div id="profile">
      <h2>Profile Information</h2>

      <form className="profile-form">
        <label htmlFor="fullname">Full Name:</label>
        <input
          type="text"
          id="fullname"
          name="fullname"
          required
          placeholder={currentUserDeatils?.fullName}
        />

        <label htmlFor="mail">Email:</label>
        <input
          type="email"
          id="mail"
          name="email"
          placeholder={currentUserDeatils?.email}
          readOnly
        />

        <label htmlFor="pass">Password:</label>
        <input
          type="password"
          id="pass"
          name="password"
          placeholder="***********"
        />
        <label htmlFor="confirm-pass">Confirm Password:</label>
        <input
          type="password"
          id="confirm-pass"
          name="confirm-password"
          placeholder="***********"
        />

        <label htmlFor="address">Address:</label>
        <textarea id="address" name="address" required></textarea>

        <label htmlFor="mobile-number">Mobile Number:</label>
        <input
          type="number"
          id="mobile-number"
          name="mobile-number"
          pattern="[0-9]{10}"
        />

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Profile;
