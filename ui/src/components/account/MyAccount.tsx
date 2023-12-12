import React, { useRef, useState } from "react";
import Profile from "./Profile";
import Order from "./Order";
import Address from "./Address";
import { useAppSelector } from "../../app/hooks";
import { UserData } from "../interface";
import { Close, Menu } from "react-ionicons";

const MyAccount = () => {
  const [selectedOption, setSelectedOption] = useState("profile");
  const [isNavOpen, setIsNavOpen] = useState(false); // State to track navigation bar open/close
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const currentUser: UserData | undefined = useAppSelector(
    (state) => state.app.currentUser
  );

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result as string | null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    // Trigger click on the file input when the image is clicked
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div className={"account-section"}>
      {/* Left Navbar */}
      <button
        className={!isNavOpen ? "toggle-nav-btn close" : "toggle-nav-btn "}
        onClick={handleToggleNav}
      >
        {isNavOpen ? (
          <Menu color={"#00000"} title={""} />
        ) : (
          <Close color={"#00000"} title={""} />
        )}
      </button>
      <div
        className={`left-navbar ${
          !isNavOpen ? "left-nav-open" : "left-nav-close"
        }`}
      >
        <div className="profile-container">
          <div className="image-container" onClick={handleImageClick}>
            {profilePicture ? (
              <div className="image-wrapper">
                <img src={profilePicture} alt="Profile" />
              </div>
            ) : (
              <div className="image-wrapper">
                <img src="default_profile_image.jpg" alt="Profile" />
              </div>
            )}
            <div className="overlay-text">Edit</div>
          </div>

          {/* Display name and email */}
          <div className="profile-content">
            <p>{currentUser && currentUser?.fullName}</p>
            <p className="mail">{currentUser && currentUser?.email}</p>
          </div>
          {/* File input for uploading profile picture */}
          <input
            type="file"
            id="profile-picture-input"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: "none" }}
            ref={fileInputRef}
          />
        </div>
        <ul>
          <li
            onClick={() => handleOptionClick("profile")}
            className={selectedOption === "profile" ? "active" : ""}
          >
            Profile
          </li>
          <li
            onClick={() => handleOptionClick("orders")}
            className={selectedOption === "orders" ? "active" : ""}
          >
            Orders
          </li>
          <li
            onClick={() => handleOptionClick("address")}
            className={selectedOption === "address" ? "active" : ""}
          >
            Address
          </li>
        </ul>
      </div>

      {/* Right Content */}
      <div className={`right-content ${!isNavOpen ? "full-width" : ""}`}>
        {selectedOption === "profile" && <Profile />}
        {selectedOption === "orders" && <Order />}
        {selectedOption === "address" && <Address />}
        {/* Add more conditions for other options */}
      </div>
    </div>
  );
};

export default MyAccount;
