import { styles } from "./style";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BoxComponent from "./../../../Base/BoxComponent";
import IconButtonComponent from "./../../../Base/IconButton";
import AvatarComponent from "./../../../Base/AvatarComponent";
import ListComponent from "./../../../UseCase/Navbar/ListComponent";

export default function Avatar() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [showMyAccountDropDown, setShowMyAccountDropDown] = useState(false);
  const [profilePicturePath, setProfilePicturePath] = useState(
    user?.attributes?.["custom:profile_url"]
      ? user?.attributes?.["custom:profile_url"]
      : null
  );

  useEffect(() => {
    if (user?.attributes) {
      setProfilePicturePath(
        user?.attributes?.["custom:profile_url"]
          ? user?.attributes?.["custom:profile_url"]
          : null
      );
    }
  }, [user]);

  const handleAccountDropdowndItemClick = (item) => {
    switch (item.id) {
      case "profileSettings":
        router.push("/my-account");
        break;
      case "myProperties":
        router.push("/my-properties?status=draft");
        break;
      case "likedProperties":
        router.push("/liked-properties");
        break;
      case "signOut":
        router.push("/");
        break;
    }
  };

  return (
    <BoxComponent sx={styles.iconButtonContainerBox}>
      <IconButtonComponent component="label">
        <BoxComponent
          sx={styles.profilePictureContainerBox}
          onMouseEnter={() => {
            setShowMyAccountDropDown(true);
          }}
          onMouseLeave={() => {
            setShowMyAccountDropDown(false);
          }}
        >
          <AvatarComponent
            src={
              profilePicturePath
                ? profilePicturePath
                : "/common/no-profile-picture.svg"
            }
            alt="Profile picture"
            sx={
              profilePicturePath
                ? styles.profilePicture
                : styles.noProfilePicture
            }
          />
        </BoxComponent>
        <div
          style={{
            ...styles.accountDropdownPopover,
            display: !showMyAccountDropDown && "none",
          }}
          onMouseEnter={() => {
            setShowMyAccountDropDown(true);
          }}
          onMouseLeave={() => {
            setShowMyAccountDropDown(false);
          }}
        >
          <ListComponent
            sx={styles.accountDropdownListMenu}
            isLink={false}
            listArray={[]}
            onItemClick={handleAccountDropdowndItemClick}
            disableTypography
          />
        </div>
      </IconButtonComponent>
    </BoxComponent>
  );
}
