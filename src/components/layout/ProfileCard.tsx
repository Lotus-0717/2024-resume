import ProfilePhoto from "@components/ui/Profile/ProfilePhoto";
import ProfileName from "@components/ui/Profile/ProfileName";
import ProfileContact from "@components/ui/Profile/ProfileContact";
import SectionCard from "@components/container/SectionCard";
function ProfileInfo() {
  return (
    <div>
      <SectionCard>
        <ProfilePhoto></ProfilePhoto>
        <ProfileName></ProfileName>
        <ProfileContact></ProfileContact>
      </SectionCard>
    </div>
  );
}

export default ProfileInfo;
