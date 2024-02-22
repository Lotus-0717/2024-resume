import pic from "@assets/pic.png";

function ProfileInfo() {
  return (
    <>
      <div className="h-52 w-52 overflow-hidden rounded-full sm:px-8 ">
        <img src={pic} alt="" />
      </div>
    </>
  );
}

export default ProfileInfo;
