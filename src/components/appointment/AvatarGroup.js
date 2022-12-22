import { Avatar} from 'flowbite-react/lib/esm/components';

function AvatarGroup({size}){

    return( <Avatar.Group  >
      <Avatar
        img="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
        rounded
        stacked
       size={size}
      />
      <Avatar
        img="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
        rounded
        stacked
        size={size}
      />
      <Avatar
        img="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
        rounded
        stacked
        size={size}
      />
      <Avatar
        img="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
        rounded
        stacked
        size={size}
      />
      <Avatar
        img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
        rounded
        stacked
        size={size}
      />
    </Avatar.Group>);
  }

  export default AvatarGroup;