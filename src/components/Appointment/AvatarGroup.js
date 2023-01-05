import Avatar from "./Avatar";

function AvatarGroup() {
  return (
   <div className="flex mb-5 -space-x-4">
    <Avatar imgSrc="https://flowbite.com/docs/images/people/profile-picture-1.jpg"/>
    <Avatar imgSrc="https://flowbite.com/docs/images/people/profile-picture-2.jpg"/>
    <Avatar imgSrc="https://flowbite.com/docs/images/people/profile-picture-3.jpg"/>
    <Avatar imgSrc="https://flowbite.com/docs/images/people/profile-picture-4.jpg"/>
    <Avatar imgSrc="https://flowbite.com/docs/images/people/profile-picture-5.jpg"/>

</div>
  );
}

export default AvatarGroup;
