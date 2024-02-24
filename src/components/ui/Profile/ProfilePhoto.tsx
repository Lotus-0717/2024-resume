import pic from "@assets/pic.png";

function ProfilePhoto() {
  return (
    <>
      <div className="h-52 w-52 overflow-hidden rounded-full">
        <img src={pic} alt="" />
      </div>
    </>
  );
}

export default ProfilePhoto;
